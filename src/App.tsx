import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Organisasi from "./components/Organisasi";
import Teaser from "./components/Teaser";
import Timeline from "./components/Timeline";
import "./index.css";

const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Hero />
        <Teaser />
        <Organisasi />
        <Timeline />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
