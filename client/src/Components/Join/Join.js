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

    //this.renderModalJoin = this.renderModalJoin.bind(this)
  }

  handleChecked = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleJoinSubmit = e => {
    console.log("///clicking submit");
    //get group id and send to back end via axios post request
    let groupID = this.props.groupID;
    console.log("this is this.props.groupID:", groupID);
    //
    //post request to userJoinGroup
    axios.post(`/groups/${groupID}/join`, {
      groupID: groupID
    })
    .then(res => {
      console.log("***handleJoinSubmit response: ",res);
      //can this handle refresh of page
      //--you can force the page to refresh by changing state. 
      //this.setState({
        //groupmember: true
      //})
    })
  

     //sends the user's id(via the back end with req.user) and the group id to the database
     //the user's id gets added to that group as a group member
     //upon success, modal should close
     //user's avatar is then added to the payout section
  };
  //check if group is full function
  //get group total members - current members
  //if result > 0 
  //then group is not full
  //total current group members can be rendered as 
  //if result = 0
  //group is full
  //disable button
  //** Where should this happen at? */
  //-- In a .then upon success of getting the query back,
  //-- send calculations/data back as data along with getSingleGroup query

  //check if user is already a group member function
  //get the group id that belongs to the req.user.id from the users_groups table and compare it to the group id from this.state
  //true or false
  //if (userID.groupID == groupID) {
    //this.setState({
        //groupMember: true
    //});
  //} else {
    //this.setState({
        //groupMember: false
    //})
  //}
//}
    
    //user is in the group already
    //render paybutton component
    //render ChatBoard component
   
  //check if group is full
//this can be used again to occur when a user joins a group - hopefully this will reset the page
//should also call this function 




  render(){
    return(
      <div>
      <Button type="Submit" onClick={this.handleJoinSubmit}>Join</Button>
      </div>
    )
  }
 /*
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
  */
}

export default ModalJoin;


