import Aos from "aos";
import React from "react";
import "./App.css";
import { About } from "./Components/About/About";
import { Footer } from "./Components/Footer/Footer";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import GitHub from "./Components/GitHub/GitHub";
import { Header } from "./Components/Header/Header";
import { Projects } from "./Components/Projects/Projects";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { ThemeContext } from "./Context/theme";
// import Statistic from "./Components/Statistic/Statistic";
import { Gitstat } from "./Components/Gitstat/Gitstat";

function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="about">
        <Header />
      </section>
      <main>
        <br />
        <br />
        <br />
        <br />
        <About />
        <section id="projects">
          <Projects />
        </section>
        <br />
        <section>
          <GitHub />
        </section>
        <section>
          {/* <Statistic /> */}
          <Gitstat />
        </section>
        <section id="contact">
          <GetInTouch />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
