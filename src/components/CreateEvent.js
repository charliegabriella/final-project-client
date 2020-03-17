import React, { Component } from "react";

export default class CreateEvent extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>Wanna submit your own cool picture? Go ahead!</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.props.values.title}
          onChange={this.props.onChange}
        />
        <input
          type="text"
          name="url"
          placeholder="url"
          value={this.props.values.url}
          onChange={this.props.onChange}
        />
        <button onSubmit={this.props.onSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
