import React, { useState } from 'react';
import styles from '../styles/components/LoginModal.module.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const LoginModal = ({ closeModal }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Логіка відправки форми входу
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeModal} onClick={closeModal}>&times;</span>
        <h2 className={styles.centerContent}>Вхід</h2>
        <div className={styles.centerContent}>
          <button className={styles.googleButton}>Вхід через Google</button>
        </div>
        <p className={styles.centerContent}>або введи свої дані нижче</p>
        <form className={styles.form} onSubmit={handleLoginSubmit}>
          <label>Електронна пошта</label>
          <input
            type="email"
            name="loginEmail"
            placeholder="example@gmail.com"
            className={styles.input}
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <label>Пароль</label>
          <div className={styles.passwordContainer}>
            <input
              type={loginPasswordVisible ? 'text' : 'password'}
              name="loginPassword"
              placeholder="Ваш пароль"
              className={styles.input}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setLoginPasswordVisible(!loginPasswordVisible)}
              title={loginPasswordVisible ? 'Приховати пароль' : 'Показати пароль'}
            >
              {loginPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <button type="submit" className={styles.submitButton}>Увійти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
