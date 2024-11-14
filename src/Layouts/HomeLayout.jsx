import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

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
          <h2>Aside Left</h2>
        </aside>
        <section className="col-span-6">
          <h2>Center Section</h2>
        </section>
        <aside className="right col-span-3">
          <h2>Aside Right</h2>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
