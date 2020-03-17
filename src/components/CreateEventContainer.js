import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions";
import CreateEvent from "./CreateEvent";

class CreateEventContainer extends React.Component {
  state = {
    title: "",
    url: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createEvent(this.state);

    this.setState({
      title: "",
      url: ""
    });
  };

  render() {
    return (
      <CreateEvent
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createEvent })(CreateEventContainer);
