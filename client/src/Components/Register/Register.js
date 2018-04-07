import React, { Component } from 'react';
import { Redirect } from "react-router";
import {  Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import axios from "axios";
import { Button } from 'mdbreact';
import { ModalLink } from 'react-router-modal';

import '../Landing/Landing.css';
import 'react-router-modal/css/react-router-modal.css';





class ModalRegister extends Component {
  constructor(){
    super()
    this.state ={
      usernameInput: "",
      passwordInput: "",
      firstNameInput: "",
      lastNameInput: "",
      comfirmPassword: "",
      emailInput:"",
      message: "",
      registered:false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.renderModalRegistation = this.renderModalRegistation.bind(this)

  }

handleChange (evt) {
 this.setState({ [evt.target.name]: evt.target.value });
}

submitForm = e => {
 e.preventDefault();
 const { usernameInput, passwordInput, firstNameInput, lastNameInput, comfirmPassword,emailInput } = this.state;

 if (usernameInput.length < 6) {
   this.setState({
     message: "Username length must be at least 6"
   });
   return;
 }

 if(passwordInput !== comfirmPassword){
   this.setState({
     message: "Password does not match"
   });
   return
 }
 axios.post("/users/register", {

     firstName: firstNameInput,
     lastName: lastNameInput,
     username: usernameInput,
     password: passwordInput,
     email:emailInput
   })
   .then(res => {
     this.setState({
       registered: true,
       firstNameInput: "",
       lastNameInput: "",
       usernameInput: "",
       passwordInput: "",
       comfirmPassword: "",
       emailInput:"",
       message: "Inserted User"
       });
   })
   .catch(err => {
     this.setState({ usernameInput: "", passwordInput: "", message: "Error Inserting User" });
   });
};

renderModalRegistation({onHide}){
  const { emailInput,usernameInput, passwordInput, message , firstNameInput, lastNameInput, comfirmPassword} = this.state;

  return (
    <div>
    <Form horizontal className="loginModal">
     <h2>Sign Up</h2>
     <hr />

     <FormGroup controlId="formHorizontalFirstName" bsSize="large">
       <Col componentClass={ControlLabel} sm={3}>
         First Name
       </Col>
       <Col sm={9}>
         <FormControl
         className="input"
         type="text"
         placeholder="Jane"
         name="firstNameInput"
         value={firstNameInput}
         onChange={this.handleChange}/>
       </Col>
     </FormGroup>

     <FormGroup controlId="formHorizontalLastName" bsSize="large">
       <Col componentClass={ControlLabel} sm={3}>
        Last Name
       </Col>
       <Col sm={9}>
         <FormControl
         className="input"
         type="text"
         placeholder="Doe"
         name="lastNameInput"
         value={lastNameInput}
         onChange={this.handleChange}/>
       </Col>
     </FormGroup>

     <FormGroup controlId="formHorizontalEmail" bsSize="large">
       <Col componentClass={ControlLabel} sm={3}>
        Email
       </Col>
       <Col sm={9}>
         <FormControl
         className="input"
         type="email"
         placeholder="JaneDoe@example.com"
         name="emailInput"
         value={emailInput}
         onChange={this.handleChange}/>
       </Col>
     </FormGroup>

       <FormGroup controlId="formHorizontalUsername" bsSize="large">
         <Col componentClass={ControlLabel} sm={3}>
           Username
         </Col>
         <Col sm={9}>
           <FormControl
           className="input"
           type="text"
           placeholder="JaneDoe78"
           name="usernameInput"
           value={this.state.usernameInput}
           onChange={this.handleChange} />
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
           placeholder="Password"
            name="passwordInput"
            value={this.state.passwordInput}
            onChange={this.handleChange} />
         </Col>
       </FormGroup>

       <FormGroup controlId="formHorizontalConfirmPassword" bsSize="large">
         <Col componentClass={ControlLabel} sm={3}>
           Confirm Passwod
         </Col>
         <Col sm={9}>
           <FormControl
           className="input"
           type="password"
            placeholder="Confirm Password"
           name="comfirmPassword"
           value={comfirmPassword}
           onChange={this.handleChange}/>
         </Col>
       </FormGroup>

       <FormGroup>
         <Col smOffset={3} sm={8}>
           <Button
           className="btn-custom"
           color="secondary-color-dark"
           onClick={this.submitForm}>Sign Up</Button>
         </Col>
       </FormGroup>
       <div>{message}</div>
     </Form>

     </div>
  );
}


render(){
    const { emailInput,usernameInput, passwordInput, message , firstNameInput, lastNameInput, comfirmPassword, registered} = this.state;
    if (registered) {
      return <Redirect to={`/users/login`} render={this.renderLogin}/>;
     }
  return(

        <div>
          <ModalLink
              path={`/users/register`}
              component={this.renderModalRegistation}

              parentPath="/">
          <Button
             className="btn-custom register"
             color="secondary-color-dark" >
            Start Saving Now
            </Button>
           </ModalLink>
        </div>
    )
  }
}

export default ModalRegister;
