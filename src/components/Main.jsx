import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./Header";
import Plane from "./Plane";

import Navchannia from "../pages/Navchannia";
import Hurtozhytky from "../pages/Hurtozhytky";
import Orhanizatsii from "../pages/Orhanizatsii";
import SlovnykPershokursnyka from "../pages/SlovnykPershokursnyka";

function GlobalStyles() {
  return (
    <style>{`
      :root{
        --bg:#0b1220;          /* чорний */
        --card:#111827;        /* темна картка */
        --txt:#e5e7eb;         /* білий/сірий текст */
        --muted:#9ca3af;       /* приглушений */
        --blue:#2563eb;        /* синій акцент */
        --border:#1f2937;      /* бордер */
      }
      .page-wrap{ background:var(--bg); min-height:100dvh; }
      .container{ max-width:1200px; margin:0 auto; padding:24px 16px 64px; }

      /* HERO */
      .hero{
        display:grid; grid-template-columns:1.1fr 0.9fr;
        gap:24px; align-items:center; margin-top:16px;
      }
      .hero-text{
        color:var(--txt);
        background:linear-gradient(180deg, rgba(37,99,235,0.12), transparent);
        border:1px solid var(--border);
        border-radius:16px; padding:24px;
      }
      .hero-text h1{ margin:0 0 8px 0; color:#fff; letter-spacing:.3px; }
      .hero-text p{ margin:0; color:var(--muted); line-height:1.6; }

      /* CARDS */
      .cards{ margin-top:32px; display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
      .card{
        background:var(--card); border:1px solid var(--border); border-radius:16px;
        padding:18px; color:var(--txt); display:flex; flex-direction:column; gap:8px;
        box-shadow:0 4px 20px rgba(0,0,0,.25);
      }
      .card h3{ margin:0; color:#fff; }
      .card p{ margin:0 0 12px 0; color:var(--muted); }
      .btn{
        margin-top:auto; display:inline-block; text-decoration:none; text-align:center;
        padding:10px 14px; border-radius:12px; border:1px solid var(--blue); color:#fff;
        background:linear-gradient(180deg, rgba(37,99,235,0.2), rgba(37,99,235,0.05));
        transition:transform .12s ease, background .2s ease, box-shadow .2s ease;
      }
      .btn:hover{ transform:translateY(-1px); background:rgba(37,99,235,0.28); box-shadow:0 6px 22px rgba(37,99,235,0.25); }

      /* Responsive */
      @media (max-width:1024px){ .cards{ grid-template-columns:repeat(2,1fr); } }
      @media (max-width:720px){
        .hero{ grid-template-columns:1fr; }
        .cards{ grid-template-columns:1fr; }
      }
    `}</style>
  );
}

function Landing() {
  return (
    <div className="container">
      <section className="hero">
        <div>
          <Plane />
        </div>

        <div className="hero-text">
          <h1>ФАЕТ — головна сторінка</h1>
          <p>
          Факультет аеронавігації, електроніки та телекомунікацій – це місце, де поєднуються інновації, передові технології та сучасна освіта! 
          </p>
        </div>
      </section>

      <section className="cards">
        <article className="card">
          <h3>Навчання</h3>
          <p>Програми, кафедри, розклад, ресурси.</p>
          <Link to="/navchannia" className="btn">Дізнатися більше</Link>
        </article>

        <article className="card">
          <h3>Гуртожитки</h3>
          <p>Поселення, правила проживання, контакти.</p>
          <Link to="/hurtozhytky" className="btn">Дізнатися більше</Link>
        </article>

        <article className="card">
          <h3>Організації</h3>
          <p>Студради, клуби, наукові товариства.</p>
          <Link to="/orhanizatsii" className="btn">Дізнатися більше</Link>
        </article>

        <article className="card">
          <h3>Словник першокурсника</h3>
          <p>Терміни, абревіатури, поради.</p>
          <Link to="/slovnyk-pershokursnyka" className="btn">Дізнатися більше</Link>
        </article>
      </section>
    </div>
  );
}

export default function Main() {
  return (
    <BrowserRouter>
      <div className="page-wrap">
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/navchannia" element={<Navchannia />} />
          <Route path="/hurtozhytky" element={<Hurtozhytky />} />
          <Route path="/orhanizatsii" element={<Orhanizatsii />} />
          <Route path="/slovnyk-pershokursnyka" element={<SlovnykPershokursnyka />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
