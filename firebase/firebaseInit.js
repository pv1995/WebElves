import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const api = firebase.firestore()
api.settings({
  timestampsInSnapshots: true
})

// const firebaseApp = firebase.initializeApp(firebaseConfig)

// const api = firebaseApp.firestore()
// api.settings({
//   timestampsInSnapshots: true
// })

export default api
