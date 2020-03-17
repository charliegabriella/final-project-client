import React from "react";
import superagent from "superagent";

import AuthFormContainer from "./AuthFormContainer";

export default class SignupForm extends React.Component {
  submit = async (name, password) => {
    try {
      const entity = { name, password };

      await superagent.post(`http://localhost:4000/user`).send(entity);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <AuthFormContainer
        submit={this.submit}
        description="signed up"
        title="Sign up"
      />
    );
  }
}
