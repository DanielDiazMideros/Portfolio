import { useEffect, useState } from "react";
import "./App.css";
import { Contact, Hero, Navbar, Projects } from "./components";
import emailjs from "@emailjs/browser";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`App ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <>
        <p>
          &copy; {new Date().getFullYear()} Daniel Diaz. All rights reserved.
        </p>
      </>
    </div>
  );
}

export default App;
