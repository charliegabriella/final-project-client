import superagent from "superagent";

export const ALL_EVENTS = "ALL_EVENTS";
export const NEW_EVENT = "NEW_EVENT";
export const CHANGE_EVENT = "CHANGE_EVENT";
export const LOGGED_IN = "LOGGED_IN";

function allEvents(events) {
  return {
    type: ALL_EVENTS,
    payload: events
  };
}

function newEvent(event) {
  return {
    type: NEW_EVENT,
    payload: event
  };
}

function changeEvent(newEvent) {
  return {
    type: CHANGE_EVENT,
    payload: newEvent
  };
}

function loggedIn(jwt) {
  return {
    type: LOGGED_IN,
    payload: jwt
  };
}

export function getAllEvents() {
  return async function(dispatch, getState) {
    try {
      const state = getState();

      const { events } = state;

      const condition = events.length;

      if (condition) {
        return null;
      }

      const response = await superagent.get("http://localhost:4000/event");

      const action = allEvents(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

export function createNewEvent(name, location) {
  console.log("createNewEvent test");
  return async function(dispatch) {
    try {
      const body = { name, location };

      const response = await superagent
        .post("http://localhost:4000/event")
        .send(body);

      const action = newEvent(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

export function updateEvent(id, update) {
  return async function(dispatch) {
    try {
      const response = await superagent
        .put(`http://localhost:4000/event/${id}`)
        .send(update);

      const action = changeEvent(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

export function login(email, password) {
  return async function(dispatch) {
    try {
      const body = { email, password };

      const response = await superagent
        .post("http://localhost:4000/login")
        .send(body);

      console.log("response.body", response);

      const action = loggedIn(response.text);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}
