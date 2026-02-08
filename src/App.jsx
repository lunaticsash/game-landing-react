import Navbar from "../components/Navbar";
import Play from "../components/Play";
import Vid from "../components/Vid";
import TheGame from "../components/TheGame";
import Grid from "../components/Grid";
import Media from "../components/Media";
import Faq from "../components/Faq";
import Dlc from "../components/Dlc";
import Buy from "../components/Buy";
import Footer from "../components/Footer";
import { useRef } from "react";

const App = () => {
  const buyRef = useRef(null);

  const scrollToBuy = () => {
    buyRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <Play onPlayClick={scrollToBuy} />
      <Vid />
      <TheGame />
      <Grid />
      <Media />
      <Faq />
      <Dlc />
      <div ref={buyRef}>
        <Buy />
      </div>
      <div className="bg-purple-900 size-0.5 w-full "></div>
      <Footer />
    </>
  );
};

export default App;
