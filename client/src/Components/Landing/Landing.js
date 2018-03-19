import React, { Component } from 'react';
import ModalLogin from '../Login/Login';
import ModalRegister from '../Register/Register';

import { Grid, Row, Col,Jumbotron, Button, Popover,
  Tooltip, Modal,OverlayTrigger, ButtonToolbar } from 'react-bootstrap';



class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      showReg:false
    }
  }


  render(){
   let loginClose = () => this.setState({ showLogin: false });
   let regClose = () => this.setState({ showReg: false });
  return(

  <div>
    <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>

        <Button
          bsStyle="primary"
          onClick={() => this.setState({ showLogin: true })}>
          Login
         </Button>
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ showReg: true })}>
          Register
        </Button>

       <ModalLogin show={this.state.showLogin} onHide={loginClose}/>
       <ModalRegister show={this.state.showReg} onHide={regClose}/>

    </Jumbotron>
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <code>&lt;{'2 width col'} /&gt;</code>
        </Col>
        <Col xs={6} md={4}>
          <code>&lt;{'1 width col'} /&gt;</code>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} md={4}>
          <code>&lt;{'3 cols'} /&gt;</code>
        </Col>
        <Col xs={6} md={4}>
          <code>&lt;{'3 cols'} /&gt;</code>
        </Col>
        <Col xs={6} md={4}>
          <code>&lt;{'3 cols'} /&gt;</code>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
          <code>&lt;{'full width col'} /&gt;</code>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <code>&lt;{'half width'} /&gt;</code>
        </Col>
        <Col md={6} mdPull={6}>
          <code>&lt;{'half width'} /&gt;</code>
        </Col>
      </Row>
    </Grid>
  </div>
    )
  }
}

export default Landing;
