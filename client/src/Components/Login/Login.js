import React, { Component } from 'react';
import { Button, Popover, Tooltip, Modal,OverlayTrigger } from 'react-bootstrap';
import { Redirect } from "react-router";

class ModalLogin extends Component {
  constructor(){
    super()
    this.state ={
      usernameInput: "",
      passwordInput: "",
      message: "",
      loggedIn: false,
      userId:""
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

     if (usernameInput.length < 6) {
       this.setState({
         message: "Username length must be at least 6"
       });
       return;
     }
     fetch
       .post("/users/login", {
         username: usernameInput,
         password: passwordInput
       })
       .then(result => result.json())
       .then(res => {
         this.setState({
           usernameInput: "",
           passwordInput: "",
           message: "Logged In",
           userId:"",
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



  render(){
    const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
  );
  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  const { usernameInput, passwordInput, message, loggedIn } = this.state;
   if (loggedIn) {
       return <Redirect to="/profile/:userId" />;
     }
    return(
      <Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <h4>Popover in a modal</h4>
        <p>
          there is a{' '}
          <OverlayTrigger overlay={popover}>
            <a href="#popover">popover</a>
          </OverlayTrigger>{' '}
          here
        </p>

        <h4>Tooltips in a modal</h4>
        <p>
          there is a{' '}
          <OverlayTrigger overlay={tooltip}>
            <a href="#tooltip">tooltip</a>
          </OverlayTrigger>{' '}
          here
        </p>

        <hr />
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




      </Modal.Body>
      <Modal.Footer>
      <Button onClick={this.submitForm}>Submit</Button>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default ModalLogin;
