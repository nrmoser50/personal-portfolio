import React, { useState } from "react";

function Header() {
  // State to keep track of active section
  const [activeSection, setActiveSection] = useState("about");

  // Handler function for clicking on a navigation link
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header>
      <h1>Web Developer Portfolio</h1>
      <nav>
        <ul>
          <li
            onClick={() => handleSectionClick("about")}
            className={activeSection === "about" ? "active" : null}
          >
            About Me
          </li>
          <li
            onClick={() => handleSectionClick("portfolio")}
            className={activeSection === "portfolio" ? "active" : null}
          >
            Portfolio
          </li>
          <li
            onClick={() => handleSectionClick("contact")}
            className={activeSection === "contact" ? "active" : null}
          >
            Contact
          </li>
          <li
            onClick={() => handleSectionClick("resume")}
            className={activeSection === "resume" ? "active" : null}
          >
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;