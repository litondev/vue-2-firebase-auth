import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from 'firebase';

const configOtpions = {
 apiKey: "AIzaSyB2a0uIWEqw4MaGnwFjoA8B-TtyE9FOA_I",
 authDomain: "vue-firebase-auth-ca2a7.firebaseapp.com",
 databaseURL: "https://vue-firebase-auth-ca2a7.firebaseio.com",
 projectId: "vue-firebase-auth-ca2a7",
 storageBucket: "vue-firebase-auth-ca2a7.appspot.com",
 messagingSenderId: "466380189799",
 appId: "1:466380189799:web:25bc34182990522ff7e4c2",
 measurementId: "G-CWW2446DHJ"
}

firebase.initializeApp(configOtpions);
firebase.auth().onAuthStateChanged(user => {
 store.dispatch("fetchUser",user)
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
