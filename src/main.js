import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import './Firebase'
import VueI18n from 'vue-i18n'
// import axios from 'axios'


Vue.config.productionTip = false

Vue.use(VueI18n)
// Vue.use(axios)
import VueNativeSock from 'vue-native-websocket';

Vue.use(VueNativeSock, 'wss://api.bitkub.com/websocket-api/market.trade.thb_btc,market.ticker.thb_btc,market.trade.thb_eth,market.ticker.thb_eth', {
  format: 'json',
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});


const i18n = new VueI18n({
  locale: 'en', // กำหนดภาษาเริ่มต้น
  messages: {
    en: {
      language: 'Language',
      thai: 'Thai',
      english: 'English',
      "logo": "Logo",
      "Login": "Login",
      "User": "User",
      "Password": "Password",
      "SignIn": "SignIn",
      "Sign Up": "Sign Up",
    },
    th: {
      language: 'ภาษา',
      thai: 'ไทย',
      english: 'อังกฤษ',
      "logo": "โลโก้",
      "Login": "ล็อคอิน",
      "User": "ชื่อผู้ใช้",
      "Password": "รหัสผ่าน",
      "SignIn": "เข้าสู่ระบบ",
      "Sign Up": "สมัครชื่อผู้ใช้",
    },
  },
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
