import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Administratsiia.module.css";

const managementUnits = [
  {
    title: "Ректорат НАУ",
    description: "Стратегічно керує університетом, погоджує навчальні плани, фінанси та представницькі функції.",
    location: "Головний корпус (1), 2 поверх, блок «Ректорат»",
    contacts: [
      { label: "Приймальна", value: "+380 (44) 406-79-12" },
      { label: "Е-пошта", value: "rector@nau.edu.ua" },
    ],
  },
  {
    title: "Вчена рада",
    description: "Колегіальний орган, який ухвалює рішення щодо освітніх програм, присвоєння вчених звань і розвитку науки.",
    location: "Головний корпус (1), актова зала / конференц-кімната ректорату",
    contacts: [
      { label: "Секретаріат", value: "+380 (44) 406-72-35" },
    ],
  },
  {
    title: "Приймальна комісія",
    description: "Консультує абітурієнтів, приймає документи та супроводжує вступну кампанію.",
    location: "1 корпус, 1 поверх, блок «Приймальна комісія»",
    contacts: [
      { label: "Кол-центр", value: "+380 (44) 406-76-15" },
      { label: "Telegram", value: "@nau_abit" },
    ],
  },
];

const deanOffice = {
  location: "7 корпус НАУ, 3 поверх, каб. 307-309",
  schedule: "пн–пт 09:00–17:00 (обід 13:00–14:00)",
  phones: ["+380 (44) 406-78-45", "+380 (44) 406-78-46"],
  email: "faet@nau.edu.ua",
  note: "Деканат опікується навчальними питаннями студентів, довідками, розкладом, переведенням та індивідуальними заявами.",
};

const departments = [
  {
    name: "Кафедра аеронавігації та управління повітряним рухом",
    abbreviation: "АНУПР",
    focus: "Підготовка диспетчерів, фахівців з управління польотами та безпеки польотів.",
    location: "7 корпус, 2 поверх, ауд. 207",
    contact: "an-nav@nau.edu.ua",
  },
  {
    name: "Кафедра електроніки",
    abbreviation: "ЕЛ",
    focus: "Електронні системи, мікроконтролери, схемотехніка та телекомунікаційні пристрої.",
    location: "7 корпус, 4 поверх, ауд. 415",
    contact: "electronics@nau.edu.ua",
  },
  {
    name: "Кафедра телекомунікаційних та радіосистем",
    abbreviation: "ТРС",
    focus: "Радіотехніка, мережі зв’язку, супутникові та мережеві технології.",
    location: "8 корпус, 3 поверх, ауд. 308",
    contact: "trs@nau.edu.ua",
  },
  {
    name: "Кафедра обчислювальної техніки та програмування",
    abbreviation: "ОТП",
    focus: "Програмна інженерія, кібербезпека, високопродуктивні обчислення.",
    location: "7 корпус, 5 поверх, ауд. 502",
    contact: "otp@nau.edu.ua",
  },
  {
    name: "Кафедра фізики та математики",
    abbreviation: "ФМ",
    focus: "Базові дисципліни, підтримка лабораторій та підготовка до наукових досліджень.",
    location: "1 корпус, 6 поверх, ауд. 612",
    contact: "physics@nau.edu.ua",
  },
];

export default function Administratsiia() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Адміністрація та структури ФАЕТ</h1>
          <p className={styles.lead}>
            Розбираємося, хто керує університетом і факультетом, до кого звертатися з навчальними питаннями та де розташовані кафедри.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ключові підрозділи університету</h2>
        <div className={styles.cardGrid}>
          {managementUnits.map((unit) => (
            <article key={unit.title} className={styles.card}>
              <h3>{unit.title}</h3>
              <p>{unit.description}</p>
              <dl className={styles.meta}>
                <dt>Локація</dt>
                <dd>{unit.location}</dd>
                {unit.contacts.map((contact) => (
                  <React.Fragment key={contact.value}>
                    <dt>{contact.label}</dt>
                    <dd>{contact.value}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Актуальні кабінети можуть змінюватися під час ремонтів чи переїздів. Перевіряй адреси на сайті НАУ або уточнюй телефоном перед візитом.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Деканат ФАЕТ</h2>
        <div className={styles.callout}>
          <p>{deanOffice.note}</p>
          <dl className={styles.meta}>
            <dt>Локація</dt>
            <dd>{deanOffice.location}</dd>
            <dt>Години прийому</dt>
            <dd>{deanOffice.schedule}</dd>
            <dt>Телефони</dt>
            <dd>
              {deanOffice.phones.map((phone) => (
                <span key={phone} className={styles.line}>{phone}</span>
              ))}
            </dd>
            <dt>Е-пошта</dt>
            <dd>{deanOffice.email}</dd>
          </dl>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Кафедри факультету</h2>
        <div className={styles.deptGrid}>
          {departments.map((dept) => (
            <article key={dept.name} className={styles.deptCard}>
              <div className={styles.deptHeader}>
                <h3>{dept.name}</h3>
                <span className={styles.badge}>{dept.abbreviation}</span>
              </div>
              <p>{dept.focus}</p>
              <dl className={styles.meta}>
                <dt>Локація</dt>
                <dd>{dept.location}</dd>
                <dt>Контакти</dt>
                <dd>{dept.contact}</dd>
              </dl>
            </article>
          ))}
        </div>
        <div className={styles.note}>
          <strong>Порада:</strong> якщо не знаєш, до якої кафедри належить твоя група,
          перевір наказ про зарахування або уточни у свого куратора.
        </div>
      </section>
    </main>
  );
}
