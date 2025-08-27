import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="faet-header">
      <div className="faet-container">
        <a href="/" className="faet-brand" aria-label="ФАЕТ — головна">
          <FaetLogo className="faet-logo" />
          <span className="faet-brand-text">ФАЕТ</span>
        </a>

        <nav className="faet-nav" aria-label="Головна навігація">
          <a className="faet-link" href="/navchannia">Навчання</a>
          <a className="faet-link" href="/hurtozhytky">Гуртожитки</a>
          <a className="faet-link" href="/orhanizatsii">Організації</a>
          <a className="faet-link" href="/slovnyk-pershokursnyka">Словник першокурсника</a>
        </nav>
      </div>
    </header>
  );
}

function FaetLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="FAET логотип"
    >
      <rect x="2" y="2" width="44" height="44" rx="8" className="faet-logo-bg" />
      <text x="50%" y="56%" textAnchor="middle" className="faet-logo-text">
        FAET
      </text>
    </svg>
  );
}
