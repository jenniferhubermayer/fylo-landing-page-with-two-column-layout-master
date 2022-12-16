import "./about.css";
import SigninForm from "./signinform";
import aboutImage from "../images/illustration-1.svg";

const About = () => {
  return (
    <section class="about-section">
      <article>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <SigninForm
          inputPlaceholder="Enter your email ..."
          submitValue="Get started"
        ></SigninForm>
      </article>
      <article>
        <img src={aboutImage} alt="two people sorting data into files" />
      </article>
    </section>
  );
};

export default About;
