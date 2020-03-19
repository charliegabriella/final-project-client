import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, createEvent } from "../../actions/events";
import Events from "./CreateEventForm";

class CreateEventFormContainer extends Component {
  state = { name: "", description: "", logo: "", startDate: "", endDate: "" };
  componentDidMount() {
    this.props.getEvents();
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent(this.state);

    this.setState({
      name: "",
      description: "",
      logo: "",
      startDate: "",
      endDate: ""
    });
  };
  render() {
    return (
      <Events
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        events={this.props.events}
      />
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events };
}

const mapDispatchToProps = { getEvents, createEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEventFormContainer);
