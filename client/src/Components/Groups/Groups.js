import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';


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
            icons of ppl in group
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