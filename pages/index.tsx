import type { NextPage } from "next";
import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const Home: NextPage = () => {
  return (
    <main
      className="p-4"
      style={{
        backgroundImage: "url(/images/bg.png)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <Header />
      </div>
      <div className="mt-5">
        <Content />
      </div>
      <div className="sticky bottom-0 mt-5">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
