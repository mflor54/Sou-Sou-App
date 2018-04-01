import React, { Component } from 'react';
import { Col, Checkbox, Form, FormGroup, FormControl } from 'react-bootstrap';
import { Button } from 'mdbreact';
import { Redirect } from "react-router";

import { Link, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import { ModalLink, Modal } from 'react-router-modal';

import '../Join/Join.css';

import 'react-router-modal/css/react-router-modal.css';


class ModalJoin extends Component {
  constructor(props,context){
    super(props,context)
    this.state ={
      agree: false, 
      open: true
    }

    this.renderModalJoin = this.renderModalJoin.bind(this)
  }

  handleChecked = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleJoinSubmit = e => {
    //post request to userJoinGroup
     //sends the user's id and the group id to the database
     //the user's id gets added to that group as a group member
     //upon success, modal should close
     //user's avatar is then added to the payout section
  };


  renderModalJoin({onHide}){
    const { agree } = this.state;
    console.log("**", agree);
    let groupID = this.props.match.params.groupID;
    console.log("===> Group ID===>", groupID);
    return (
      <Form horizontal className="modalJoin">
        <h2> Confirm Join</h2>
        <hr/>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox
              name="agree"
              checked={agree}
              onChange={this.handleChecked}
            >
              <p>
                By joining this group, you confirm that you have agreed to OWO terms of service
              </p>
            </Checkbox>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button 
              className="btn-custom" 
              color="unique" 
              size="lg" 
              onClick={this.handleJoinSubmit}
            >
              Join
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }

  render(){
    const { open } = this.state;
    return(
      <div>
        <ModalLink path={`/groups/groupID/join`}component={this.renderModalJoin}>
         { open ? <Button className="btn-custom" color="unique">
          Join
          </Button> : <Button>Closed</Button>}
        </ModalLink>
      </div>
    )
  }
}

export default ModalJoin;


