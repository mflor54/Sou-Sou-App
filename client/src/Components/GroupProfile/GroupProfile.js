import React, { Component } from 'react';
import { Jumbotron, Button, Col, Grid, Row, Panel } from 'react-bootstrap';

import './GroupProfile.css';

const avatarStyle = {
  height: '50px',
  width: '50px',
  marginRight: '5px'
}
let disable_toggle = false;
const GroupProfile = () => {
  //join button logic depends on: 
    //number of possible group members
    //number of ppl currently in group
    //if group is full status = true
  return(
    <div>
      navbar
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12}> 
              <h1 className="gp-title">Get Schmoney Team</h1>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6}>
              <p>
                Group Description: Cat ipsum dolor sit amet, paw at your fat belly annoy the old grumpy cat, start a fight and then retreat to wash when i lose howl on top of tall thing. Loved it, hated it, loved it, hated it. Scratch the box intrigued by the shower.
              </p>
            </Col>
            <Col md={6}>
              Next Payout Date: April 1, 2018
              <div className="">
                <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
              </div>
              <div>
                <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
              </div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6}>
              <Button disabled={disable_toggle}>Join</Button>
            </Col>
          </Row>
        </Grid>
      </div>
      <Grid>
        <Row>
          <Col md={6}>
            <Panel.Heading>
              Message Board
            </Panel.Heading>
          </Col>
        </Row>
      </Grid>
      
    </div>
  )
}


export default GroupProfile;