import Navbar from "./components/common/Navbar";
import LandingPage from "./components/LandingPage";

import { useRef } from "react";


function App() {
  //Scroll function
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (section) => {
    let topPosition = 0;

    if (section === "home") {
      topPosition =
        section3Ref.current.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "subs") {
      topPosition =
        section2Ref.current.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "services") {
      topPosition =
        section1Ref.current.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "contact") {
      topPosition =
        section2Ref.current.getBoundingClientRect().top + window.scrollY - 100;
    }

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          finally
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component />
      </header>

    <div className="App w-full relative font-hnLight">
      <Navbar scrollToSection={scrollToSection} />
      <LandingPage
        info={section1Ref}
        subscribe={section2Ref}
        home={section3Ref}
        scrollToSection={scrollToSection}
      />

    </div>
  );
}

export default App;
