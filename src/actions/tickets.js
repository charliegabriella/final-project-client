import request from "superagent";

export const ALL_TICKETS = "ALL_TICKETS";
export const NEW_TICKET = "NEW_TICKET";

const baseUrl = "http://localhost:4000";

function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

function newTicket(payload) {
  return {
    type: NEW_TICKET,
    payload
  };
}

//GET TICKETS
export const getTickets = eventId => (dispatch, getState) => {
  const state = getState();
  const { tickets } = state;

  if (!tickets.length) {
    request(`${baseUrl}/events/${eventId}/tickets`)
      .then(response => {
        const action = allTickets(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

//CREATE NIEUW TICKET
export const createTicket = (data, eventId) => (dispatch, getState) => {
  const state = getState();
  request
    .post(`${baseUrl}/events/${eventId}/ticket`)
    .set("Authorization", `Bearer ${state.loggedInUser.jwt}`)
    .send(data, eventId)
    .then(response => {
      const ticket = response.body;
      const action = newTicket(ticket);
      dispatch(action);
    })
    .catch(console.error);
};
