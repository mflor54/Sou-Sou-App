import React, { Component } from 'react';
import { Col, Checkbox, ControlLabel, Popover, Tooltip, Form, FormGroup, FormControl } from 'react-bootstrap';
import { Button } from 'mdbreact';
import { Redirect } from "react-router";

import { Link, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import { ModalLink } from 'react-router-modal';

import '../Join/Join.css';

import 'react-router-modal/css/react-router-modal.css';



class ModalJoin extends Component {
  constructor(props,context){
    super(props,context)
    this.state ={
      join: false,
      agree: false
    }

    this.renderModalJoin = this.renderModalJoin.bind(this)
  }

  handleChecked = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleJoinSubmit = e => {
     
  };


  renderModalJoin({onHide}){
    return (
      <Form horizontal className="modalJoin">
        <h2> Confirm Join</h2>
        <hr/>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>
              <p>
                By joining this group, you confirm that you have agreed to OWO terms of service
              </p>
            </Checkbox>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button className="btn-custom" color="unique" size="lg" onClick={this.handleJoinSubmit}>Join</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }

  render(){
    // const popover = (
    // <Popover id="modal-popover" title="popover">
    //   very popover. such engagement
    // </Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    // const { usernameInput, passwordInput, message, loggedIn } = this.state;
    // if (loggedIn) {
    //  console.log(loggedIn);
    //   return <Redirect to={`/users/profile`} render={this.renderProfilePage}/>;
    //  }
    return(

      <div>
        <ModalLink path='/test' component={this.renderModalJoin}>
          <Button className="btn-custom" color="unique">
          Join
          </Button>
        </ModalLink>
      </div>

    )
  }
}



export default ModalJoin;


