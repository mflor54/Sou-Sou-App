import React, { Component } from 'react';
import {  Form, FormGroup, FormControl, Col, Checkbox, ControlLabel,Popover, Tooltip } from 'react-bootstrap';
import { Button} from 'mdbreact';
import { Redirect } from "react-router";
import { ModalLink } from 'react-router-modal';
import { Link, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import Back from "../../Back";

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
      user:[]
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
     const { usernameInput, passwordInput, loggedIn, message, userID } = this.state;

     if (usernameInput.length < 4) {
       this.setState({
         message: "Username length must be at least 4"
       });
       return;
     }
     axios.post("/users/login", {
         username: usernameInput,
         password: passwordInput
       })
       .then(res => {
         console.log('LOGIN ', res.data.id);
         this.props.setUser(res.data);

          this.setState({
            loggedIn: true,
            user: res.data
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

   renderModalLogin(){
     return (
       <Form horizontal className="loginModal" >

        <h2>Login</h2>
        <hr />
          <FormGroup controlId="formHorizontalUsername" bsSize="large">
            <Col componentClass={ControlLabel} sm={3}>
              Username
            </Col>
            <Col sm={9}>
              <FormControl
              className="input"
                type="text"
                name="username"
                value={this.state.usernameInput}
                onChange={this.handleUsername} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" bsSize="large">
            <Col componentClass={ControlLabel} sm={3}>
              Password
            </Col>
            <Col sm={9}>
              <FormControl
                  className="input"
                  type="password"
                   name="password"
                   value={this.state.passwordInput}
                   onChange={this.handlePassword} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={8}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={8}>
            <p>{this.state.message}</p>
              <Button   className="btn-custom"  color="secondary-color-dark"
                  onClick={this.submitForm}>Sign in</Button>
            </Col>

          </FormGroup>
        </Form>
     );
   }



  render(){

    const { usernameInput, passwordInput, message, loggedIn, user } = this.state;
      // console.log(user);
      let userID = user.id
    if (loggedIn) {
     console.log(loggedIn);
      return <Redirect to={`/users/profile/${userID}`} render={this.renderProfilePage}/>;
     }
    return(

      <div>
          <ModalLink
             path={`/users/login`}
             component={this.renderModalLogin}
             parentPath="/">
          <Button
             className="btn-custom loginHeader"
             color="secondary-color-dark">
             Login
          </Button>
        </ModalLink>
        </div>
    )
  }
}


export default ModalLogin;
