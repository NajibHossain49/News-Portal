import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/LayoutComponents/LeftNavbar";
import RightNav from "../Components/LayoutComponents/RightNav";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom"; // Import Outlet

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          {/* This is where child routes will render */}
          <Outlet />  {/* Dynamic content will appear here */}
        </section>
        <aside className="right col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
