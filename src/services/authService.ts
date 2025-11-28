import auth from '@react-native-firebase/auth';

// Versión con Firebase (para cuando tengas Firebase configurado)
export const signInWithGoogle = async () => {
  try {
    // TODO: Implementar Google Sign-In cuando tengas la configuración
    // Por ahora usamos email/password como fallback
    const userCredential = await auth().signInAnonymously();
    
    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
      photoURL: userCredential.user.photoURL,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = () => {
  const user = auth().currentUser;
  return user ? {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  } : null;
};