import React, { Component } from 'react';
import { Col, Grid, Row, } from 'react-bootstrap';


const GroupProfile = () => {
  return(
    <div>
      navbar
      <Grid>
        <Row className="show-grid">
          <Col md={6}> 
            <h1>Group Profile page</h1>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            Group Description
          </Col>
          <Col md={6}>
            Group member Icons
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <button>Join/Closed</button>
          </Col>
        </Row>
      </Grid>
      <div>
        Chat Box
      </div>
      
    </div>
  )
}


export default GroupProfile;