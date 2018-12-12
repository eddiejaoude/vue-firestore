import Vue from 'vue'

import VueFirestore from './../dist/vue-firestore'

import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB9Trlbrpo48ilkNHZ6MGbofFf2u8uHuRA",
    authDomain: "oss-test-myfirebase.firebaseapp.com",
    databaseURL: "https://oss-test-myfirebase.firebaseio.com",
    projectId: "oss-test-myfirebase",
    storageBucket: "oss-test-myfirebase.appspot.com",
    messagingSenderId: "10529373536"
}

Vue.use(VueFirestore)

import 'firebase/firestore'

var firebase = Firebase.initializeApp(config)
var firestore = firebase.firestore()

firestore.settings({timestampsInSnapshots: true})

export function VueTick() {
  return new Promise((resolve, reject) => {
    Vue.nextTick(resolve)
  })
}

export { Vue }

export { firebase }

export { firestore }
