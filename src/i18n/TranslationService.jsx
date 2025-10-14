import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./langs/es.json";
import en from "./langs/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: "es",          // idioma por defecto
    fallbackLng: "en",  // si falta traducción en español, usa inglés
    interpolation: { escapeValue: false }
  });

export default i18n;