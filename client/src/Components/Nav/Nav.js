import React, {Component} from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './Nav.css';

var logo = require('../images/Logo/OwoLogoNWGroup3Sm.png');


const Nav =()=>{
  return(

      <Row className="Nav">
        <Row>
          <Col xs={6} lg={3} className="logoPos">
            <img  src={logo}  className='logosize'/>
            <p>OWO</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} lg={3} className="login_button">
              <Link to="/groups">Groups</Link>
              {"  "}
              <Link to="/users/profile">Profile Page</Link>
              {"  "}
              <Link to="/">Logout</Link>
            </Col>
        </Row>
      </Row>

  )
}

export default Nav;
