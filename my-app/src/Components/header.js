import logo from "../images/logo.svg";
import Nav from "./nav";
import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <Nav></Nav>
    </header>
  );
};

export default Header;
