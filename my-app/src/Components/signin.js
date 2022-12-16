import "./signin.css";
import SigninForm from "./signinform";

const Signin = () => {
  return (
    <section class="sign-in-section">
      <article>
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </article>
      <article>
        <SigninForm
          inputPlaceholder="email@example.com"
          submitValue="Get started for free"
        ></SigninForm>
      </article>
    </section>
  );
};

export default Signin;
