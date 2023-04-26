import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Organisasi from "./components/Organisasi";
import Teaser from "./components/Teaser";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Teaser />
      <Organisasi />
      <Timeline />
      <Footer />
    </>
  );
};

export default App;
