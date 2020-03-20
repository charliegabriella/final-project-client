import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CreateComment = props => {
  if (props.loggedInUser.length !== 0) {
    return (
      <div>
        <h1>Leave A Comment: </h1>
        <form onSubmit={props.onSubmit}>
          <label>
            Comment:
            <input
              type="text"
              name="text"
              placeholder="Write something"
              values={props.values.text}
              onChange={props.onChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              placeholder="Name"
              value={props.values.author}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        {props.comments.map(comment => {
          // return <div key={comment.id}>{comment.message}</div>;
          return <div key={comment.id} />;
        })}
        <button>
          <Link to={"/"}>Take Me Back To The Events</Link>{" "}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        {props.comments.map(comment => {
          return <div key={comment.id}>{comment.message}</div>;
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
    loggedInUser: state.loggedInUser,
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CreateComment);
