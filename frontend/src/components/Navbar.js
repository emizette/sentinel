import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Navbar.css';

export default function Navbar() {
  const [showAbout, setShowAbout] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);

  return (
    <>
      <nav className="sentinel-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-brand">
          <span className="nav-shield" aria-hidden="true">🛡️</span>
          <span className="nav-brand-name">Sentinel</span>
        </div>
        <ul className="nav-links" role="list">
          <li>
            <a className="nav-link" href="/" aria-label="Sentinel home">
              Sentinel
            </a>
          </li>
          <li>
            <button className="nav-link nav-link-btn" onClick={() => setShowAbout(true)}>
              About
            </button>
          </li>
          <li>
            <button className="nav-link nav-link-btn" onClick={() => setShowFAQs(true)}>
              FAQs
            </button>
          </li>
        </ul>
      </nav>

      {/* ── About Modal ── */}
      <Modal show={showAbout} onHide={() => setShowAbout(false)} centered size="md">
        <Modal.Header closeButton className="sentinel-modal-header">
          <Modal.Title>About Sentinel</Modal.Title>
        </Modal.Header>
        <Modal.Body className="sentinel-modal-body">
          <p>
            <strong>Sentinel</strong> is an AI-powered assessment tool designed to help you determine
            whether someone you have met online may be running a <strong>pig butchering scam</strong> or
            a <strong>romance scam</strong>.
          </p>
          <p>
            These scams are among the fastest-growing forms of financial fraud. They rely on deep
            emotional manipulation — not just technical tricks — which means they can affect anyone,
            regardless of age, education, or background.
          </p>
          <p>
            Sentinel will ask you up to 10 guided questions about your situation and use AI to identify
            patterns that match known scam tactics. At the end, you will receive a risk assessment with
            specific red flags and recommended next steps.
          </p>
          <div className="modal-notice">
            <strong>Privacy:</strong> Nothing you type is stored or logged. Each session is
            independent and fully confidential.
          </div>
          <div className="modal-notice warning">
            <strong>Disclaimer:</strong> Sentinel is an educational tool and does not constitute
            legal or financial advice. If you believe you have been scammed, contact your local
            authorities and report to the{' '}
            <a href="https://reportfraud.ftc.gov" target="_blank" rel="noreferrer">FTC</a> and{' '}
            <a href="https://ic3.gov" target="_blank" rel="noreferrer">FBI IC3</a>.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="modal-close-btn" onClick={() => setShowAbout(false)}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ── FAQs Modal ── */}
      <Modal show={showFAQs} onHide={() => setShowFAQs(false)} centered size="lg">
        <Modal.Header closeButton className="sentinel-modal-header">
          <Modal.Title>Frequently Asked Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body className="sentinel-modal-body">
          <div className="faq-item">
            <h5>What is a pig butchering scam?</h5>
            <p>
              A pig butchering scam (known in Chinese as <em>sha zhu pan</em>) is a long-con fraud where
              a scammer builds a genuine-feeling romantic or friendly relationship over weeks or months,
              then introduces the victim to a fake investment platform — usually cryptocurrency — and
              convinces them to deposit money. Once enough has been transferred, the scammer disappears
              with all the funds.
            </p>
          </div>
          <div className="faq-item">
            <h5>What is a romance scam?</h5>
            <p>
              Romance scammers create fake online identities to gain a victim's trust and affection.
              They then invent emergencies — medical bills, stuck funds, travel costs — and ask for
              money. Unlike pig butchering, these scams don't always involve investments but rely on
              the same emotional manipulation.
            </p>
          </div>
          <div className="faq-item">
            <h5>How does this tool work?</h5>
            <p>
              Sentinel uses Google's Gemini AI, trained with knowledge of known scam patterns, to
              ask you targeted questions about your situation. Based on your answers, it identifies
              red flags and produces a risk level: Low, Moderate, High, or Very High.
            </p>
          </div>
          <div className="faq-item">
            <h5>Is my conversation private?</h5>
            <p>
              Yes. Sentinel does not store, log, or transmit your responses anywhere beyond the
              current AI session. Closing or refreshing the page erases the conversation entirely.
            </p>
          </div>
          <div className="faq-item">
            <h5>I think I'm being scammed. What should I do right now?</h5>
            <p>
              Stop sending any money immediately. Do <strong>not</strong> pay any "fees" to recover
              funds you have already sent — that is part of the scam. Report the incident to the{' '}
              <a href="https://reportfraud.ftc.gov" target="_blank" rel="noreferrer">FTC</a>,{' '}
              <a href="https://ic3.gov" target="_blank" rel="noreferrer">FBI IC3</a>, and your bank
              or financial institution. Tell someone you trust.
            </p>
          </div>
          <div className="faq-item">
            <h5>Can this tool give a wrong result?</h5>
            <p>
              Yes — no AI tool is perfect. Sentinel is designed to surface patterns, not to make a
              definitive judgment. Use the results as a guide and seek professional advice if you are
              uncertain.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="modal-close-btn" onClick={() => setShowFAQs(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
