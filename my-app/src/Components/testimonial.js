import quotesImage from "../images/icon-quotes.svg";
import "./testimonial.css";

const Testimonial = (props) => {
  return (
    <div class="testimonial">
      <img src={quotesImage} alt="quotes icon" />
      <p>{props.testimonialText}</p>
      <div testimonial-origin>
        <img src={props.testimonoalImage} alt={props.testimonialAlt} />
        <div class="wrapper">
          <h3>{props.testimonialAuthor}</h3>
          <p>{props.testimonialPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
