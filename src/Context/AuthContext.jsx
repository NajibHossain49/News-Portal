import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,  
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../FireBase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // State to track the user login state
  const [user, setUser] = useState(null);

  // Sign up new users
  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in existing users
  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out the current user 
  const signOut = async () => firebaseSignOut(auth);

  // Set an authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // This updates the user state when the user logs in or out
    });

    // Cleanup the observer when the component is unmounted
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
