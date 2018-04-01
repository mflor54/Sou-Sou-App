import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ProgressBar, Tabs, Tab, Popover, Form, FormGroup, ControlLabel, FormControl, Checkbox, Radio, Button, InputGroup, Input, Row, Col, Panel } from 'react-bootstrap';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'mdbreact';

import './CreateGroup.css';


class CreateGroup extends Component {
  constructor(){
    super();
    this.state = {
      groupName: '',
      groupDescription: '', 
      payout: '', 
      frequency: '', 
      groupMembers: ''
    }
  }
  //progress to show progress - animated
  //tabs to navigate
  //needs to redirect to the newly created group-profile page
  render(){
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
                    type="text"
                    value="this.state.value"
                    placeholder="Enter Group Name"
                  />
                  <ControlLabel>Group Description</ControlLabel>
                  <FormControl
                    componentClass="textarea" 
                    type="text"
                    value="this.state.value"
                    placeholder="Enter Group Description"
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
                    <Radio name="100" inline>$100</Radio> 
                    <Radio name="250" inline>$250</Radio>  
                    <Radio name="1000" inline>$1000</Radio> 
                  </FormGroup> 
                <ControlLabel>Number of Group Members</ControlLabel>
                  <FormGroup>
                    <Radio name="3" inline>3</Radio> 
                    <Radio name="5" inline>5</Radio>  
                    <Radio name="9" inline>9</Radio> 
                  </FormGroup>    
                <ControlLabel>Payout Frequency</ControlLabel>
                  <FormGroup>
                    <Radio name="weekly" inline>Weekly</Radio> 
                    <Radio name="bi-weekly" inline>Bi-Weekly</Radio>  
                    <Radio name="monthly" inline>Monthly</Radio> 
                  </FormGroup>                     
                </Panel.Body>
              </Panel>
            </TabContent>
          </Tab>
          <Tab eventKey={3} title="Submit">
            <TabContent>
              <ControlLabel>Review Group Creation</ControlLabel>
                <FormGroup>
                  <Button>Submit</Button>
                </FormGroup>
            </TabContent>
          </Tab>
        </Tabs>
      </div>
    )
  }
}


export default CreateGroup;

