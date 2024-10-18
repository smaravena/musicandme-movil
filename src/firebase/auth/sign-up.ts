import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

const auth = getAuth();

export async function registrarUsuario(email: string, password: string) {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Logica tras registrar a un usuario...
    const user = userCredential.user;
  //@ts-ignore
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}
