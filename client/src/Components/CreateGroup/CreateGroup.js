import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {ProgressBar, Tabs, Tab, Popover, Form, FormGroup, ControlLabel, FormControl, Checkbox, Radio, Button, InputGroup, Input} from 'react-bootstrap';


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
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Group Name and Description">
            <FormGroup>
              
            </FormGroup>
          </Tab>
        </Tabs>
      </div>
    )
  }
}


export default CreateGroup;

