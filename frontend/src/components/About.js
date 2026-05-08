import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">

        <div className="about-header">
          <h1 className="about-page-title">About <span>Sentinel</span></h1>
          <p className="about-page-desc">
            An AI-powered tool built by NJIT students to help detect pig butchering and romance scams — grounded in FBI IC3 research.
          </p>
        </div>

        {/* Executive Summary */}
        <section className="about-section">
          <div className="about-section-icon">📋</div>
          <div>
            <h2>Executive Summary</h2>
            <p>
              This project investigates <strong>Pig Butchering (<em>sha zhu pan</em>)</strong> and <strong>Romance Scams</strong> as one of the fastest-growing and most financially devastating categories of digital crime. In 2023, the FBI's Internet Crime Complaint Center (IC3) recorded over <strong>$5 billion</strong> in losses attributed to investment fraud, of which pig butchering scams represent the dominant share.
            </p>
            <p>
              The term originates from the criminal underworld: victims are emotionally "fattened" through long-term relationship building before being financially "slaughtered."
            </p>
            <div className="about-stat-row">
              <div className="about-stat">
                <span className="stat-number">$5B+</span>
                <span className="stat-label">Investment fraud losses recorded by FBI IC3 in 2023</span>
              </div>
              <div className="about-stat">
                <span className="stat-number">#1</span>
                <span className="stat-label">Fastest-growing category of digital financial crime</span>
              </div>
              <div className="about-stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Research pillars powering Sentinel's methodology</span>
              </div>
            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* Project Purpose */}
        <section className="about-section">
          <div className="about-section-icon">🎯</div>
          <div>
            <h2>Project Purpose</h2>
            <p>
              The purpose of this project is to research, analyze, and present pig butchering and romance scam operations in depth — and to translate that research into a practical product. Our research is anchored across four pillars:
            </p>
            <div className="about-pillars">
              <div className="about-pillar">
                <span className="pillar-num">01</span>
                <div>
                  <strong>Psychological Manipulation Tactics</strong>
                  <p>Analyzing the full pig butchering lifecycle: initial contact via wrong-number texts or dating apps, trust-building, introduction of a fake investment platform, and the deposit trap.</p>
                </div>
              </div>
              <div className="about-pillar">
                <span className="pillar-num">02</span>
                <div>
                  <strong>Real Victim Case Studies</strong>
                  <p>Profiling documented cases with financial loss data, victim demographics, scam platform details, and law enforcement outcomes drawn from DOJ prosecutions and investigative journalism.</p>
                </div>
              </div>
              <div className="about-pillar">
                <span className="pillar-num">03</span>
                <div>
                  <strong>Crypto Tracing &amp; Money Laundering</strong>
                  <p>Tracing how funds flow from victim bank accounts into cryptocurrency, through layering via multiple wallets, to eventual cash-out — the same techniques used in real DOJ prosecutions.</p>
                </div>
              </div>
              <div className="about-pillar">
                <span className="pillar-num">04</span>
                <div>
                  <strong>Romance Scam Checker (Sentinel)</strong>
                  <p>An interactive AI-powered web application with a risk assessment engine, weighted scoring, and research-backed explanations for each documented red flag — grounded in FBI IC3 sources.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* How Sentinel Works */}
        <section className="about-section">
          <div className="about-section-icon">🤖</div>
          <div>
            <h2>How Sentinel Works</h2>
            <p>
              Sentinel asks you up to <strong>10 guided questions</strong> about your situation and uses AI — powered by the Anthropic API — to identify patterns that match known scam tactics documented by the FBI IC3. At the end of the session, you receive one of four risk levels with a detailed explanation of the red flags identified.
            </p>
            <div className="about-levels">
              <div className="about-level level-low">
                <span>LOW</span>
                <p>Few or no significant red flags detected.</p>
              </div>
              <div className="about-level level-moderate">
                <span>MODERATE</span>
                <p>Some concerning patterns — proceed with caution.</p>
              </div>
              <div className="about-level level-high">
                <span>HIGH</span>
                <p>Multiple red flags — strong signs of a scam.</p>
              </div>
              <div className="about-level level-critical">
                <span>CRITICAL</span>
                <p>Closely matches known scam patterns — take action now.</p>
              </div>
            </div>
            <div className="about-notice">
              <strong>Privacy:</strong> Nothing you type is stored, logged, or transmitted anywhere beyond your current session. Closing or refreshing the page erases the conversation entirely.
            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* Team */}
        <section className="about-section">
          <div className="about-section-icon">👥</div>
          <div>
            <h2>The Team</h2>
            <p>Sentinel was built by a team of five students at the <strong>New Jersey Institute of Technology</strong> for a cybercrime research course supervised by Professor Dipesh Patel.</p>
            <div className="about-team">
              <div className="about-team-member">
                <span className="team-role">Project Manager</span>
                <span className="team-name">Emilette Segura</span>
                <span className="team-email">eds26@njit.edu</span>
              </div>
              <div className="about-team-member">
                <span className="team-role">Web App Developer</span>
                <span className="team-name">Fernanda Somohano</span>
                <span className="team-email">mfs34@njit.edu</span>
              </div>
              <div className="about-team-member">
                <span className="team-role">Researcher</span>
                <span className="team-name">Elifsude Kerpeten</span>
                <span className="team-email">ek324@njit.edu</span>
              </div>
              <div className="about-team-member">
                <span className="team-role">Web App Developer</span>
                <span className="team-name">Saba Khan</span>
                <span className="team-email">sk3684@njit.edu</span>
              </div>
              <div className="about-team-member">
                <span className="team-role">Researcher</span>
                <span className="team-name">Waleed Sheikh</span>
                <span className="team-email">was34@njit.edu</span>
              </div>
            </div>
            <div className="about-notice">
              <strong>Supervisor:</strong> Professor Dipesh Patel —{' '}
              <a href="mailto:dipesh.patel@njit.edu">dipesh.patel@njit.edu</a> — New Jersey Institute of Technology
            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* Disclaimer */}
        <section className="about-section">
          <div className="about-section-icon">⚖️</div>
          <div>
            <h2>Disclaimer</h2>
            <p>
              Sentinel is an <strong>educational tool</strong> and does not constitute legal or financial advice. It is designed to surface patterns consistent with known fraud tactics — not to make a definitive judgment. If you believe you have been scammed, contact your local authorities and report to the{' '}
              <a href="https://reportfraud.ftc.gov" target="_blank" rel="noreferrer">FTC</a> and the{' '}
              <a href="https://ic3.gov" target="_blank" rel="noreferrer">FBI IC3</a>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}