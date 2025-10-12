import React, { useEffect, useId, useState } from "react";
import styles from "../styles/Orhanizatsii.module.css";

import srFaet from "../image/telegram-peer-photo-size-2-5206268831641752870-1-0-0.jpg";
import faettosa from "../image/faettosa.jpg";
import tosa1 from "../image/tosa1.jpg";
import tosa2 from "../image/tosa2.jpg";
import tosa3 from "../image/tosa3.jpg";
import nahub1 from "../image/nauhub.jpg";
import nahub2 from "../image/nauhub2.jpg";

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

export default function Orhanizatsii() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  useEffect(() => { document.title = "FAET — Організації"; }, []);

  // Універсальний обробник для зображень
  const openLightbox = (e) => setLightboxSrc(e.currentTarget.src);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Організації КАІ!</h1>
          <p className={styles.lead}>
            Дізнайся про студентські ініціативи та спільноти, які роблять університет яскравішим!
          </p>
          <a href="/" className={styles.primaryBtn}>Повернутись до головного меню</a>
        </div>
      </section>

      {/* Intro cards */}
      <section className={styles.introWrap}>
        <h2 className={styles.sectionTitle}>Студентські організації та спільноти</h2>
        <div className={styles.introGrid}>
          <article className={styles.card}>
            <h5 className={styles.cardTitle}>✈️ Орган студентського самоврядування</h5>
            <p className={styles.cardText}>
              Незалежне студентське об’єднання, що працює за принципом демократії: студенти спільно
              приймають рішення та впливають на життя університету.
            </p>
          </article>
          <article className={styles.card}>
            <h5 className={styles.cardTitle}>✈️ Студентське самоврядування ФАЕТ</h5>
            <p className={styles.cardText}>
              Можливість впливати на навчальний процес і умови, відстоювати права та інтереси студентів.
              СР ФАЕТ — голос студентів, що допомагає втілювати ініціативи та створювати комфортне середовище.
            </p>
          </article>
        </div>
      </section>

      {/* ACCORDIONS */}
      <section className={styles.section}>
        <div className={styles.accordion}>
          <AccordionItem title="Конференція студентів університету" defaultOpen>
            <p className={styles.text}>
              Вищий орган студентського самоврядування. Затверджує нормативну базу, контролює інші органи,
              ухвалює кошторис тощо.
            </p>
            <p className={styles.center}>
              <a href="https://t.me/nau_ksu" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю КСУ
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Центральна виборча комісія">
            <p className={styles.text}>
              Організовує вибори студентського самоврядування. Без легітимно обраних складів інші органи не можуть працювати.
            </p>
            <p className={styles.center}>
              <a href="https://t.me/studrada_cvk" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю ЦВК
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Студентська уповноважена делегація">
            <p className={styles.text}>
              Стежить, щоб органи самоврядування діяли за правилами: розглядає скарги, ухвалює рішення щодо порушень,
              контролює дотримання положень. Склад обирається щороку на КСУ.
            </p>
            <p className={styles.center}>
              <a href="https://t.me/nau_sud" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю СУД
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Студентська рада КАІ">
            <div className={styles.logoWrap}>
              <img src="https://sr-fknt.github.io/info/assets/logo-kai.png" alt="Логотип СР КАІ" className={styles.logoImg} />
            </div>
            <p className={styles.text}>
              <b>Студентська рада КАІ (СР КАІ)</b> — виконавчий ОСС університету та серце студентського життя.
              Об’єднує студентів різних факультетів для реалізації ініціатив і представлення інтересів студентства.
            </p>
            <p className={styles.center}>
              <a href="https://t.me/studrada_kai" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю СР КАІ
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Студентська рада ФАЕТ">
            <div className={styles.logoWrap}>
              <img src={srFaet} alt="Логотип СР ФАЕТ" className={styles.logoImg} />
            </div>
            <p className={styles.text}>
              <b>Студентська рада ФАЕТ (СР ФАЕТ)</b> — команда, що організовує життя факультету:
              заходи, проєкти, захист прав студентів. Структура включає Голову, Заступника, Секретаря та голів департаментів.
            </p>

            <h5 className={styles.subheading}>Департаменти Студради ФАЕТ</h5>
            <div className={styles.deptGrid}>
              <article className={styles.deptCard}>
                <h6 className={styles.deptTitle}><strong>Медіа та комунікації</strong></h6>
                <p className={styles.text}>Контент, соцмережі, афіші, фото. Комунікація між студентами та Студрадою.</p>
              </article>
              <article className={styles.deptCard}>
                <h6 className={styles.deptTitle}><strong>Громадська активність</strong></h6>
                <p className={styles.text}>Розвиток громадянської свідомості, залучення до важливих ініціатив та волонтерства.</p>
              </article>
              <article className={styles.deptCard}>
                <h6 className={styles.deptTitle}><strong>Студкуратори</strong></h6>
                <p className={styles.text}>Адаптація першокурсників: зустрічі, лекції, підтримка, поради у будь-яких ситуаціях.</p>
              </article>
            </div>

            <p className={styles.text}><strong>Також Студрада:</strong></p>
            <ul className={styles.list}>
              <li>Моніторить якість освітнього процесу та допомагає вирішувати проблемні ситуації.</li>
              <li>Підтримує й розвиває IT-спільноту факультету (лекції, тренінги, хакатони).</li>
              <li>Допомагає з інноваційними студентськими проєктами.</li>
            </ul>
            <p className={styles.center}>
              <a href="https://t.me/fsc_faet" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю СР ФАЕТ
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Студентська рада Студентського Містечка">
            <div className={styles.logoWrap}>
              <img src="https://sr-fknt.github.io/info/assets/logo-srsm.png" alt="Логотип СР СМ" className={styles.logoImg} />
            </div>
            <p className={styles.text}>
              <b>СР СМ</b> захищає інтереси мешканців гуртожитків і робить життя там комфортним: є Голова, заступники,
              секретар, департаменти та СР кожного гуртожитку.
            </p>

            <h5 className={styles.subheading}>Контактна інформація гуртожитків</h5>
            <div className={styles.deptGrid}>
              <article className={styles.deptCard}>
                <h6 className={styles.deptTitle}><strong>Гуртожиток 9</strong></h6>
                <ul className={styles.cleanList}>
                  <li>Канал: <a href="https://t.me/gurt_9_NAU" className={styles.hyper} target="_blank" rel="noreferrer">посилання</a></li>
                </ul>
              </article>
            </div>

            <p className={styles.center}>
              <a href="https://t.me/nau_srsm" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю СР СМ
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Творче об’єднання студентів і аспірантів (ТОСА)">
            <div className={styles.logoWrap}>
              <img src={faettosa} alt="Логотип ТОСА" className={styles.logoImg} />
            </div>
            <p className={styles.text}>
              <b>ТОСА</b> — простір для музики, танців, відео, гумору, імпровізації та творчих людей.
            </p>
            <div className={styles.gallery}>
              <img src={tosa1} alt="ТОСА 1" className={styles.image} onClick={openLightbox} />
              <img src={tosa2} alt="ТОСА 2" className={styles.image} onClick={openLightbox} />
              <img src={tosa3} alt="ТОСА 3" className={styles.image} onClick={openLightbox} />
            </div>
            <p className={styles.center}>
              <a href="https://t.me/tosa_fcst" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю ТОСА ФАЕТ
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="NAUHUB">
            <div className={styles.logoWrap}>
              <img src="https://sr-fknt.github.io/info/assets/logo-hub.png" alt="Логотип NAUHUB" className={styles.logoImg} />
            </div>
            <p className={styles.text}>
              <b>NAUHUB</b> — простір для проєктів, подій і нетворкінгу. Тут зустрічаються клуби, є коворкінг-зона.
            </p>
            <div className={styles.gallery}>
              <img src={nahub1} alt="NAUHUB 1" className={styles.image} onClick={openLightbox} />
              <img src={nahub2} alt="NAUHUB 2" className={styles.image} onClick={openLightbox} />
            </div>
            <p className={styles.center}>
              <a href="https://t.me/addlist/RA91IusT4nYyMzA6" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю NAUHUB
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Мейкерспейс КАІ">
            <p className={styles.text}>
              <b>Мейкерспейс КАІ</b> — творчий хаб з 3D-друком, лазерним різанням, паянням і прототипуванням (ауд. 3.100).
            </p>
            <div className={styles.gallery}>
              <img src="https://sr-fknt.github.io/info/assets/maker1.jpg"  alt="Мейкерспейс 1" className={styles.image} onClick={openLightbox} />
              <img src="https://sr-fknt.github.io/info/assets/maker2.jpg"  alt="Мейкерспейс 2" className={styles.image} onClick={openLightbox} />
              <img src="https://sr-fknt.github.io/info/assets/maker3.jpeg" alt="Мейкерспейс 3" className={styles.image} onClick={openLightbox} />
            </div>
            <p className={styles.center}>
              <a href="https://discord.gg/gStYZPUq6U" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю Мейкерспейс
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="TOV Power">
            <p className={styles.text}>
              <b>TOV Power</b> — інженерна студентсько-волонтерська лабораторія: ліхтарі, павербанки та інші девайси для військових.
            </p>
            <ul className={styles.list}>
              <li>Практика в електроніці та електротехніці</li>
              <li>Реальні корисні пристрої для фронту</li>
              <li>Тепла атмосфера однодумців</li>
            </ul>
            <p className={styles.center}>
              <a href="https://t.me/TOVpower" target="_blank" rel="noreferrer" className={styles.hyper}>
                Слідкуй за діяльністю TOV Power
              </a>
            </p>
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
          <img src={lightboxSrc} alt="Перегляд" className={styles.lightboxImg} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
