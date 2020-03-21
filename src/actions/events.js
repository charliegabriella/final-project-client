import request from "superagent";

export const ALL_EVENTS = "ALL_EVENTS";
export const NEW_EVENT = "NEW_EVENT";

const baseUrl = "http://localhost:4000";

function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload
  };
}

//GET ALL EVENTS
export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;
  if (!events.length) {
    request(`${baseUrl}/events`)
      .then(response => {
        const action = allEvents(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

//CREATE NEW EVENT
export const createEvent = data => (dispatch, getState) => {
  const state = getState();
  console.log("Is the state here?", state.loggedInUser.jwt);
  request
    .post(`${baseUrl}/event`)
    .set("Authorization", `Bearer ${state.loggedInUser.jwt}`)
    .send(data)
    .then(response => {
      const event = response.body;
      const action = newEvent(event);
      dispatch(action);
    })
    .catch(console.error);
};
