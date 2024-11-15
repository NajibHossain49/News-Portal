import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navbar />
      </header>
      {/* Dynamically Add COmponents Here In Outlet */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
