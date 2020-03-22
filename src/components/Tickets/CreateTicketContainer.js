import React, { Component } from "react";
import { connect } from "react-redux";
import { getTickets, createTicket, ticketsList } from "../../actions/tickets";
import { commentsList } from "../../actions/comments";
import CreateTicket from "./CreateTicket";

class CreateTicketContainer extends Component {
  state = { description: "", logo: "", author: "" };
  componentDidMount() {
    const { eventId } = this.props.match.params;

    this.props.getTickets(eventId);
    this.props.ticketsList();
    this.props.commentsList();
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
        events={this.props.events}
        comments={this.props.allComments}
        allTickets={this.props.allTickets}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE", state);
  return {
    tickets: state.tickets,
    events: state.events,
    allComments: state.allComments,
    allTickets: state.allTickets
  };
}

const mapDispatchToProps = {
  getTickets,
  createTicket,
  ticketsList,
  commentsList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTicketContainer);
