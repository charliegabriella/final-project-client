import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CreateEvent = props => {
  if (props.loggedInUser.length !== 0) {
    return (
      <div>
        <h1>Add an Event</h1>
        <form onSubmit={props.onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              value={props.values.name}
              onChange={props.onChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              placeholder="Description of Event"
              value={props.values.description}
              onChange={props.onChange}
            />
          </label>
          <label>
            Event Logo:
            <input
              type="text"
              name="logo"
              placeholder="URL of Event Logo"
              value={props.values.logo}
              onChange={props.onChange}
            />
          </label>
          <label>
            Starts on:
            <input
              type="datetime-local"
              name="startDate"
              value={props.values.startDate}
              onChange={props.onChange}
            />
          </label>
          <label>
            Ends on:
            <input
              type="datetime-local"
              name="endDate"
              value={props.values.endDate}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        {props.events.map(event => {
          return (
            //THIS IS WHAT'S SHOWN WHN YOU'RE LOGGED IN
            <div key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>Starts: {event.startDate}</p>
              <p>Ends: {event.endDate}</p>
              <img
                src={event.logo}
                style={{ width: "300px", height: "300px" }}
              ></img>
              <br></br>
              <button>
                <Link to={`/events/${event.id}/tickets`}>
                  Tickets For This Event
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      //THIS IS WHAT'S SHOWN WHEN YOU'RE NOT LOGGED IN
      <div>
        {props.events.map(event => {
          return (
            <div key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>Starts: {event.startDate}</p>
              <p>Ends:: {event.endDate}</p>
              <img
                src={event.logo}
                style={{ width: "300px", height: "300px" }}
              ></img>
              <br></br>
              <button>
                <Link to={`/events/${event.id}/tickets`}>
                  Tickets for this event
                </Link>
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

export default connect(mapStateToProps)(CreateEvent);
