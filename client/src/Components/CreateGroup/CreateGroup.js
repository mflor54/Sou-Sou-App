import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ProgressBar, Tabs, Tab, Popover, Form, FormGroup, ControlLabel, FormControl, Checkbox, Radio, Button, InputGroup, Input, Row, Col, Panel } from 'react-bootstrap';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'mdbreact';

import './CreateGroup.css';


class CreateGroup extends Component {
  constructor(){
    super()
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
                  <Panel.Title componentClass="h3"> Tab 1 content</Panel.Title>
                </Panel.Heading>
                <Panel.Body> 
                  Tab 1 content
                </Panel.Body>
              </Panel>
            </TabContent>
          </Tab>
          <Tab eventKey={2} title="Group Details">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Submit">
            Tab 3 content
          </Tab>
        </Tabs>
      </div>
    )
  }
}


export default CreateGroup;

