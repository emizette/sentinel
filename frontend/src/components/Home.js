import React from 'react';
import sentinelLogo from '../pictures/logo.png';
import './Home.css';

export default function Home({ setPage }) {
  return (
    <div className="home-wrapper">
      <div className="home-stars" aria-hidden="true" />
      <NetworkDeco className="net-deco net-tl" />
      <NetworkDeco className="net-deco net-tr" />
      <NetworkDeco className="net-deco net-br" />

      <div className="home-hero">
        <img src={sentinelLogo} alt="Sentinel logo" className="home-logo" />

        <h1 className="home-title">SENTINEL</h1>
        <p className="home-subtitle">AI-Powered Scam Detection</p>
        <p className="home-subtitle2">Grounded in FBI IC3 Research</p>

        <p className="home-tagline">
          Think you might be talking to a scammer?<br />
          Sentinel uses AI to analyze your situation and identify red flags — privately, instantly, and judgment-free.
        </p>

        <button className="home-cta-btn" onClick={() => setPage('sentinel')}>
          Start Your Assessment →
        </button>

        <div className="home-features">
          <div className="home-feat"><RiskIcon /><span>Risk Scoring</span></div>
          <div className="home-feat"><TraceFundsIcon /><span>Trace Funds</span></div>
          <div className="home-feat"><PsychIcon /><span>Psychological<br />Analysis</span></div>
        </div>

        <div className="home-trust-badges">
          <span className="trust-badge">🔒 100% Confidential</span>
          <span className="trust-badge">🤖 AI-Powered</span>
          <span className="trust-badge">⚡ Instant Results</span>
          <span className="trust-badge">🆓 Free to Use</span>
        </div>
      </div>

      <footer className="home-footer">
        <p>Project "Pig Butchering Prevention" | New Jersey Institute of Technology | Risk assessment grounded in FBI IC3 sources.</p>
        <p>v0.1 Alpha | Emilette Segura · Fernanda Somohano · Elifsude Kerpeten · Saba Khan · Waleed Sheikh</p>
      </footer>
    </div>
  );
}

function RiskIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="4,36 16,20 26,28 38,10" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="36,6 48,6 48,18" fill="none" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="38" cy="40" r="6" stroke="url(#g1)" strokeWidth="2.5" fill="none"/>
      <line x1="38" y1="37" x2="38" y2="41" stroke="#1BBFC4" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="38" cy="43.5" r="1" fill="#1BBFC4"/>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1BBFC4"/>
          <stop offset="100%" stopColor="#6B5CE7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function TraceFundsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1BBFC4"/>
          <stop offset="100%" stopColor="#6B5CE7"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="28" height="28" rx="4" stroke="url(#g2)" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="7" stroke="url(#g2)" strokeWidth="2.5"/>
      <line x1="10" y1="24" x2="17" y2="24" stroke="#1BBFC4" strokeWidth="2" strokeLinecap="round"/>
      <line x1="31" y1="24" x2="38" y2="24" stroke="#1BBFC4" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="10" x2="24" y2="17" stroke="#1BBFC4" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="31" x2="24" y2="38" stroke="#1BBFC4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function PsychIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1BBFC4"/>
          <stop offset="100%" stopColor="#6B5CE7"/>
        </linearGradient>
      </defs>
      <circle cx="20" cy="16" r="8" stroke="url(#g3)" strokeWidth="2.5"/>
      <path d="M4 40c0-8.84 7.16-16 16-16" stroke="url(#g3)" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="36" cy="30" r="4" stroke="url(#g3)" strokeWidth="2" fill="none"/>
      <line x1="39.8" y1="33.8" x2="44" y2="38" stroke="#6B5CE7" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function NetworkDeco({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40"  cy="40"  r="4" fill="rgba(27,191,196,0.4)"/>
      <circle cx="160" cy="60"  r="3" fill="rgba(107,92,231,0.3)"/>
      <circle cx="80"  cy="150" r="5" fill="rgba(27,191,196,0.4)"/>
      <circle cx="150" cy="140" r="3" fill="rgba(107,92,231,0.3)"/>
      <circle cx="100" cy="80"  r="3" fill="rgba(27,191,196,0.25)"/>
      <line x1="40"  y1="40"  x2="160" y2="60"  stroke="rgba(27,191,196,0.15)" strokeWidth="1"/>
      <line x1="160" y1="60"  x2="150" y2="140" stroke="rgba(107,92,231,0.15)" strokeWidth="1"/>
      <line x1="40"  y1="40"  x2="80"  y2="150" stroke="rgba(27,191,196,0.1)"  strokeWidth="1"/>
      <line x1="80"  y1="150" x2="150" y2="140" stroke="rgba(107,92,231,0.15)" strokeWidth="1"/>
      <line x1="100" y1="80"  x2="160" y2="60"  stroke="rgba(27,191,196,0.1)"  strokeWidth="1"/>
      <line x1="100" y1="80"  x2="80"  y2="150" stroke="rgba(107,92,231,0.1)"  strokeWidth="1"/>
    </svg>
  );
}