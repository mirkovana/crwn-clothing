import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustoButton from "../custom-button/custom-button.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    //event koji sprecava submit prazne forme tj forme kakva je po defaultu
    event.preventDefault();
    this.serState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target; //name je Email ili Password, a value je vrednost koja je uneta u ta polja
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit"> Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
