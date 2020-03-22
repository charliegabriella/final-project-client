import request from "superagent";

export const ALL_COMMENTS = "ALL_COMMENTS";
export const NEW_COMMENT = "NEW_COMMENT";
export const FULL_COMMENTS = "FULL_COMMENTS";

const baseUrl = "http://localhost:4000";

function allComments(payload) {
  return {
    type: ALL_COMMENTS,
    payload
  };
}

function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  };
}

function fullComments(payload) {
  return {
    type: FULL_COMMENTS,
    payload
  };
}

export const getComments = ticketId => (dispatch, getState) => {
  request(`${baseUrl}/events/${ticketId}/comments`)
    .then(response => {
      const action = allComments(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

export const commentsList = () => (dispatch, getState) => {
  request(`${baseUrl}/allComments`)
    .then(response => {
      const action = fullComments(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

export const createComment = (data, ticketId) => (dispatch, getState) => {
  const state = getState();
  console.log("Is the state here?", state.loggedInUser.jwt);
  request
    .post(`${baseUrl}/events/${ticketId}/comments`)
    .set("Authorization", `Bearer ${state.loggedInUser.jwt}`)
    .send(data, ticketId)
    .then(response => {
      const comment = response.body;
      const action = newComment(comment);
      dispatch(action);
    })
    .catch(console.error);
};
