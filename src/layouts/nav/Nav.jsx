import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import "./Nav.css";
import { Link } from "react-router-dom";
import Crimson from "../../assets/images/oaks-web.png";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    const handleScroll = () => {
      const topNavHeight = document.querySelector(".top_nav").offsetHeight;
      setIsFixed(window.scrollY > topNavHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null, // viewport
      threshold: 0.6, // Adjust based on when you want the link to activate
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section ID
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav_container'>
      <div className='nav'>
        <div className='top_nav'>
          <section>
            <div className='logo'>
              <img src={Crimson} alt='' />
            </div>
            <div className='contact'>
              <a className='phone item' href='tel:+2347033967980'>
                <FaPhone className='icona' />
                <span>+234 703 396 7980</span>
              </a>
              <a className='address item'>
                <FaMap className='icona' />
                <span>18, Adeshina Street, Ijeshatedo</span>
                <span>Surulere, Lagos.</span>
              </a>
              <a className='time item' href='mailto:crimsonoaksng@gmail.com'>
                <FaEnvelope className='icona' />
                <span>crimsonoaksng@gmail.com</span>
              </a>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
        </div>
        <div className={`bottom_nav ${isFixed ? "fixed" : ""} ${isMenuOpen ? "active" : ""}`}>
          <section>
            <ul>
              <li className={activeSection === "" ? "active" : ""}>
                <a href='#'>Home</a>
              </li>
              <li className={activeSection === "about" ? "active" : ""}>
                <a href='#about'>About</a>
              </li>
              <li className={activeSection === "features" ? "active" : ""}>
                <a href='#features'>Facilities</a>
              </li>
              <li className={activeSection === "faq" ? "active" : ""}>
                <a href='#faq'>FAQ</a>
              </li>
              <li className={activeSection === "pricing" ? "active" : ""}>
                <a href='#pricing'>Pricing</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Nav;
