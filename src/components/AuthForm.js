import React from "react";

export default class AuthForm extends React.Component {
  render() {
    const { title: label, onSubmit, onChange, user, message } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <h4>{label}</h4>

        <h5>Name</h5>
        <input
          onChange={event => {
            console.log("event.target test:", event.target);
            onChange("name", event);
          }}
          type="text"
          value={user.name}
        />

        <h5>Password</h5>
        <input
          onChange={event => onChange("password", event)}
          type="text"
          value={user.password}
        />

        <button>{label}</button>

        <p>{message}</p>
      </form>
    );
  }
}
