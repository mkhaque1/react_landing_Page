import About from "./Components/About";
import Cards from "./Components/Cards";
import Eyes from "./Components/Eyes";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
