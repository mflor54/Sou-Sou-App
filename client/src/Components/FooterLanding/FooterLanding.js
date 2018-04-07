import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Button} from 'mdbreact';
import HelpList from'../Help/Help';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';


import './FooterLanding.css';

var insta = require('../images/icons/instagram.png');
var twitter = require('../images/icons/twitter.png');
var github = require('../images/icons/github.png');



class FooterLanding extends Component{
render(){

  return(


       <Footer justify='between'
         size='medium'
         className="footland">
         <Title>

         </Title>
         <Box direction='row'
           align='center'
           className="social"
           pad={{"between": "medium"}}>
           <a target="blank" href="https://twitter.com/TheOfficial_OWO"><img src={twitter} /></a>
           {"  "}
           {"  "}
                <a target="blank" href="https://www.instagram.com/the_official_owo/"><img src={insta} /></a>
                {"  "}
                {"  "}
                     <Anchor target="blank" href="https://github.com/mflor54/Sou-Sou-App"><img src={github} /></Anchor>

           <Paragraph margin='none'>
             © 2016 OWO
           </Paragraph>
           <Menu direction='row'
             size='small'
             
             dropAlign={{"right": "right"}}>
             <Anchor href='#'>
                   <HelpList  />
             </Anchor>
             <Anchor href='#'>
               Contact
             </Anchor>
             <Anchor href='#'>
               About
             </Anchor>
           </Menu>
         </Box>
       </Footer>



  )
}
}



export default FooterLanding;
