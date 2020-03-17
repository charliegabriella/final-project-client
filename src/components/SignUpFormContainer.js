// import React from "react";
// import SignUpForm from "./SignupForm";
// import { connect } from "react-redux";
// import { signup } from "../actions";

// class SignUpFormContainer extends React.Component {
//   state = { email: "", password: "" };

//   onSubmit = event => {
//     event.preventDefault();
//     console.log("click the signup form");
//     this.props.signup(this.state);
//   };

//   onChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   render() {
//     return (
//       <SignUpForm
//         onSubmit={this.onSubmit}
//         onChange={this.onChange}
//         values={this.state}
//       />
//     );
//   }
// }

// export default connect(null, { signup })(SignUpFormContainer);
