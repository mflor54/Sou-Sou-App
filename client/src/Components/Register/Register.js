import React, { Component } from 'react';
import { Button, Popover, Tooltip, Modal,OverlayTrigger } from 'react-bootstrap';


class ModalRegister extends Component {
  constructor(){
    super()
    this.state ={
      usernameInput: "",
      passwordInput: "",
      message: ""
    }
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
     const { usernameInput, passwordInput } = this.state;

     if (usernameInput.length < 3) {
       this.setState({
         message: "Username length must be at least 3"
       });
       return;
     }
     fetch
       .post("/users/new", {
         username: this.state.usernameInput,
         password: this.state.passwordInput
       })
       .then(result => result.json())
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
 const { usernameInput, passwordInput, message } = this.state;
    return(
      <Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <label>
        First Name:
        <input
          type="text"
          name="username"
          value={usernameInput}
          onChange={this.handleFirstName}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="username"
          value={usernameInput}
          onChange={this.handleLastName}
        />
      </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={usernameInput}
              onChange={this.handleUsername}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={passwordInput}
              onChange={this.handlePassword}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="password"
              value={passwordInput}
              onChange={this.handleComfirmPassword}
            />
          </label>

      </Modal.Body>
      <Modal.Footer>
      <Button onClick={this.submitForm}>Close</Button>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default ModalRegister;
