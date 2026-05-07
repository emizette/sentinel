import React, { useState, useEffect, useRef } from 'react';
import RiskMeter from './RiskMeter';
import './ChatBot.css';

const API_URL = process.env.REACT_APP_API_URL || '';
const MAX_QUESTIONS = 10;

const INITIAL_MESSAGE = {
  role: 'assistant',
  content:
    "Hi, I'm Sentinel. I'm here to help you assess whether someone you've met online might be running a pig butchering or romance scam — two of the most psychologically sophisticated fraud tactics out there.\n\nThis session is completely confidential and judgment-free. I'll ask you up to 10 questions to understand your situation.\n\nThe more detail you share in each answer, the more accurate your assessment will be — don't hold back.\n\nTo begin: how did you first come across or meet this person?",
};

const RISK_LEVEL_REGEX = /RISK_LEVEL:\s*(LOW|MODERATE|HIGH|VERY_HIGH)/i;

export default function ChatBot() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [riskLevel, setRiskLevel] = useState(null);
  const bottomRef = useRef(null);

  const assistantCount = messages.filter((m) => m.role === 'assistant').length;
  const sessionComplete = riskLevel !== null;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, riskLevel]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading || sessionComplete) return;

    const updatedMessages = [...messages, { role: 'user', content: text }];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
    setError('');

    // Trigger final assessment after the AI has asked MAX_QUESTIONS questions
    const isFinalAssessment = assistantCount >= MAX_QUESTIONS;

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages, isFinalAssessment }),
      });

      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        throw new Error('Cannot reach the backend. Make sure the server is running on port 5000.');
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      const riskMatch = data.response.match(RISK_LEVEL_REGEX);
      let displayResponse = data.response;

      if (riskMatch) {
        setRiskLevel(riskMatch[1].toUpperCase());
        // Strip the RISK_LEVEL line so it doesn't appear in the chat bubble
        displayResponse = data.response
          .replace(RISK_LEVEL_REGEX, '')
          .replace(/\n{3,}/g, '\n\n')
          .trim();
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: displayResponse }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput('');
    setError('');
    setRiskLevel(null);
  };

  const questionNumber = Math.min(assistantCount, MAX_QUESTIONS);
  const progressLabel = sessionComplete
    ? 'Assessment Complete'
    : `Question ${questionNumber} of ${MAX_QUESTIONS}`;

  const progressPercent = sessionComplete
    ? 100
    : Math.round((questionNumber / MAX_QUESTIONS) * 100);

  return (
    <div className="chatbot-wrapper">

      {/* Session bar */}
      <div className="session-bar">
        <div className="session-bar-left">
          <span className="session-label">{progressLabel}</span>
          <div className="session-progress-track" aria-hidden="true">
            <div
              className={`session-progress-fill${sessionComplete ? ' complete' : ''}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
        <button className="reset-btn" onClick={resetChat} title="Start a new assessment">
          New Chat
        </button>
      </div>

      {/* Disclaimer */}
      <div className="chatbot-disclaimer">
        <strong>Confidential &amp; Judgment-Free</strong> — Nothing you share is stored. If you are in immediate danger, contact local authorities.
      </div>

      {/* Messages */}
      <div className="chatbot-messages" role="log" aria-live="polite">
        {messages.map((msg, i) => (
          <div key={i} className={`message-row ${msg.role}`}>
            {msg.role === 'assistant' && (
              <div className="avatar" aria-hidden="true">AI</div>
            )}
            <div className={`message-bubble ${msg.role}`}>
              {msg.content.split('\n').map((line, j, arr) => (
                <span key={j}>
                  {line}
                  {j < arr.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}

        {loading && (
          <div className="message-row assistant">
            <div className="avatar" aria-hidden="true">AI</div>
            <div className="message-bubble assistant typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}

        {riskLevel && <RiskMeter level={riskLevel} />}

        {error && (
          <div className="error-banner" role="alert">
            {error} — Please try again.
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input — hidden after session ends */}
      {!sessionComplete ? (
        <div className="chatbot-input-area">
          <textarea
            className="chatbot-input"
            rows={2}
            placeholder="Share as much detail as you can… (Enter to send, Shift+Enter for new line)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            aria-label="Chat input"
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            {loading ? '…' : 'Send'}
          </button>
        </div>
      ) : (
        <div className="session-complete-bar">
          Your assessment is ready above.{' '}
          <button className="reset-link" onClick={resetChat}>
            Start a new assessment →
          </button>
        </div>
      )}
    </div>
  );
}
