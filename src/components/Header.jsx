import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia("(max-width: 720px)");
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(query.matches);
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isMobile && menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobile, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    if (typeof window === "undefined") return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { to: "/navchannia", label: "Навчання" },
    { to: "/hurtozhytky", label: "Гуртожитки" },
    { to: "/administratsiia", label: "Адміністрація" },
    { to: "/orhanizatsii", label: "Організації" },
    { to: "/slovnyk-pershokursnyka", label: "Словник першокурсника" },
  ];

  return (
    <>
      <header className="faet-header">
        <div className="faet-container">
          <Link to="/" className="faet-brand" aria-label="ФАЕТ — головна" onClick={() => setMenuOpen(false)}>
            <FaetLogo className="faet-logo" />
            <span className="faet-brand-text">ФАЕТ</span>
          </Link>

          <button
            type="button"
            className={`faet-burger${menuOpen ? " is-active" : ""}`}
            aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={menuOpen}
            aria-controls="faet-primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="faet-primary-nav"
            className={`faet-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Головна навігація"
            aria-hidden={isMobile && !menuOpen}
          >
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className="faet-link" onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {menuOpen && isMobile && (
        <button
          type="button"
          className="faet-nav-backdrop"
          aria-label="Закрити меню"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
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
