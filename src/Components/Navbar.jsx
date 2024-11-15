import { useContext } from "react";
import { Link } from "react-router-dom";
import UsersIcon from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {
  // Get user and signOut from AuthContext
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(); // Call signOut to log out the user
  };

  return (
    <div className="flex justify-between items-center">
      {/* Blank Div  */}
      <div className=""></div>
      <div className="nav space-x-5 py-2">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        {/* If user is logged in, show email and logout button */}
        {user ? (
          <>
            <div className="flex items-center">
              <img src={UsersIcon} alt="User Icon" className="w-8 h-8" />
              <span className="ml-2">{user.email}</span>
            </div>
            <button 
              onClick={handleLogout} 
              className="btn btn-neutral rounded-none"
            >
              Logout
            </button>
          </>
        ) : (
          // If no user is logged in, show login button
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
