// external dependencies
import React, { Component } from "react";
// import { Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

class App extends Component {
  render() {
    return (
      <main>
        {" "}
        <SignupForm />
        <LoginForm />
      </main>
    );
  }
}

export default App;
