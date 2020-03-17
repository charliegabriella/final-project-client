import React, { Component } from "react";
import { getEvents } from "../actions";
import { connect } from "react-redux";
import EventList from "./EventList";
import CreateEventContainer from "./CreateEventContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";

class EventListContainer extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    if (this.props.user) {
      return (
        <div>
          <EventList events={this.props.events} user={this.props.user} />
          <CreateEventContainer />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Hello friend</h2>
          <LoginFormContainer />
          <h2>Hello friend? That's lame. Maybe I should give you a name.</h2>
          <SignUpFormContainer />
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return { events: state.images, user: state.user };
}
const mapDispatchToProps = { getEvents };
export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
