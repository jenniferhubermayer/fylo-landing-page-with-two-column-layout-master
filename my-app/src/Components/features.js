import "./features.css";
import featuresImage from "../images/illustration-2.svg";
import testimonoalImage from "../images/avatar-testimonial.jpg";
import arrowImage from "../images/icon-arrow.svg";
import Testimonial from "./testimonial";
import curveImage from "../images/bg-curve-desktop.svg";

const Features = () => {
  return (
    <>
      {" "}
      <img
        src={curveImage}
        alt="curve for seperate sections"
        className="curve-image"
      />
      <section class="features-section">
        <article>
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <div>
            <a href="http://" class="features-link">
              See how Fylo works <img src={arrowImage} alt="arrow icon" />
            </a>
          </div>
          <Testimonial
            testimonoalImage={testimonoalImage}
            testimonialAlt="Kyle Burton"
            testimonialText="Fylo has improved our team productivity by an order of magnitude. Since 
  making the switch our team has become a well-oiled collaboration machine."
            testimonialAuthor="Kyle Burton"
            testimonialPosition="Founder & CEO, Huddle"
          ></Testimonial>
        </article>
        <article>
          <img src={featuresImage} alt="team working with fylo" />
        </article>
      </section>
    </>
  );
};

export default Features;
