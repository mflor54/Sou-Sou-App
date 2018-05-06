import React, { Component } from 'react';
import { Col, Checkbox, Form, FormGroup, FormControl } from 'react-bootstrap';
import { Button } from 'mdbreact';
import { Redirect, BrowserHistory, Router } from "react-router";

import { Link, Route, Switch, withRouter } from 'react-router-dom';

import axios from 'axios';
import { ModalLink, Modal } from 'react-router-modal';

import GroupProfile from '../GroupProfile/GroupProfile';

import '../Join/Join.css';

import 'react-router-modal/css/react-router-modal.css';

const refresh = ({ history }) => {
  console.log("history: ", history);
  // history.length > 1 && (
  //   <Button  className="btn-custom"  color="secondary-color-dark"  onClick={history.goBack}>Cancel</Button>
  // );
}

class ModalJoin extends Component {
  constructor(props,context){
    super(props,context)
    this.state ={
      agree: false, 
      open: true, 
      member: false
    }

    //this.renderModalJoin = this.renderModalJoin.bind(this)
  }

  handleChecked = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  refresh = (groupID) => {
    this.props.history.push(`/groups/${groupID}`);
  }
  
  /*
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
      //withRouter(refresh(groupID));
      //can this handle refresh of page
      //--you can force the page to refresh by changing state. 
      //this.setState({
        //groupmember: true
      //})
      //return <Redirect to={`/groups/${groupID}`} render={this.GroupProfile}/>
      
      //browserHistory.push(this.props.url);
      this.setState({
        member: true
      })
    
    })


     //sends the user's id(via the back end with req.user) and the group id to the database
     //the user's id gets added to that group as a group member
     //upon success, modal should close
     //user's avatar is then added to the payout section
  };
  */
  



  render(){
    console.log("props in join", this.props);
    return(
      
      <div>
      <Button className="btn-custom" color="secondary-dark-color" type="Submit" onClick={this.props.submit}>Join</Button>
         
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


