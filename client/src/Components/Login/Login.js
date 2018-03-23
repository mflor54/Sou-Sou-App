import React, { Component } from 'react';
import {  Popover, Tooltip, Modal,OverlayTrigger } from 'react-bootstrap';
import { Button} from 'mdbreact';
import { Redirect } from "react-router";
import axios from 'axios';
import '../Landing/Landing.css';

class ModalLogin extends Component {
  constructor(){
    super()
    this.state ={
      usernameInput: "",
      passwordInput: "",
      message: "",
      loggedIn: false,
      id:""
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
     const { usernameInput, passwordInput, loggedIn, message, userId } = this.state;

     if (usernameInput.length < 6) {
       this.setState({
         message: "Username length must be at least 6"
       });
       return;
     }
     axios
       .post("/users/login", {
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

export default ModalLogin;
