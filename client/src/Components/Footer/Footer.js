import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Button} from 'mdbreact';
import HelpList from'../Help/Help';
import './Footer.css';

var insta = require('../images/icons/instagram.png');
var twitter = require('../images/icons/twitter.png');
var github = require('../images/icons/github.png');



class Footer extends Component{
render(){

  return(
    <div>

    <Row className="foot">
       <Col sm={6} md={6}>


      <HelpList  />
       </Col>
       <Col sm={6} md={6}>
         <a target="blank" href="https://twitter.com/TheOfficial_OWO"><img src={twitter} /></a>
         {"  "}
         {"  "}
              <a target="blank" href="https://www.instagram.com/the_official_owo/"><img src={insta} /></a>
              {"  "}
              {"  "}
                   <a target="blank" href="https://github.com/mflor54/Sou-Sou-App"><img src={github} /></a>
         </Col>

       </Row>
</div>

  )
}
}



export default Footer;
