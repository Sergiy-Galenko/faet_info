import logo from "../logo.webp";
import styles from "../styles/components/Footer.module.css";
import { nav, support, socialMedia } from "../data/links";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__createdBy}>
        <a className={styles.footer__createdBy__imgLink} href='/'>
          <img src={logo} alt="Logo" />
        </a>
        <p className={styles.footer__createdBy__paragraph}>
          Created by FAET's Dev-department
        </p>
      </div>
      <div className={styles.footer__mainLinks}>
        <p className={styles.linksTitle}>Основні посилання</p>
        {nav.map((item) => (
          <a 
            key={item.url} 
            className={styles.footer__mainLinks_link} 
            href={item.url}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className={styles.footer__supportLinks}>
        <p className={styles.linksTitle}>Підтримка</p>
        {support.map((item) => (
          <a 
            key={item.url} 
            className={styles.footer__supportLinks_link} 
            href={item.url}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className={styles.footer_socialMediaLinks}>
        <p className={styles.linksTitle}>Соцмережі</p>
        {socialMedia.map((item) => (
          <a 
            key={item.url} 
            className={styles.footer_socialMediaLinks_link} 
            href={item.url}
          >
            {item.text}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;