import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
