import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, PageHeader } from 'react-bootstrap';
const avatarStyle = {
  height: '50px',
  width: '50px',
  marginRight: '5px'
}

const Groups = () => {
  return(
    <div>
      Nav Bar will be above page header
      <PageHeader bsClass="groups-header">
        Example page header <small>Subtext for header</small>
      </PageHeader>
      
        
      <Grid>
        <ListGroup bsClass="groups-list-group">
          <ListGroupItem header="Debt Payoff Club" href="#">
            <Row>
              <Col md={4}>
                <p>Savings Goal: $1000</p>
              </Col>
              <Col md={4}>
                <p>Group description (cuts off after x-amount of characters)</p>
              </Col>
              <Col md={4}>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem header="Rainy Day Fund" href="#">
          <Row>
              <Col sm={4}>
                <p>Savings Goal: $500</p>
              </Col>
              <Col sm={4}>
                <p>Group description (cuts off after x-amount of characters)</p>
              </Col>
              <Col sm={4}>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} alt="username" src="https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg"/>
                <img style={avatarStyle} src="https://image.freepik.com/icones-gratis/perfil-simbolo-de-informacao_318-41154.jpg"/>
                <img style={avatarStyle} src="https://image.freepik.com/icones-gratis/perfil-simbolo-de-informacao_318-41154.jpg"/>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Grid>
        
    </div>
  )

}


export default Groups;