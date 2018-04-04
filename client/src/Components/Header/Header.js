import React, { Component } from 'react';
import {Row, Col, Jumbotron} from 'react-bootstrap';
import './Header.css';
var insta = require('../images/icons/instagram-headmain.png');
var twitter = require('../images/icons/twitter-headmain.png');
var github = require('../images/icons/githubheadmain.png');



const Header= ()=>{
  return(

<div>
               <a target="blank" href="https://twitter.com/TheOfficial_OWO"><img src={twitter} /></a>
               {"  "}
               {"  "}
                    <a className="Insta" target="blank" href="https://www.instagram.com/the_official_owo/"><img src={insta} /></a>
                    {"  "}
                    {"  "}
                         <a className="Github" target="blank" href="https://github.com/mflor54/Sou-Sou-App"><img src={github} /></a>
             </div>



  )
}

export default Header;
