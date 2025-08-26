import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SlovnykPershokursnyka.module.css";

function Card({ emoji, title, text, note }) {
  return (
    <article className={styles.card}>
      <h5 className={styles.cardTitle}>
        <span className={styles.emoji} aria-hidden="true">{emoji}</span> {title}
      </h5>
      <p className={styles.cardText}>{text}</p>
      {note ? <p className={styles.noteSmall}><strong>Примітка: </strong>{note}</p> : null}
    </article>
  );
}

export default function SlovnykPershokursnyka() {
  const [tab, setTab] = useState("Навчання");

  const learning = useMemo(() => ([
    { emoji:"📚", title:"Академічна доброчесність", text:"Не списувати, не привласнювати чужі роботи, не купувати готові." },
    { emoji:"👥", title:"Потік", text:"Кілька груп одного курсу, об’єднані спеціальністю." },
    { emoji:"⏳", title:"Вікно", text:"Пауза між парами: можна відпочити або підготуватися до наступних занять." },
    { emoji:"📧", title:"Корпоративка", text:"Університетська пошта для навчання та офіційних повідомлень.",
      note:"У полі адресата достатньо ввести прізвище — система підкаже потрібну корпоративну адресу." },
    { emoji:"📝", title:"Конспект", text:"Особисті записи з пар — найкращий друг перед сесією." },
    { emoji:"🧪", title:"Лаба", text:"Практичне заняття із завданням та захистом у викладача." },
    { emoji:"📊", title:"МКР", text:"Модульна контрольна робота після теми." },
    { emoji:"📐", title:"РГР", text:"Розрахунково-графічна робота з кількох завдань і захистом." },
    { emoji:"📅", title:"Сесія", text:"Період іспитів двічі на рік — зима та літо." },
    { emoji:"🎓", title:"Екзамен і залік", text:"Іспит — головна перевірка знань; залік — підсумок семестру, інколи з контрольною." },
    { emoji:"📑", title:"Курсач", text:"Курсовий проєкт/робота, де показуєш навички з дисципліни." },
    { emoji:"🏆", title:"Автомат", text:"Можливість отримати оцінку без екзамену за відмінну роботу протягом семестру." },
    { emoji:"🏃", title:"Бігунок", text:"Можливість закрити академічні борги. Краще не затягувати." },
    { emoji:"💼", title:"Літня практика", text:"Виробнича (в компанії) або обчислювальна (в університеті) — залежно від дисципліни." },
    { emoji:"👑", title:"Староста", text:"Комунікація між групою і викладачами, допомога в організації." },
    { emoji:"🧭", title:"Студкуратор", text:"Старшокурсник, що допомагає першокурсникам з навчанням і адаптацією." },
    { emoji:"👨‍🏫", title:"Куратор", text:"Викладач, який опікується вашою академічною групою." },
    { emoji:"🏛️", title:"Декан", text:"Керівник факультету та організатор навчального процесу на факультеті." },
    { emoji:"🎓", title:"Президент", text:"Вищий керівник університету (стратегія, розвиток, управління)." },
    { emoji:"🏢", title:"Кафедра", text:"Підрозділ факультету: викладачі, плани дисциплін, методична робота." },
  ]), []);

  const life = useMemo(() => ([
    { emoji:"➖", title:"Мінуса", text:"Прізвисько першокурсників у КАІ, що лишилось із часів форменого одягу." },
    { emoji:"🗣️", title:"Студрада ФКНТ", text:"Команда студентів, яка робить життя факультету кращим: івенти, підтримка, захист прав." },
    { emoji:"🎭", title:"ТОСА ФКНТ", text:"Творче Об’єднання Студентів і Аспірантів: сцена, відео, гумор, танці — простір для творчості." },
    { emoji:"💡", title:"НауХаб", text:"Простір для навчання, ігор, проєктів і подій. Коворкінг і клуби за інтересами." },
    { emoji:"🧮", title:"Примати", text:"Студенти ПРИкладної МАТематики. Маскот — мавпочка." },
    { emoji:"☕", title:"Шара", text:"Місце біля 3-го гуртожитку та Форсажу, де студенти часто збираються." },
    { emoji:"🪟", title:"Акваріум", text:"Загальна кімната в 3-му гуртожитку зі скляними стінами — для навчання і відпочинку." },
    { emoji:"🛋️", title:"Папай", text:"Простір у 7-му гуртожитку для навчання та релаксу." },
    { emoji:"🏡", title:"Колодязь", text:"Внутрішній дворик у 3-му корпусі, популярне місце зустрічей." },
    { emoji:"🍔", title:"Стінка", text:"Магазин за 3-м гуртожитком. Лайфхак: паніні на грилі — топ." },
  ]), []);

  const items = tab === "Навчання" ? learning : life;

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>
            Що це означає?
            <img src="/assets/plane.png" alt="" className={styles.planeIcon} />
          </h1>
          <p className={styles.lead}>
            Тлумачимо всі слова, які чутимеш у перші тижні навчання.
          </p>
          <Link to="/" className={styles.primaryBtn}>Повернутись до головного меню</Link>
        </div>
      </section>

      {/* TABS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Дізнайся все про ФКНТ!</h2>

        <div className={styles.tabsWrap} role="tablist" aria-label="Категорії словника">
          {["Навчання", "Студентське життя"].map((name) => (
            <button
              key={name}
              role="tab"
              aria-selected={tab === name}
              className={`${styles.tabBtn} ${tab === name ? styles.tabActive : ""}`}
              onClick={() => setTab(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className={styles.grid} role="tabpanel" aria-label={tab}>
          {items.map(({ emoji, title, text, note }) => (
            <Card key={title} emoji={emoji} title={title} text={text} note={note} />
          ))}
        </div>
      </section>
    </main>
  );
}
