import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { calculateRisk } from "./RiskCalculator";

const Ticket = props => {
  const allTickets = []; //props.allTickets;
  const allComments = props.comments;
  const tickets = props.tickets;

  const findTicketComments = idOfTicket => {
    const ticketComments = allComments.filter(
      comment => comment.ticketId === idOfTicket
    );
    return ticketComments;
  };

  if (props.loggedInUser.length !== 0) {
    return (
      <div>
        <h2>Create Your Ticket</h2>
        <form onSubmit={props.onSubmit}>
          <label>
            Description:
            <input
              type="text"
              name="description"
              placeholder="description"
              value={props.values.description}
              onChange={props.onChange}
            />
          </label>
          <label>
            Logo:
            <input
              type="text"
              name="logo"
              value={props.values.logo}
              onChange={props.onChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={props.values.author}
              onChange={props.onChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={props.values.price}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <h4>Tickets for this event:</h4>
        <h5>Tickets available for this event: {props.tickets.length}</h5>
        {props.tickets.map(ticket => {
          const ticketRisk = calculateRisk(
            allTickets,
            findTicketComments(ticket.id),
            ticket,
            tickets
          ).toFixed(1);
          return (
            <div key={ticket.id}>
              <p>About this ticket: {ticket.description}</p>
              <p>Author: {ticket.author}</p>
              <p>Price: {ticket.price}</p>
              <p>Risk: {ticketRisk}</p>
              <button>
                <Link to={`/events/${ticket.id}/comments`}>More</Link>
              </button>
            </div>
          );
        })}
        <br></br>
        <button>
          <Link to={"/"}>Take Me Back To The Events</Link>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Tickets for this event</h4>
        <h5>Tickets available for this event: {props.tickets.length}</h5>
        {props.tickets.map(ticket => {
          const ticketRisk = calculateRisk(
            allTickets,
            findTicketComments(ticket.id),
            ticket,
            tickets
          ).toFixed(1);
          return (
            <div key={ticket.id}>
              <p>About this ticket: {ticket.description}</p>
              <p>Author: {ticket.author} </p>
              <p>Price: {ticket.price}</p>
              <p>Risk: {ticketRisk}</p>
              <button>
                <Link to={`/events/${ticket.id}/comments`}>More</Link>
              </button>
            </div>
          );
        })}
        <br></br>
        <button>
          <Link to={"/"}>Take Me Back To The Events</Link>
        </button>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(Ticket);
