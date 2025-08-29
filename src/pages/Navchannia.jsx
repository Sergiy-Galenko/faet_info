import React, { useState } from "react";
import styles from "../styles/Navchannia.module.css";
import payment from "../image/2025-08-26_12-19-01.jpg";

function AccordionItem({ title, defaultOpen = false, children }) {
  return (
    <details className={styles.accItem} open={defaultOpen}>
      <summary className={styles.accSummary}>
        <span>{title}</span>
        <svg
          className={styles.chevron}
          width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"
        >
          <path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </summary>
      <div className={styles.accBody}>{children}</div>
    </details>
  );
}

export default function Navchannia() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>
            Навчання з FAET!
          </h1>
          <p className={styles.lead}>
            Все, що потрібно знати першокурснику: карти, розклад, стипендії та більше!
          </p>
          <a href="/" className={styles.primaryBtn}>Повернутись до головного меню</a>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Все про навчання</h2>

        <div className={styles.accordion}>
          {/* Карти */}
          <AccordionItem title="Карти КАІ" defaultOpen>
            <p>
              З перших днів легко заплутатись. Ми підготували інтерактивну мапу —
              корпуси, гуртожитки та корисні місця поруч.
            </p>
            <div className={styles.center}>
              <a
                className={styles.linkBtn}
                href="https://www.google.com/maps/search/нау"
                target="_blank" rel="noreferrer"
              >
                Карта НАУ
              </a>
            </div>
          </AccordionItem>

          {/* Нумерація аудиторій */}
          <AccordionItem title="Нумерація аудиторій">
            <p>Як читати номер аудиторії:</p>
            <ul className={styles.list}>
              <li>Перша цифра — корпус</li>
              <li>Перша цифра після крапки — поверх</li>
              <li>Решта цифр після крапки — номер аудиторії</li>
            </ul>
            <div className={styles.note}>
              <strong>Приклад:</strong> ауд. <b>5.222</b> — 6 корпус, 2 поверх, аудиторія 222
            </div>
          </AccordionItem>

          {/* Списки та групи */}
          <AccordionItem title="Списки та нумерація груп">
            <p>
              <b>Б-G5-25-1-ТК</b> — це позначення академгрупи. Розшифровка на прикладі:
            </p>
            <div className={styles.gallery}>
              <img
                src="/assets/group_name.png"
                alt="Розшифровка назви групи"
                className={styles.image}
                onClick={() => setLightboxSrc("/assets/group_name.png")}
              />
            </div>
            <p className={styles.mt}>
              Списки груп з’являються за тиждень до початку навчання:
              {" "}
              <a
                href="https://sites.google.com/npp.nau.edu.ua/faet/%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%B0%D0%BC/%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B8-%D0%B3%D1%80%D1%83%D0%BF"
                target="_blank" rel="noreferrer" className={styles.hyper}
              >
                посилання
              </a>.
            </p>
            <div className={styles.center}>
              <a
                className={styles.linkBtn}
                href="https://fcst.nau.edu.ua/%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B8-%D0%B3%D1%80%D1%83%D0%BF/"
                target="_blank" rel="noreferrer"
              >
                Списки груп
              </a>
            </div>
          </AccordionItem>

          {/* Все про розклад */}
          <AccordionItem title="Все про розклад: коли, що і де дивитись">
            <p>
              Розклад з’являється за кілька днів до старту семестру. Пари тривають по 90 хв,
              між півпарами — 5 хв, між повними парами — 15 хв. Тижні чергуються (1 → 2 → 1).
            </p>
            <p>
              Актуальний розклад:{" "}
              <a
                href="https://portal.nau.edu.ua/schedule/group/list"
                target="_blank" rel="noreferrer" className={styles.hyper}
              >
                portal.nau.edu.ua
              </a>
            </p>
            <div className={styles.gallery}>
              <img
                src="https://pppo.nau.edu.ua/wp-content/uploads/2021/10/photo_2021-09-10_10-34-22-1024x766.jpg"
                alt="Розклад дзвінків"
                className={styles.image}
                onClick={() => setLightboxSrc("https://pppo.nau.edu.ua/wp-content/uploads/2021/10/photo_2021-09-10_10-34-22-1024x766.jpg")}
              />
            </div>
          </AccordionItem>

          {/* Рейтинговий бал */}
          <AccordionItem title="Рейтинговий бал">
            <p>
              <b>Рейтинговий бал</b> — підсумок за семестр, на основі якого формують
              рейтинговий список на стипендію.
            </p>
            <div className={styles.note}>
              <strong>Примітка:</strong> Якщо бал нижче 60 — предмет не зарахований, можливе відрахування.
            </div>
            <p>
              Формула: <b>Середній бал × 0.9 + додаткові бали = рейтинговий бал</b>.
            </p>
            <div className={styles.note}>
              <strong>Приклад:</strong> 100 × 0.9 + 0 = <b>90</b>.
            </div>
            <p className={styles.mt}>
              <b>Додаткові бали</b> — за наукову, громадську, спортивну активність (до 2.5 за категорію).
              Критерії:{" "}
              <a
                href="https://drive.google.com/file/d/1oTJwKBvoK8vO7_kcyUBOQRa-nDk7G_Km/view?usp=sharing"
                target="_blank" rel="noreferrer" className={styles.hyper}
              >
                документ
              </a>.
            </p>
          </AccordionItem>

          {/* Стипендія */}
          <AccordionItem title="Все про стипендію">
            <p>
              Першу стипендію отримують 40% вступників-бюджетників з найвищими балами НМТ.
              Далі — за рейтингом після кожної сесії.
            </p>
            <ul className={styles.list}>
              <li><b>Академічна</b> — 2000 грн (40% потоку)</li>
              <li><b>Підвищена</b> — 2910 грн (за порогом на підвищену)</li>
              <li><b>Соціальна</b> — 1180 грн (за пільгами)</li>
            </ul>
          </AccordionItem>

          {/* Стипендіальна картка */}
          <AccordionItem title="Оформлення стипендіальної картки">
            <p>Стипендіальну картку оформлюють усі першокурсники-бюджетники.</p>
            <p><b>Алгоритм:</b></p>
            <ul className={styles.list}>
              <li>Оформи карту (Приватбанк / Ощадбанк / Monobank)</li>
              <li>Скопіюй IBAN (29 символів, починається з UA)</li>
              <li>Заповни форму:{" "}
                <a
                  href="https://forms.gle/RHXo6e7HVe93iduw8"
                  target="_blank" rel="noreferrer" className={styles.hyper}
                >
                  посилання
                </a>
              </li>
            </ul>
            <div className={styles.note}>
              <strong>Контакти стипендіальної бухгалтерії:</strong><br />
              <a href="mailto:vrs@nau.edu.ua" className={styles.hyper}>vrs@nau.edu.ua</a>, 1 корпус, каб. 243<br />
              пн-пт 9:00–16:00 (обід 12:00–13:00), (044) 406-78-81
            </div>
          </AccordionItem>

          {/* Система оцінювання */}
          <AccordionItem title="Система оцінювання">
            <p>Деталі системи оцінювання:</p>
            <div className={styles.gallery}>
              <img
                src="https://scontent.fhrk8-1.fna.fbcdn.net/v/t1.6435-9/48412121_2471987316149326_7276008541721198592_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4CusQtZqQ-oQ7kNvwG4B3tb&_nc_oc=AdlYgwO7gxu9I-OB3plU2NhPMzJTacV9gx00owR2ce_NdIOloNiTX9I5DbPRa986j2o&_nc_zt=23&_nc_ht=scontent.fhrk8-1.fna&_nc_gid=huOZ4mIDvi05OdjcrUZ7fg&oh=00_AfWSYxObUVu_Fm7HmsGCRZQZbufwor6CyQqC_xO2U3gnbg&oe=68D4DEDE"
                alt="Таблиця оцінювання"
                className={styles.image}
                onClick={() => setLightboxSrc("https://scontent.fhrk8-1.fna.fbcdn.net/v/t1.6435-9/48412121_2471987316149326_7276008541721198592_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4CusQtZqQ-oQ7kNvwG4B3tb&_nc_oc=AdlYgwO7gxu9I-OB3plU2NhPMzJTacV9gx00owR2ce_NdIOloNiTX9I5DbPRa986j2o&_nc_zt=23&_nc_ht=scontent.fhrk8-1.fna&_nc_gid=huOZ4mIDvi05OdjcrUZ7fg&oh=00_AfWSYxObUVu_Fm7HmsGCRZQZbufwor6CyQqC_xO2U3gnbg&oe=68D4DEDE")}
              />
            </div>
            <div className={styles.note}>
              <strong>Примітка:</strong> Підхід може відрізнятись у викладачів (інколи 5-бальна шкала).
              Важливо знати відповідність до 100-бальної системи.
            </div>
          </AccordionItem>

          {/* Корпоративна пошта */}
          <AccordionItem title="Корпоративна пошта: що це та для чого?">
            <p>
              <b>Корпоративна пошта</b> — університетська адреса для навчання і важливих повідомлень.
            </p>
            <ul className={styles.list}>
              <li>Офіційне спілкування (деканат, DU, Classroom)</li>
              <li>Доступ до освітніх платформ</li>
              <li>Реєстрації на заходи/форми</li>
            </ul>
            <p><b>Активація:</b></p>
            <ul className={styles.list}>
              <li>Отримаєш лист з адресою</li>
              <li>Зайди в акаунт, зміни пароль</li>
            </ul>
            <div className={styles.note}>
              <strong>Порада:</strong> Перший вхід — пароль <code>12345678</code>, далі обов’язково змінити.
            </div>
          </AccordionItem>

          {/* Digital University */}
          <AccordionItem title="Digital University">
            <p>
              <a href="https://cabinet.nau.edu.ua" target="_blank" rel="noreferrer" className={styles.hyper}>
                Digital University
              </a>{" "}
              — кабінет студента: розклад, оцінки, вибіркові дисципліни (з 2 семестру) тощо.
            </p>
            <div className={styles.note}>
              <strong>Корисно:</strong> Активуй кабінет заздалегідь, щоб уникнути проблем.
            </div>
          </AccordionItem>

          {/* Оплата навчання */}
          <AccordionItem title="[Оновлюється] Оплата навчання">
            <p>
              Оплатити навчання можна онлайн — надішли лист-запит на
              {" "}
              <a href="mailto:vors@npp.nau.edu.ua" className={styles.hyper}>vors@npp.nau.edu.ua</a>{" "}
              для отримання квитанції.
            </p>
            <div className={styles.note}>
              <strong>У темі:</strong> факультет; <strong>у листі:</strong> ПІБ, форма навчання,
              факультет, спец. (код/назва), курс.
            </div>
            <p className={styles.mt}><b>Реквізити:</b></p>
            <ul className={styles.list}>
              <li>IBAN: <code>UA473052990000026003035031679</code></li>
              <li>ЄДРПОУ: <code>45853942</code></li>
            </ul>
            <p className={styles.strong}>Дедлайни: 10 вересня (1 сем.) та 10 лютого (2 сем.).</p>
            <div className={styles.note}>
              <strong>Контакти контрактної бухгалтерії:</strong>{" "}
              <a href="mailto:vors@npp.nau.edu.ua" className={styles.hyper}>vors@npp.nau.edu.ua</a>,
              корпус №1, каб. 247, Пн-Пт 10-16 (перерва 12-13),
              (044) 406-75-53, (044) 406-77-41, (044) 406-79-20
            </div>
            <div className={styles.gallery}>
              <img
                src={payment}
                alt="Оплата навчання"
                className={styles.image}
                onClick={() => setLightboxSrc(payment)}
              />
            </div>
          </AccordionItem>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxSrc && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxSrc(null)}
        >
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
