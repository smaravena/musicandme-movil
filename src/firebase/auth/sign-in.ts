import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

const auth = getAuth();

export async function iniciarSesion(email: string, password: string) {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Logica tras hacer login a un usuario...
    //@ts-ignore
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}
