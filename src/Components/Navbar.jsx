import { useContext } from "react";
import { Link } from "react-router-dom";
import UsersIcon from "../assets/user.png"; // Default user icon
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
        {/* If user is logged in, show displayName, photoURL and logout button */}
        {user ? (
          <>
            <div className="flex items-center">
              {/* Show user's photo or default image if no photo is available */}
              <img
                src={user?.photoURL || UsersIcon} // Fallback to default icon if no photoURL or if user is not logged in
                alt="User Icon"
                className="w-10 h-10 rounded-full" 
              />

              {/* Display the user's displayName or email if no displayName is set */}
              <span className="ml-2">{user.displayName || user.email}</span>
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
