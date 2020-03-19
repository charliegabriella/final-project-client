import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SignupForm = props => {
  if (props.loggedInUser.length === 0) {
    return (
      <div>
        <h4>Sign Up To Create Events & Buy Tickets </h4>
        <form onSubmit={props.onSubmit}>
          <label>
            E-mail:
            <input
              type="text"
              name="email"
              value={props.values.email}
              onChange={props.onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={props.values.password}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>You are logged in as {props.loggedInUser.email}</h2>
        <button>Oh! Thanks</button>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(SignupForm);
