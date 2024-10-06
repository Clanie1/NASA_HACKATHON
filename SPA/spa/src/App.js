import Navbar from "./components/common/Navbar";
import LandingPage from "./components/LandingPage";
import ChatbotPage from "./components/ChatbotPage"; // Importa el componente del chatbot

import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // Scroll function (mantener como está)
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
    <Router>
      <div className="App w-full relative font-hnLight">
        <Navbar scrollToSection={scrollToSection} />

        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                info={section1Ref}
                subscribe={section2Ref}
                home={section3Ref}
                scrollToSection={scrollToSection}
              />
            }
          />
          {/* Ruta dinámica para el chatbot */}
          <Route path="/chatbot/:id" element={<ChatbotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
