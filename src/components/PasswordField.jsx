import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import styles from '../styles/components/PasswordField.module.css';

const PasswordField = ({ label, name, value, onChange, onBlur, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <label>{label}</label>
      <div className={styles.passwordContainer}>
        <input
          type={passwordVisible ? 'text' : 'password'}
          name={name}
          placeholder="user2000"
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span
          className={styles.eyeIcon}
          onClick={() => setPasswordVisible(!passwordVisible)}
          title={passwordVisible ? 'Приховати пароль' : 'Показати пароль'}
        >
          {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </>
  );
};

export default PasswordField;
