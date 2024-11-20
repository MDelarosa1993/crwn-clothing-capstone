import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	if(!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapShot = await getDoc(userDocRef);

	if(!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation
			})
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}
	return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;

	try {
		const auth = getAuth();
		const response = await signInWithEmailAndPassword(auth, email, password);
		console.log("Response:", response);
		return response;
  	} catch (error) {
			console.error("Error during sign-in:", error);
			throw error;
  }
}