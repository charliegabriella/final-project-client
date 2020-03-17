import React, { Component } from "react";
import { getUsers } from "../actions";
import { connect } from "react-redux";
import UsersList from "./UsersList";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    if (!this.props.users) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul>
          <UsersList users={this.props.users} />
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { users: state.users };
}
const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
