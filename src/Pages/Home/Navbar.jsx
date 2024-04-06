import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  const handleNavLinkClick = (sectionId) => {
    closeMenu();
    navigate("/");
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100);
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/JRS_White_Graphic_Logo.png" alt="JacobRyanSchmidt" style={{ maxWidth: "80px", cursor: "pointer" }} onClick={handleLogoClick} />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <ScrollLink
              onClick={() => handleNavLinkClick("heroSection")}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => handleNavLinkClick("mySkills")}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => handleNavLinkClick("AboutMe")}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => handleNavLinkClick("MyPortfolio")}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Projects
            </ScrollLink>
          </li>
        </ul>
      </div>
      <ScrollLink
        onClick={() => handleNavLinkClick("Contact")}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </ScrollLink>
    </nav>
  );
}

export default Navbar;
