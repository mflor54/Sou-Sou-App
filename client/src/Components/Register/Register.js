import React, { Component } from 'react';
import { Redirect } from "react-router";
import {  Form, FormGroup, FormControl, Col, Checkbox, ControlLabel,Popover, Tooltip } from 'react-bootstrap';
import axios from "axios";
import { Button } from 'mdbreact';
import { Link, Route, Switch } from 'react-router-dom';
import { ModalLink } from 'react-router-modal';

import '../Landing/Landing.css';

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
      message: ""
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
     this.setState({ usernameInput: "", passwordInput: "", message: "Inserted User" });
   })
   .catch(err => {
     this.setState({ usernameInput: "", passwordInput: "", message: "Error Inserting User" });
   });
};

renderModalRegistation({onHide}){
  const { emailInput,usernameInput, passwordInput, message , firstNameInput, lastNameInput, comfirmPassword} = this.state;

  return (
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
           placeholder="Password"
            name="password"
            value={this.state.passwordInput}
            onChange={this.handlePassword} />
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
           <Button   className="btn-custom"
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
    const { emailInput,usernameInput, passwordInput, message , firstNameInput, lastNameInput, comfirmPassword} = this.state;
  return(

          <div>


          <ModalLink
          path={`/users/register`}
          component={this.renderModalRegistation}>
          <Button
             className="btn-custom" color="secondary-color-dark" >
             Sign Up
            </Button>
           </ModalLink>


        </div>
    )
  }
}

export default ModalRegister;

// <Modal {...this.props}>
//   <Modal.Header closeButton>
//     <Modal.Title>Login</Modal.Title>
//       </Modal.Header>
//         <Modal.Body>
//           <form>
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 name="firstNameInput"
//                 value={firstNameInput}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 name="lastNameInput"
//                 value={lastNameInput}
//                 onChange={this.handleChange}
//               />
//             </label>
//               <label>
//                 Username:
//                 <input
//                   type="text"
//                   name="usernameInput"
//                   value={usernameInput}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   type="text"
//                   name="emailInput"
//                   value={emailInput}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <label>
//                 Password:
//                 <input
//                   type="password"
//                   name="passwordInput"
//                   value={passwordInput}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <label>
//                 Confirm Password:
//                 <input
//                   type="password"
//                   name="comfirmPassword"
//                   value={comfirmPassword}
//                   onChange={this.handleChange}
//                 />
//               </label>
//             </form>
//           </Modal.Body>
//         <Modal.Footer>
//         <p>{message}</p>
//       <Button
//       className="btn-custom" color="unique" size="lg"
//        onClick={this.submitForm}>Submit</Button>
//       <Button
//       className="btn-custom" color="unique" size="lg"
//       onClick={this.props.onHide}>Close</Button>
//     </Modal.Footer>
//   </Modal>
