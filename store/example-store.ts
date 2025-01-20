// import { createStore } from 'vuex';
// import { db } from '../firebase/firebase';
// import { addDoc, collection, getDocs, DocumentData } from 'firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// interface User {
//   email: string;
//   password: string;
//   ad: string;
//   soyad: string;
//   isPwd?: boolean;
// }

// export const store = createStore({
//   state: () => ({
//     user: {} as User,
//   }),
//   mutations: {
//     setUser(state, user: User) {
//       state.user = user;
//     },
//   },
//   actions: {
//     async signup({ commit }, payload: User) {
//       try {
//         const auth = getAuth();
//         await createUserWithEmailAndPassword(auth, payload.email, payload.password);

//         const user = {
//           ad: payload.ad,
//           soyad: payload.soyad,
//           email: payload.email,
//         };

//         await addDoc(collection(db, 'users'), user);

//         commit('setUser', payload);

//         console.log('User registered and data added to Firestore:', user);
//       } catch (error) {
//         console.error('Firebase Authentication or Firestore Error:', error);
//       }
//     },
//     async getData() {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'users'));
//         const data = querySnapshot.docs.map((doc) => doc.data());
//         console.log('Data retrieved successfully: ', data);
//         return data;
//       } catch (error) {
//         console.error('Error getting documents: ', error);
//         return [];
//       }
//     },
//   },
//   getters: {
//     getUser(state) {
//       return state.user;
//     },
//   },
// });
