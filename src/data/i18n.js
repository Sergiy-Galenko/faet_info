import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        teachers: "Teachers",
        register: "Register",
        lessons: "Lessons",
      },
    },
    uk: {
      translation: {
        home: "Головна",
        teachers: "Навчання",
        register: "Реєстрація",
        lessons: "Уроки",
      },
    },
  },
  lng: "uk", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
