import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB4CsGTcLzAv-Utg5c58wkhP77kWobgLA8",
  authDomain: "crwn-clothing-db-d7b66.firebaseapp.com",
  projectId: "crwn-clothing-db-d7b66",
  storageBucket: "crwn-clothing-db-d7b66.firebasestorage.app",
  messagingSenderId: "312588592814",
  appId: "1:312588592814:web:df27c3e62ec9470f6aaf3f",
  measurementId: "G-ZRN2X9NGGJ"
};

const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapShot = await getDoc(userDocRef);

	if(!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			})
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}
	return userDocRef;
}