import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const tickets = props => {
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
            Logo
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
          <input type="submit" value="Add" />
        </form>
        {props.tickets.map(ticket => {
          return (
            <div key={ticket.id}>
              <p>{ticket.description}</p>
              <p>Author: {ticket.author}</p>
              <button>
                <Link to={"/"}>Take Me Back To The Events</Link>
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {props.tickets.map(ticket => {
          return (
            <div key={ticket.id}>
              <p>{ticket.description}</p>
              <p>Author: {ticket.author}</p>
              <button>
                <Link to={"/"}>Take Me Back To The Events</Link>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(tickets);
