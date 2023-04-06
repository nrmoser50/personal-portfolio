import React from "react";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />  
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <footer>
        <a href="github-link">GitHub</a>
        <a href="linkedin-link">LinkedIn</a>
        <a href="third-link">Third Platform</a>
      </footer>
    </div>
  );
}

export default App;
