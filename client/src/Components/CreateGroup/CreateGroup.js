import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
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
      totalMembers: '', 
      creator: '', 
      payinAmount: '',
      payoutAmount: '', 
      frequency: '',
      description: ''
    }
  }

  //progress to show progress - animated
  //tabs to navigate
  //needs to redirect to the newly created group-profile page


  toggleTabs = () => {
    //changes to the next tab 
    //make this a button
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChecked = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handlePayin = () => {
    //calculates the payin amount based on the savings goal and payout frequency
  }

  handleSubmit = e => {
    e.preventDefault();
    const { groupName, totalMembers, creator, payinAmount, payoutAmount, frequency, description } = this.state;
    //axios call that sends all the info to the backend route
    axios.post("/groups/new", {
      groupName: groupName,
      totalMembers: totalMembers, 
      creator: creator, 
      payinAmount: payinAmount,
      payoutAmount: payoutAmount, 
      frequency: frequency,
      description: description
    })
    .then(res => {
      console.log(res);
      //I want to show the success message and redirect to 
      // this.props.setUser(res.data);
      //  this.setState({
      //    loggedIn: true
      //  });
    })
    .catch(err => {
      //reset form and tell user to there was an error and start over. 
    });
  }

  render(){
    let members = [3, 5, 9];
    let payout = [100, 250, 1000];
    let payoutFreq = ["Weekly", "Bi-Weekly", "Monthly"];


    const { groupName, totalMembers, creator, payinAmount, payoutAmount, frequency, description } = this.state;
    console.log("===", groupName);
    console.log("===", description);
    console.log("===", totalMembers);
    console.log("===", frequency);
    console.log("===", payoutAmount);
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
                    Dynamically shows the amount each user will have to pay each week, bi-week or month
                  </FormGroup>                      
                </Panel.Body>
              </Panel>
            </TabContent>
          </Tab>
          <Tab eventKey={3} title="Submit">
            <TabContent>
              <ControlLabel>Review Group Creation</ControlLabel>
                <FormGroup>
                  <Button className="btn-custom" color="secondary-color-dark">Submit</Button>
                </FormGroup>
            </TabContent>
          </Tab>
        </Tabs>
      </div>
    )
  }
}


export default CreateGroup;

