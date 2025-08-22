import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginModal from './LoginModal';
import styles from '../styles/components/Registration.module.css';

const Registration = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <RegistrationForm openLoginModal={() => setIsLoginModalOpen(true)} />
      {isLoginModalOpen && (
        <LoginModal closeModal={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
};

export default Registration;
