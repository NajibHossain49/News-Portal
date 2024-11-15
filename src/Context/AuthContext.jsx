import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../FireBase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // This State track the user logs in or out
  const [user, setUser] = useState(null);

  // Sign up new users
  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
