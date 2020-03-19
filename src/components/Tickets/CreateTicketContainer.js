import React, { Component } from "react";
import { connect } from "react-redux";
import { getTickets, createTicket } from "../../actions/tickets";
import CreateTicket from "./CreateTicket";

class CreateTicketContainer extends Component {
  state = { description: "", picture: "", author: "" };
  componentDidMount() {
    const { eventId } = this.props.match.params;
    console.log(eventId);
    this.props.getTickets(eventId);
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const { eventId } = this.props.match.params;
    this.props.createTicket(this.state, eventId);

    if (
      this.state.description !== "" &&
      this.state.picture !== "" &&
      this.state.author !== ""
    ) {
      this.setState({
        name: "",
        description: "",
        picture: "",
        author: ""
      });
    }
  };
  render() {
    return (
      <CreateTicket
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        tickets={this.props.tickets}
      />
    );
  }
}

function mapStateToProps(state) {
  return { tickets: state.tickets };
}

const mapDispatchToProps = { getTickets, createTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTicketContainer);
