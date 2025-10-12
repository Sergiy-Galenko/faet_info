import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hurtozhytky.module.css";

function AccordionItem({ title, defaultOpen = false, children }) {
  const contentId = useId();
  const triggerId = `${contentId}-trigger`;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const itemClass = `${styles.accItem}${isOpen ? ` ${styles.accItemOpen}` : ""}`;

  return (
    <article className={itemClass}>
      <button
        type="button"
        className={styles.accSummary}
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{title}</span>
        <svg className={styles.chevron} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <div
        id={contentId}
        className={styles.accBody}
        hidden={!isOpen}
        aria-hidden={!isOpen}
        aria-labelledby={triggerId}
      >
        {children}
      </div>
    </article>
  );
}

export default function Hurtozhytky() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>
            Гуртожитки FAET!
          </h1>
          <p className={styles.lead}>
            Все про гуртожитки: як поселитися, які умови та як зв’язатися зі студрадою!
          </p>
          <Link to="/" className={styles.primaryBtn}>Повернутись до головного меню</Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Все про гуртожитки</h2>

        <div className={styles.accordion}>
          <AccordionItem title="Основне про гуртожитки" defaultOpen>
            <p>
              На час навчання університет пропонує кілька варіантів проживання — від класичного
              коридорного до сучасного блочного формату.
            </p>
            <div className={styles.center}>
              <a
                className={styles.linkBtn}
                href="https://www.google.com/maps/d/u/0/edit?mid=10bcc2Zp086kBM4H3koWbXG3UCKUy87w&usp=sharing"
                target="_blank" rel="noreferrer"
              >
                Карта гуртожитків
              </a>
            </div>

            <div className={styles.gallery}>
              <img
                src="https://nau.edu.ua/site/variables/menuimages/34646.JPG"
                alt="Карта гуртожитків"
                className={styles.image}
                onClick={() => setLightboxSrc("https://nau.edu.ua/site/variables/menuimages/34646.JPG")}
              />
            </div>

            <div className={styles.faqGrid}>
              <article className={styles.faqCard}>
                <h5>Гуртожиток №9 — секційна система</h5>
                <p>
                  Кілька кімнат утворюють секцію з власною кухнею і туалетом.
                  Душ — спільний, на нульовому поверсі.
                  <br /><strong>Осіб у кімнаті: 2, 3 або 4.</strong>
                </p>
              </article>
            </div>
          </AccordionItem>

          {/* Поселення */}
          <AccordionItem title="Поселення">
            <p>
              <strong>Коли відбудеться поселення?</strong> Орієнтовно <strong>25–30 серпня</strong>.
              Детальний графік публікується окремо для кожної спеціальності.
            </p>
            <p>
              Інформація про заселення надходить у Digital University (кабінет вступника).
            </p>

            <div className={styles.note}>
              <strong>Примітка:</strong> Бери мінімум речей. Процес триває кілька годин — речі доведеться носити із собою.
            </div>

            <p className={styles.mt}><strong>Алгоритм заселення (схема):</strong></p>
            <div className={styles.gallery}>
              <img
                src="/assets/algorithm.png"
                alt="Алгоритм заселення"
                className={styles.image}
                onClick={() => setLightboxSrc("/assets/algorithm.png")}
              />
            </div>

            <p className={styles.mt}><strong>Необхідні документи:</strong></p>
            <ul className={styles.list}>
              <li>Паспорт / ID-картка</li>
              <li>Медична довідка 086 (флюорографія та дерматовенеролог)</li>
            </ul>

            <p className={styles.mt}><strong>Оплата проживання:</strong></p>
            <ul className={styles.list}>
              <li>Оплатити з 1 вересня по 30 листопада</li>
              <li>Квитанцію можна отримати з початку навчального року</li>
            </ul>

            <div className={styles.note}>
              <strong>Примітка:</strong> Вказуй ПІБ згідно з квитанцією. Чек залиш собі — надсилати не потрібно.
            </div>

            <p className={styles.mt}>
              Маєш пільги? Перевір можливість отримати знижку на проживання.
            </p>

            <div className={styles.gallery}>
              <img
                src="https://fkpi.nau.edu.ua/wp-content/uploads/2023/08/Pilgy.jpeg"
                alt="Інформація про пільги"
                className={styles.image}
                onClick={() => setLightboxSrc("https://fkpi.nau.edu.ua/wp-content/uploads/2023/08/Pilgy.jpeg")}
              />
            </div>

            <div className={styles.note}>
              <strong>Контакти бухгалтерії студмістечка:</strong><br />
              <a href="mailto:studmisto@kai.edu.ua" className={styles.hyper}>studmisto@kai.edu.ua</a>,
              гуртожиток №3, каб. 11<br />
              пн–пт 9:00–16:00 (обід 12:00–13:00) • (044) 406-70-41
            </div>
          </AccordionItem>

          {/* Студентська рада студмістечка */}
          <AccordionItem title="Студентська рада студмістечка">
            <p>
              <strong>Студентська Рада Студмістечка (СР СМ)</strong> — орган самоврядування, що
              представляє інтереси мешканців гуртожитків. Очолює Голова (обирається на рік),
              до складу входять заступники, секретар, департаменти та голови рад гуртожитків.
            </p>

            <p className={styles.sectionNote}><strong>Контакти гуртожитків:</strong></p>

            <div className={styles.faqGrid}>
              <article className={styles.faqCard}>
                <h5>Гуртожиток №9</h5>
                <ul className={styles.flatList}>
                  <li>Канал — <a href="https://t.me/gurt_9_NAU" target="_blank" rel="noreferrer" className={styles.hyper}>посилання</a></li>
                </ul>
              </article>
            </div>
          </AccordionItem>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxSrc && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={() => setLightboxSrc(null)}>
          <button
            className={styles.closeBtn}
            aria-label="Закрити зображення"
            onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
          >
            ×
          </button>
          <img
            src={lightboxSrc}
            alt="Перегляд"
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
