import React, { Component } from "react";
import { Link } from "react-router-dom";

class UsersList extends Component {
  render() {
    const list = this.props.users.map(user => {
      return (
        <div>
          <Link to={`/users/${user.id}`}>
            <li key={user.id}>{user.email}</li>
          </Link>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default UsersList;
