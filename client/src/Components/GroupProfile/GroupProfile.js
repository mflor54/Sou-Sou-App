import React, { Component } from 'react';
import { Jumbotron, Button, Col, Grid, Row, } from 'react-bootstrap';

import './GroupProfile.css';

const avatarStyle = {
  height: '50px',
  width: '50px',
  marginRight: '5px'
}

const GroupProfile = () => {
  //join button logic depends on: 
    //number of possible group members
    //number of ppl currently in group
  
  return(
    <div>
      navbar
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12}> 
              <h2 className="gp-title">What if I have a really really really long group name.  What happens then???????</h2>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6}>
              <p>
                Group Description: Cat ipsum dolor sit amet, paw at your fat belly annoy the old grumpy cat, start a fight and then retreat to wash when i lose howl on top of tall thing. Loved it, hated it, loved it, hated it. Scratch the box intrigued by the shower. Chew iPad power cord cat snacks give attitude. Favor packaging over toy meow meow or meow loudly just to annoy owners for roll on the floor purring your whiskers off lick human with sandpaper tongue.
              </p>
            </Col>
            <Col md={6}>
              Payout
              <div>
              <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
              <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
              <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
              </div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6}>
              <Button>Join/Closed</Button>
            </Col>
          </Row>
        </Grid>
      </div>
      <div>
        Chat Box
      </div>
      
    </div>
  )
}


export default GroupProfile;