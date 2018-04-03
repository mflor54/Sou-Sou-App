import React, {Component} from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link} from 'react-router-dom';

var logo = require('../images/Logo/OwoLogoNWGroup3Sm.png');


const Nav =()=>{
  return(

      <Row className="show-grid">
        <Row>
          <Col xs={6} md={4} >
            <img  src={logo}  className='logosize'/>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4} className="login_button">
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
