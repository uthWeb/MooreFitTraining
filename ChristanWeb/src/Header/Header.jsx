import "./Header.css";
import logo from "../assets/Logo/MooreFitLogo.jpg";

function Header() {
  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("AboutSection");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to Footer section
  const scrollToFooter = () => {
    const footerSection = document.getElementById("footerSection");
    footerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li onClick={scrollToAbout}>About</li>
        <li onClick={scrollToFooter}>Contact</li> {/* Scroll to Footer */}
      </ul>
    </div>
  );
}

export default Header;
