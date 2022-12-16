import "./signinform.css";

const SigninForm = (props) => {
  return (
    <form action="" className={props.formClassName}>
      <input
        type="email"
        name={props.inputName}
        id={props.inputID}
        placeholder={props.inputPlaceholder}
        className="email"
      />
      <input type="submit" value={props.submitValue} className="submit" />
    </form>
  );
};

export default SigninForm;
