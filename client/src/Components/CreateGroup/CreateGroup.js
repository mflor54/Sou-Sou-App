import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Navagation from '../Nav/Nav';
import Groups from '../Groups/Groups';
import Landing from '../Landing/Landing';
import FooterUser from '../Footer/Footer';
import ProfilePage from '../ProfilePage/ProfilePage';
import GroupProfile from '../GroupProfile/GroupProfile';
import { ProgressBar, Tabs, Tab, Popover, Form, FormGroup, ControlLabel, FormControl, Checkbox, Radio, Button, InputGroup, Input, Row, Col, Panel } from 'react-bootstrap';
import axios from 'axios';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'mdbreact';

import '../Landing/Landing.css';

import './CreateGroup.css';


class CreateGroup extends Component {
  constructor(){
    super();
    this.state = {
      groupName: '',
      totalMembers: 0,
      creator: '',
      payoutAmount: 0,
      frequency: '',
      description: '',
      search:''
    }
  }

  //progress to show progress - animated
  //tabs to navigate
  //needs to redirect to the newly created group-profile page


  handleTabChange = (tabKey) => {
    let key = this.state;
    console.log("halllp")
    this.setState({
      key
    });
    //changes to the next tab 
    //make this a button
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  calculatePayin = (amount, members) => {
    // const { payoutAmount, totalMembers } = this.state;
    // let amount = payoutAmount;
    // let members = totalMembers;
    let result = 0
    if(amount === 0 || members === 0){
      return result;
    } else {
      result = Math.ceil(amount/( members - 1 ));
      return result;
    }
    console.log("===> amount, members", amount, members);
   
    //calculates the payin amount based on the savings goal and payout frequency
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("clicking submit");
    const { groupName, totalMembers, creator, payinAmount, payoutAmount, frequency, description } = this.state;
    let payin = Math.ceil(payoutAmount/(totalMembers - 1));
  
    /*
    fetch("/groups/new", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
      body: {
        groupName: groupName,
        totalMembers: totalMembers,
        payinAmount: payinAmount,
        payoutAmount: payoutAmount,
        frequency: frequency,
        description: description
      }
    });
    */
    //axios call that sends all the info to the backend route
    //console.log(this.state);    
    axios.post("/groups/new", {
      groupName: groupName,
      totalMembers: totalMembers,
      payinAmount: payin,
      payoutAmount: payoutAmount,
      frequency: frequency,
      description: description
    })
    .then(res => {
      console.log(res);
      //I want to show the success message and redirect to the newly created group
    })
    .catch(err => {
      console.log(err);
      //reset form and tell user to there was an error and start over.
    });
  }
renderCreateGroup=()=>{

  let members = [3, 5, 9];
  let payout = [100, 250, 1000];
  let payoutFreq = ["Weekly", "Bi-Weekly", "Monthly"];


  const { groupName, totalMembers, creator, payinAmount, payoutAmount, frequency, description } = this.state;

  return(
    <div>
    <h1>Create Group Page</h1>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Group Description">
        <TabContent>
          <Panel className="create-panel">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Group Info</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <ControlLabel>Group Name</ControlLabel>
              <FormControl
                name="groupName"
                type="text"
                value={this.state.value}
                placeholder="Enter Group Name"
                onChange={this.handleChange}
              />
              <ControlLabel>Group Description</ControlLabel>
              <FormControl
                name="description"
                componentClass="textarea"
                type="text"
                value={this.state.value}
                placeholder="Enter Group Description"
                onChange={this.handleChange}
              />
            </Panel.Body>
          </Panel>
        </TabContent>
      </Tab>
      <Tab eventKey={2} title="Group Details">
      <TabContent>
        <Panel className="create-panel">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Savings Goals </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ControlLabel>Payout Amount</ControlLabel>
              <FormGroup>

                {payout.map(pay => <Radio name="payoutAmount" value={pay} onChange={this.handleChange} inline>${pay}</Radio>)}

              </FormGroup>
            <ControlLabel>Number of Group Members</ControlLabel>
              <FormGroup>

                {members.map(member => <Radio name="totalMembers" value={member} onChange={this.handleChange} inline>{member}</Radio>)}

              </FormGroup>
            <ControlLabel>Payout Frequency</ControlLabel>
              <FormGroup>

                {payoutFreq.map(freq => <Radio name="frequency" value={freq} onChange={this.handleChange} inline>{freq}</Radio>)}

              </FormGroup>
            <ControlLabel>Pay-in Amount</ControlLabel>
              <FormGroup>
                <p>Each member of this group will pay in <strong>${this.calculatePayin(payoutAmount, totalMembers)} on a {frequency} basis </strong>, except for the person being paid. </p>

              </FormGroup>
            </Panel.Body>
          </Panel>
        </TabContent>
      </Tab>
      <Tab eventKey={3} title="Submit">
        <TabContent>
          <Panel className="create-panel">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Review </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <ControlLabel>Review Group Creation</ControlLabel>
              <FormGroup>
                <Button className="btn-custom" color="secondary-color-dark">Submit</Button>
              </FormGroup>
            </Panel.Body>
          </Panel>
        </TabContent>
      </Tab>
    </Tabs>
  </div>)
}





  render(){
    let members = [3, 5, 9];
    let payout = [100, 250, 1000];
    let payoutFreq = ["Weekly", "Bi-Weekly", "Monthly"];


    const { groupName, totalMembers, creator, payoutAmount, frequency, description, key } = this.state;
    /*
    console.log("===", groupName);
    console.log("===", description);
    console.log("===", totalMembers);
    console.log("===", frequency);
    console.log("===", payoutAmount);
    */
  
    return(
      <div>
      <Switch>
        <Route path="/groups/new" render={this.renderCreateGroup} />
        <Route path="/groups/:groupID" component={GroupProfile}/>
          <Route path="/users/profile/:userID" component={ProfilePage} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Landing} />
          </Switch>
          </div>
    )
  }
}


export default CreateGroup;
