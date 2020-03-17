// external
import React from "react";

// local
import AuthForm from "./AuthForm";

export default class AuthFormContainer extends React.Component {
  state = {
    name: "",
    password: "",
    message: ""
  };

  onChange = (key, event) => {
    const update = { [key]: event.target.value };

    this.setState(update);
  };

  onSubmit = async event => {
    event.preventDefault();

    try {
      const { name, password } = this.state;
      let message = `You ${this.props.description} as ${name}`;

      await this.props.submit(name, password);

      this.setState({ message });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { title } = this.props;

    const { name, password } = this.state;

    const user = { name, password };

    return (
      <AuthForm
        onSubmit={this.onSubmit}
        title={title}
        onChange={this.onChange}
        user={user}
        messsage={this.state.message}
      />
    );
  }
}
