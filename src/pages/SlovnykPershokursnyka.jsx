import React, { useEffect } from "react";
import styles from "../styles/Pages.module.css";

export default function SlovnykPershokursnyka() {
  useEffect(() => { document.title = "FAET — Словник першокурсника"; }, []);
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Словник першокурсника</h1>
        <p>Основні терміни, абревіатури та корисні поради для швидкого старту.</p>
      </section>

      <section className={styles.cards}>
        <article className={styles.card}>
          <h3>Терміни</h3>
          <p>Семестр, кредит, модуль, вибіркова дисципліна тощо.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Абревіатури</h3>
          <p>Деканат, кафедра, НПП, ЄКТС та інші.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>Поради</h3>
          <p>Як планувати час, користуватися ресурсами та знаходити підтримку.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
        <article className={styles.card}>
          <h3>FAQ</h3>
          <p>Вступ, документи, поселення, контакти та довідки.</p>
          <a href="#" className={styles.btn}>Дізнатися більше</a>
        </article>
      </section>
    </main>
  );
}
