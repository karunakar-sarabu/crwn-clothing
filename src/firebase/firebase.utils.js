import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import userReducer from '../redux/user/user.reducer';
import userReducer from '../redux/user/user.reducer'

const config={
        apiKey: "AIzaSyBhNKJ6FPFiEd-IRZK5wNGfKJHvZ4gZsvQ",
        authDomain: "crwn-db-80797.firebaseapp.com",
        projectId: "crwn-db-80797",
        storageBucket: "crwn-db-80797.appspot.com",
        messagingSenderId: "992453917300",
        appId: "1:992453917300:web:c1f54318a8094631836f21"
      };
      export const createUserProfileDocument=async(userAuth,additionalData)=>{
        if(!userAuth) return;

        const userRef=firestore.doc(`users/${userAuth.uid}`)

        const snapShot=await userReducer;
        if(!snapShot.exists){
          const {displayName,email}=userAuth;
          const createdAt=new Date();
        
        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch(error){
          console.log('error creating user',error.message)

        }
        return userRef;
        //console.log(snapshot);
      }
      }
      firebase.initializeApp(config)

      export const auth=firebase.auth()
      export const firestore=firebase.firestore()
      const provider=new firebase.auth.GoogleAuthProvider()

      provider.setCustomParameters({prompt:'select_account'})

      export  const signInWithGoogle=()=>auth.signInWithPopup(provider)

      export default firebase;
      
