import React, { useState } from 'react';
import PasswordField from './PasswordField';
import styles from '../styles/components/RegistrationForm.module.css';
import logo from '../logo.webp';

const RegistrationForm = ({ openLoginModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    surname: '',
    name: '',
    patronymic: '',
    email: '',
    group: '',
    isLeader: false,
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Обробники подій
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors({
        ...errors,
        [name]: 'Це поле обов\'язкове',
      });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка відправки форми реєстрації
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.centerContent}>
          <h2>Створи акаунт</h2>
          <button className={styles.telegramButton}>Приєднай Telegram</button>
          <p className={styles.description}>та введи дані нижче</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Юзернейм</label>
          <input
            type="text"
            name="username"
            placeholder="Використовуй латиницю без пробілів"
            className={`${styles.input} ${errors.username ? styles.errorInput : ''}`}
            value={formData.username}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.username && <span className={styles.errorText}>{errors.username}</span>}

          {/* Прізвище */}
          <label>Прізвище</label>
          <input
            type="text"
            name="surname"
            placeholder="Вводь справжнє прізвище для коректної інформації"
            className={`${styles.input} ${errors.surname ? styles.errorInput : ''}`}
            value={formData.surname}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.surname && <span className={styles.errorText}>{errors.surname}</span>}

          {/* Ім'я */}
          <label>Ім'я</label>
          <input
            type="text"
            name="name"
            placeholder="Вводь справжнє ім'я для коректної інформації"
            className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}

          {/* По батькові */}
          <label>По батькові</label>
          <input
            type="text"
            name="patronymic"
            placeholder="Вводь справжнє по батькові для коректної інформації"
            className={`${styles.input} ${errors.patronymic ? styles.errorInput : ''}`}
            value={formData.patronymic}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.patronymic && <span className={styles.errorText}>{errors.patronymic}</span>}

          {/* Пошта */}
          <label>Пошта</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}

          {/* Група */}
          <label>Група</label>
          <select
            name="group"
            className={`${styles.select} ${errors.group ? styles.errorInput : ''}`}
            value={formData.group}
            onChange={handleInputChange}
            onBlur={handleBlur}
          >
            <option value="">Вибери зі списку</option>
            <option value="group1">Група 1</option>
            <option value="group2">Група 2</option>
          </select>
          {errors.group && <span className={styles.errorText}>{errors.group}</span>}

          {/* Чекбокс "Я староста" */}
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="isLeader"
              checked={formData.isLeader}
              onChange={handleInputChange}
            />
            Я староста
          </label>

          {/* Пароль */}
          <PasswordField
            label="Пароль"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={errors.password}
          />

          {/* Підтвердження пароля */}
          <PasswordField
            label="Підтвердження пароля"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={errors.confirmPassword}
          />

          {/* Чекбокс "Погоджуюсь на обробку персональних даних 卐 " */}
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            Погоджуюсь на обробку персональних даних
          </label>

          <button type="submit" className={styles.submitButton}>Зареєструватись</button>
        </form>
      </div>

      <div className={styles.infoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h2>Вже маєш акаунт?</h2>
        <p>Заходь!</p>
        <button className={styles.loginButton} onClick={openLoginModal}>Вхід</button>
      </div>
    </>
  );
};

export default RegistrationForm;
