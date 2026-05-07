import React, { useEffect, useState } from 'react';
import './RiskMeter.css';

const LEVELS = {
  LOW: {
    percent: 18,
    label: 'Low Risk',
    description: 'Few or no significant red flags were identified in your situation.',
  },
  MODERATE: {
    percent: 48,
    label: 'Moderate Risk',
    description: 'Some concerning patterns were detected. Proceed with caution and review the red flags below.',
  },
  HIGH: {
    percent: 74,
    label: 'High Risk',
    description: 'Multiple significant red flags were identified. This situation shows strong signs of a scam.',
  },
  VERY_HIGH: {
    percent: 94,
    label: 'Very High Risk — Likely a Scam',
    description: 'This situation closely matches known pig butchering or romance scam patterns. Please take immediate steps to protect yourself.',
  },
};

export default function RiskMeter({ level }) {
  const [animated, setAnimated] = useState(false);
  const config = LEVELS[level] || LEVELS.MODERATE;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, [level]);

  const overlayWidth = animated ? `${100 - config.percent}%` : '100%';

  return (
    <div className="risk-meter" role="status" aria-label={`Risk assessment: ${config.label}`}>
      <p className="meter-heading">Risk Assessment Result</p>

      <div className="meter-level-row">
        <span className={`meter-badge level-${level.toLowerCase().replace('_', '-')}`}>
          {config.label}
        </span>
      </div>

      {/* Gradient track with animated overlay revealing from left */}
      <div className="meter-track" aria-hidden="true">
        <div className="meter-gradient-fill" />
        <div className="meter-overlay" style={{ width: overlayWidth }} />
      </div>

      {/* Tick labels */}
      <div className="meter-ticks" aria-hidden="true">
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
        <span>Very High</span>
      </div>

      <p className="meter-description">{config.description}</p>
    </div>
  );
}
