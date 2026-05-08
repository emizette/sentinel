import React from 'react';
import sentinelLogo from '../pictures/logo.png';
import './Navbar.css';

export default function Navbar({ page, setPage }) {
  const links = [
    { id: 'home',      label: 'Home' },
    { id: 'sentinel',  label: 'Sentinel' },
    { id: 'resources', label: 'Resources' },
    { id: 'about',     label: 'About' },
    { id: 'faq',       label: 'FAQs' },
  ];

  return (
    <nav className="sentinel-nav" role="navigation" aria-label="Main navigation">
      <button className="nav-brand-btn" onClick={() => setPage('home')}>
        <img src={sentinelLogo} alt="Sentinel logo" className="nav-logo-img" />
        <span className="nav-brand-name">
          SEN<span>TINEL</span>
        </span>
      </button>

      <ul className="nav-links">
        {links.map(({ id, label }) => (
          <li key={id}>
            <button
              className={`nav-link nav-link-btn${page === id ? ' nav-link-active' : ''}${id === 'sentinel' ? ' nav-link-cta' : ''}`}
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}