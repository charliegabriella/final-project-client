import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CreateEventFormContainer from "../Events/CreateEventFormContainer";
import SignupFormContainer from "../Signup/SignupFormContainer";
import LoginFormContainer from "../Login/LoginFormContainer";

const Homepage = props => {
  if (props.loggedInUser.length === 0) {
    return (
      <div>
        <h1>"Tickets-To-Event-In-Times-Of-A-Pandamic"</h1>

        <SignupFormContainer />
        <p>
          <p>
            <h3>Already our friend? Cool!</h3>
          </p>
          <LoginFormContainer />
        </p>
        <h2>EVENTS</h2>
        <CreateEventFormContainer />
      </div>
    );
  } else {
    return (
      <div>
        <h1>"Tickets-To-Event-In-Times-Of-A-Pandamic"</h1>
        <h2>Events</h2>
        <CreateEventFormContainer />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}
export default connect(mapStateToProps)(Homepage);
