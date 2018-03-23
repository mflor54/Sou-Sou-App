import React, { Component } from 'react';
import {  Popover, Tooltip, Modal } from 'react-bootstrap';
import { Redirect } from "react-router";
import axios from "axios";
import { Button } from 'mdbreact';
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



render(){
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    const { emailInput,usernameInput, passwordInput, message , firstNameInput, lastNameInput, comfirmPassword} = this.state;
  return(
    <Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <form>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstNameInput"
                    value={firstNameInput}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastNameInput"
                    value={lastNameInput}
                    onChange={this.handleChange}
                  />
                </label>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="usernameInput"
                      value={usernameInput}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="text"
                      name="emailInput"
                      value={emailInput}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="passwordInput"
                      value={passwordInput}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Confirm Password:
                    <input
                      type="password"
                      name="comfirmPassword"
                      value={comfirmPassword}
                      onChange={this.handleChange}
                    />
                  </label>
                </form>
              </Modal.Body>
            <Modal.Footer>
            <p>{message}</p>
          <Button
          className="btn-custom" color="unique" size="lg"
           onClick={this.submitForm}>Submit</Button>
          <Button
          className="btn-custom" color="unique" size="lg"
          onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalRegister;
