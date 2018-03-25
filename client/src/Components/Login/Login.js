import React, { Component } from 'react';
import {  Form, FormGroup, FormControl, Col, Checkbox, ControlLabel,Popover, Tooltip } from 'react-bootstrap';
import { Button} from 'mdbreact';
import { Redirect } from "react-router";

import { Link, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import { ModalLink } from 'react-router-modal';

import '../Landing/Landing.css';
import 'react-router-modal/css/react-router-modal.css';



class ModalLogin extends Component {
  constructor(props,context){
    super(props,context)
    this.state ={
      usernameInput: "",
      passwordInput: "",
      message: "",
      loggedIn: false,
      id:""
    }
    this.renderModalLogin = this.renderModalLogin.bind(this)
  }

  handleUsername = e => {
     this.setState({
       usernameInput: e.target.value
     });
   };

   handlePassword = e => {
     this.setState({
       passwordInput: e.target.value
     });
   };

   submitForm = e => {
     e.preventDefault();
     const { usernameInput, passwordInput, loggedIn, message, userId } = this.state;

     if (usernameInput.length < 6) {
       this.setState({
         message: "Username length must be at least 6"
       });
       return;
     }
     axios.post("/users/login", {
         username: usernameInput,
         password: passwordInput
       })
       .then(res => {
         console.log(res);
         this.props.setUser(res.data);
          this.setState({
            loggedIn: true
          });

       })
       .catch(err => {
         this.setState({
           usernameInput: "",
           passwordInput: "",
           message: "User name or password does not match."
         });
       });
   };

   renderModalLogin({onHide}){
     return (
       <Form horizontal className="loginModal">
        <h2>Login</h2>
        <hr />
          <FormGroup controlId="formHorizontalUsername">
            <Col componentClass={ControlLabel} sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl
              className="input"
                type="text"
                name="username"
                value={this.state.usernameInput}
                onChange={this.handleUsername} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
              className="input"
              type="password"
               name="password"
               value={this.state.passwordInput}
               onChange={this.handlePassword} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button   className="btn-custom" color="unique" size="lg"
                  onClick={this.submitForm}>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
     );
   }



  render(){
    const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    const { usernameInput, passwordInput, message, loggedIn } = this.state;

    if (loggedIn) {
     console.log(loggedIn);
      return <Redirect to={`/users/profile`} render={this.renderProfilePage}/>;
     }
    return(

      <div>
        <ModalLink
          path={`/users/login`}
          component={this.renderModalLogin}>
          <Button
             className="btn-custom" color="unique">
             Login
          </Button>
        </ModalLink>


    </div>

    )
  }
}

//
// <Button
// className="btn-custom" color="unique" size="lg"
// onClick={this.props.onHide}>Close</Button>

export default ModalLogin;


// <div className="loginModal">
//   <div className="modalHeader">
//    <h2>Login</h2>
//   </div>
//    <hr />
//       <label>
//         <div>
//           Username:
//          </div>
//          <div className="input">
//           <input
//             type="text"
//             name="username"
//             value={this.state.usernameInput}
//             onChange={this.handleUsername}
//           />
//          </div>
//      </label>
//
//     <label>
//       <div>
//         Password:
//      </div>
//         <div className="input">
//           <input
//             type="password"
//             name="password"
//             value={this.state.passwordInput}
//             onChange={this.handlePassword}
//           />
//         </div>
//       </label>
//    <div>
//     <Button
//     className="btn-custom" color="unique" size="lg"
//     onClick={this.submitForm}>Login</Button>
//    </div>
//    <div>
//     <h5>Click outside to cancel</h5>
//    </div>
// </div>
