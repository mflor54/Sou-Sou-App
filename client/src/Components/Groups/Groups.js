import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
const avatarStyle = {
  height: '50px',
  width: '50px',
  marginRight: '5px'
}

const Groups = () => {
  return(
    <div>
    <Grid>
      <ListGroup>
        <ListGroupItem header="Group 1" href="#">
        <Row>
          <Col sm={4}>
            Savings Amount $$$
          </Col>
          <Col sm={4}>
            Group description (cuts off after x-amount of characters)
          </Col>
          <Col sm={4}>
            <img style={avatarStyle} src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
            <img style={avatarStyle} src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
            <img style={avatarStyle} src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
            <img style={avatarStyle} src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
            <img style={avatarStyle} src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
            <img style={avatarStyle} src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
          </Col>
        </Row>
        </ListGroupItem>
        <ListGroupItem header="Group 2" href="#">
          
        </ListGroupItem>
        <ListGroupItem header="Group 3" href="#">
          
        </ListGroupItem>
      </ListGroup>
    </Grid>
    </div>
  )

}


export default Groups;