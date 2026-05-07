const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : true, // allow all origins in development
}));
app.use(express.json());

const SYSTEM_PROMPT = `You are Sentinel, a compassionate and knowledgeable assistant specialized in identifying pig butchering scams and romance scams. Your mission is to help users assess whether they may be experiencing one of these scams through empathetic, guided conversation.

ABOUT THESE SCAMS:
- Pig butchering scams ("sha zhu pan") involve scammers who build relationships online, gain deep trust over weeks or months, then lure victims into fake cryptocurrency or investment platforms to steal their money.
- Romance scams involve fraudsters creating fake identities to form emotional bonds, then requesting money for emergencies, travel, investments, or other fabricated needs.
- Both are sophisticated psychological manipulation tactics that can happen to anyone, regardless of education or intelligence.

YOUR APPROACH:
1. Ask ONE question at a time — never ask multiple questions in one message.
2. Be empathetic, supportive, and never blame or shame the user.
3. Encourage the user to be as detailed as possible in their answers — more detail leads to a more accurate assessment.
4. Adapt your questions naturally based on what the user shares.
5. You have exactly 10 questions total. Use them wisely to cover these key areas:
   - How and where they met this person (dating app, social media, WhatsApp/Telegram, "wrong number" text, LinkedIn)
   - How quickly the emotional bond developed (love bombing — very fast declarations of love or intense connection)
   - Whether they have met in person or had live unscripted video calls (watch for constant excuses: military overseas, oil rig, doctor abroad)
   - Whether the person has mentioned cryptocurrency, investment platforms, Forex trading, or "special" trading methods
   - Whether there have been any requests for money, gift cards, wire transfers, or cryptocurrency
   - Promises of unusually high investment returns or exclusive platform access
   - Being asked to keep the relationship or investment secret from family and friends
   - Urgency or pressure to act quickly, fear of missing out
   - Whether the person's photos or profile seem too perfect, or reverse image search shows stock photos

FINAL ASSESSMENT (triggered when the user has answered all 10 questions):
When you receive the instruction to provide your final assessment, write a clear and caring closing message. Then provide:
1. A brief summary statement like "Based on everything you've shared, here is your assessment:"
2. A numbered list of specific red flags you identified from this conversation
3. A brief explanation of what those red flags indicate
4. Concrete next steps the user should take (stop sending money immediately, never pay to "recover" losses, report to FTC at reportfraud.ftc.gov and FBI IC3 at ic3.gov, speak to someone they trust)
5. Reassurance that scams can happen to anyone — it is never the victim's fault

CRITICAL FORMATTING RULE FOR FINAL ASSESSMENT:
At the very end of your final assessment message, on its own line, you MUST include exactly one of these lines with no extra text around it:
RISK_LEVEL: LOW
RISK_LEVEL: MODERATE
RISK_LEVEL: HIGH
RISK_LEVEL: VERY_HIGH

Choose the one that best reflects the overall risk based on the full conversation. Do not include this line in any other response — only the final assessment.

IMPORTANT: Be honest but gentle. Never dismiss concerns. Never declare it a scam based on a single factor — consider the full picture.`;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
  res.json({ message: 'Sentinel backend is running' });
});

app.post('/api/chat', async (req, res) => {
  const { messages, isFinalAssessment } = req.body || {};

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required.' });
  }

  const lastMessage = messages[messages.length - 1];
  if (!lastMessage || lastMessage.role !== 'user') {
    return res.status(400).json({ error: 'Last message must be from the user.' });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || 'gemini-flash-latest',
      systemInstruction: SYSTEM_PROMPT,
    });

    const rawHistory = messages.slice(0, -1).map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // Gemini requires history to start with a 'user' turn.
    // Strip any leading 'model' turns (e.g. the UI's initial greeting message).
    const firstUserIdx = rawHistory.findIndex((m) => m.role === 'user');
    const history = firstUserIdx === -1 ? [] : rawHistory.slice(firstUserIdx);

    const chat = model.startChat({ history });

    let userText = lastMessage.content;
    if (isFinalAssessment) {
      userText +=
        '\n\n[SYSTEM: This was the final question in the session. Please provide your complete final risk assessment now, and remember to include the RISK_LEVEL line at the very end as instructed.]';
    }

    const result = await chat.sendMessage(userText);
    const responseText = result.response.text();

    res.json({ response: responseText });
  } catch (err) {
    console.error('Gemini API error:', err.message);
    const status = err.message?.includes('429') ? 429 : 500;
    const userMessage =
      status === 429
        ? 'The AI is temporarily rate-limited. Please wait a few seconds and try again.'
        : 'Failed to get a response from the AI. Please try again.';
    res.status(status).json({ error: userMessage });
  }
});

// Global error handler — ensures Express 5 never returns an HTML error page
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(err.status || 500).json({ error: err.message || 'An unexpected server error occurred.' });
});

app.listen(PORT, () => {
  console.log(`Sentinel server running on port ${PORT}`);
});
