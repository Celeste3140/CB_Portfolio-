import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
/* import DotGroup from "./scenes/DotGroup"; */
import LineGradient from "./components/LineGradient";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Resume from "./scenes/Resume";
import Portfolio from "./scenes/Skills";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  /* const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
 */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="app bg-lbeige">
    <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage} />
    <div className="w-5/6 mx-auto md:h-full">
      {/* {isAboveMediumScreens && (
         <DotGroup
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
       />
     )} */}
     
      <Landing setSelectedPage={setSelectedPage} />
    </div>
    <div className="w-5/6 mx-auto ">
      <MySkills />
    </div>
    <div className="w-5/6 mx-auto">
      <Portfolio />
    </div>
    <div className="w-5/6 mx-auto">
      <Resume />
    </div>
    <Footer />
  </div>
}

export default App;
