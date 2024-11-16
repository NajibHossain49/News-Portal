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
  const [loading, setLoading] = useState(true);

  // Sign up new users
  const signUp = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in existing users
  const signIn = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out the current user
  const signOut = async () => {
    setLoading(true);
    return firebaseSignOut(auth);
  };

  // Set an authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // This updates the user state when the user logs in or out
      setLoading(false);
      console.log("The User is", currentUser);
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
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
