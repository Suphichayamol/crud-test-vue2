import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./locales/en.json";
import th from "./locales/th.json";

Vue.use(VueI18n);

const messages = {
  en,
  th
};

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages
});

export default i18n;
