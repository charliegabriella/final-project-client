import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { calculateRisk } from "./RiskCalculator";

const Ticket = props => {
  const allTickets = props.allTickets;
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
      //WHAT YOU SEE WHEN YOU'RE LOGGED IN
      <div>
        <h2>Create Your Ticket</h2>
        <form onSubmit={props.onSubmit}>
          <label>
            Description:
            <input
              type="text"
              name="description"
              placeholder="Ticket Description"
              value={props.values.description}
              onChange={props.onChange}
            />
          </label>
          <label>
            Logo:
            <input
              type="text"
              name="logo"
              placeholder="URL of a cool image"
              value={props.values.logo}
              onChange={props.onChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              placeholder="Your Name"
              value={props.values.author}
              onChange={props.onChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              placeholder="€€€€€€€€€€€€€€"
              value={props.values.price}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <div>
          <h2>Tickets for this event:</h2>
          <p>
            There are {props.tickets.length} tickets available for this event{" "}
          </p>
        </div>
        {props.tickets.map(ticket => {
          const ticketRisk = calculateRisk(
            allTickets,
            findTicketComments(ticket.id),
            ticket,
            tickets
          ).toFixed(1);
          return (
            <div key={ticket.id}>
              <h2>Ticket</h2>
              <i>
                We calculated that the risk of this ticket being a fraud is{" "}
                {ticketRisk}%{" "}
              </i>
              <br></br>
              <br></br>
              <h3>{ticket.description}</h3>
              <br></br>
              <b>Author: </b>
              {ticket.author}
              <b>Price:</b> {ticket.price}
              <br></br>
              <img
                src={ticket.logo}
                style={{ width: "300px", height: "300px" }}
              ></img>
              <br></br>
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
      //WHAT YOU SEE WHEN YOU'RE NOT LOGGED IN
      <div>
        <div>
          <h2>Tickets for this event:</h2>
          <p>
            There are {props.tickets.length} tickets available for this event{" "}
          </p>
        </div>
        {props.tickets.map(ticket => {
          const ticketRisk = calculateRisk(
            allTickets,
            findTicketComments(ticket.id),
            ticket,
            tickets
          ).toFixed(1);
          return (
            <div key={ticket.id}>
              <h2>Ticket</h2>
              <i>
                We calculated that the risk of this ticket being a fraud is{" "}
                {ticketRisk}%{" "}
              </i>
              <br></br>
              <br></br>
              <h3>{ticket.description}</h3>
              <b>Author: </b>
              {ticket.author}
              <br></br>
              <b>Price:</b> {ticket.price}
              <br></br>
              <img
                src={ticket.logo}
                style={{ width: "300px", height: "300px" }}
              ></img>
              <br></br>
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
