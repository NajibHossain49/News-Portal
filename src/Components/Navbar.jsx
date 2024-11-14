import { Link } from "react-router-dom";
import UsersIcon from "../assets/user.png";

const Navbar = () => {
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
        <div className="">
          <img src={UsersIcon} alt="UsersIcon" />
        </div>
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
