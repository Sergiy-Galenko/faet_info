import React, { useEffect } from "react";
import styles from "../styles/Pages.module.css";

export default function Hurtozhytky() {
  useEffect(() => { document.title = "FAET — Гуртожитки"; }, []);
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Гуртожитки</h1>
        <p>Поселення, правила проживання, оплата та корисні контакти комендантів.</p>
      </section>

      <section className={styles.cards}>
        <article className={styles.card}>
          <h3>Поселення</h3>
          <p>Умови, подача заявки, перелік документів.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Правила</h3>
          <p>Права та обов’язки мешканців, безпека та дисципліна.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Оплата</h3>
          <p>Тарифи, способи оплати, строки та пільги.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Контакти</h3>
          <p>Коменданти, чергові, технічна підтримка.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
      </section>
    </main>
  );
}
