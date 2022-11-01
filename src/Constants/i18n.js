import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUSMessages from "../translations/en-US.json";

const LOCALES = {
    enUS: "en",
};

const MESSAGES_BY_LOCALE = {
    [LOCALES.enUS]: enUSMessages,
};

i18n.use(initReactI18next).init({
    resources: MESSAGES_BY_LOCALE,
    lng: LOCALES.enUS,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
