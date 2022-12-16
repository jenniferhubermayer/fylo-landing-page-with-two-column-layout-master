import logo from "../images/logo.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" class="white-logo" />
      <section class="footer-links">
        <article>
          <ul>
            <li>
              <img src={phone} alt="phone icon" />
              <a href="tel:+1-543-123-4567">Phone: +1-543-123-4567</a>
            </li>
            <li>
              <img src={email} alt="email icon" />
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
              <a href="http://">About Us</a>
            </li>
            <li>
              <a href="http://">Jobs</a>
            </li>
            <li>
              <a href="http://">Press</a>
            </li>
            <li>
              <a href="http://">Blog</a>
            </li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
              <a href="http://">Contact Us</a>
            </li>
            <li>
              <a href="http://">Terms</a>
            </li>
            <li>
              <a href="http://">Privacy</a>
            </li>
          </ul>
        </article>
        <article className="social-buttons">
          <a href="http://">
            <img src={facebook} alt="facebook icon" class="white-logo" />
          </a>
          <a href="http://">
            <img src={twitter} alt="twitter icon" class="white-logo" />
          </a>
          <a href="http://">
            <img src={instagram} alt="instagram icon" class="white-logo" />
          </a>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
