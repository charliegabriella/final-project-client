import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import SignupFormContainer from "./components/Signup/SignupFormContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import Tickets from "./components/Tickets/CreateTicketContainer";
import CreateCommentFormContainer from "./components/Comments/CreateCommentFormContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/events/:eventId/tickets" component={Tickets} />
      <Route
        path="/comments/eventId/ticketId"
        component={CreateCommentFormContainer}
      />
    </div>
  );
}

export default App;
