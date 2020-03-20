import React, { Component } from "react";
import { connect } from "react-redux";
import { getTickets, createTicket } from "../../actions/tickets";
import CreateTicket from "./CreateTicket";

class CreateTicketContainer extends Component {
  state = { description: "", logo: "", author: "" };
  componentDidMount() {
    const { eventId } = this.props.match.params;

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
    this.setState({
      name: "",
      description: "",
      logo: "",
      author: ""
    });
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
