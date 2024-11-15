import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Nadia",
  });

  const authInfo = {
    user,
    setUser,
  };

  return (
    <AuthProvider.provider value={authInfo}>{children}</AuthProvider.provider>
  );
};

export default AuthProvider;
