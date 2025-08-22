import React, { useEffect } from "react";
import styles from "../styles/Pages.module.css";

export default function Orhanizatsii() {
  useEffect(() => { document.title = "FAET — Організації"; }, []);
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Організації</h1>
        <p>Студради, наукові товариства, клуби та волонтерські ініціативи.</p>
      </section>

      <section className={styles.cards}>
        <article className={styles.card}>
          <h3>Студрада</h3>
          <p>Представництво студентів, події, проєкти та допомога.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Наукові гуртки</h3>
          <p>Дослідження, хакатони, публікації та співпраця.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Клуби</h3>
          <p>Спорт, ІТ, дизайн, дебати та інше дозвілля.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Волонтерство</h3>
          <p>Соціальні ініціативи та партнерські проєкти.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
      </section>
    </main>
  );
}
