import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments, createComment } from "../../actions/comments";
import CreateComment from "./CreateCommentForm";

class CreateCommentFormContainer extends Component {
  state = { comment: "", author: "" };
  componentDidMount() {
    const { ticketId } = this.props.match.params;
    this.props.getComments(ticketId);
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const { ticketId } = this.props.match.params;
    this.props.createComment(this.state, ticketId);

    this.setState({
      comment: "",
      author: ""
    });
  };

  render() {
    return (
      <CreateComment
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        comments={this.props.comments}
      />
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

const mapDispatchToProps = { getComments, createComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCommentFormContainer);
