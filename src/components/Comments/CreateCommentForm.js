import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CreateComment = props => {
  if (props.loggedInUser.length !== 0) {
    return (
      <div>
        <h1>Leave A Comment</h1>
        <form onSubmit={props.onSubmit}>
          <label>
            Comment:
            <input
              type="text"
              name="comment"
              values={props.values.comment}
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
        <h2>Current Comments</h2>
        {props.comments.map(comment => {
          return (
            <div key={comment.id}>
              <br></br>
              <p>Author: {comment.author}</p>
              <p>Message: {comment.comment}</p>
              <br></br>
            </div>
          );
        })}
        <button>
          <Link to={"/"}>Take Me Back To The Events</Link>{" "}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Current Comments</h2>
        {props.comments.map(comment => {
          return (
            <div key={comment.id}>
              <br></br>
              <p>Author: {comment.author}</p>
              <p>Message: {comment.comment}</p>
              <br></br>
            </div>
          );
        })}
        <button>
          <Link to={"/"}>Take Me Back To The Events</Link>{" "}
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

export default connect(mapStateToProps)(CreateComment);
