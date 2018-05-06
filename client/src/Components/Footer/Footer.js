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
import Image from 'grommet/components/Image';

import Menu from 'grommet/components/Menu';
import './Footer.css';

var insta = require('../images/icons/instagram-64.png');
var twitter = require('../images/icons/twitter-64.png');
var github = require('../images/icons/github-64.png');
var logo = require('../images/Logo/OwoLogoNWGroupLBlue.png')


class FooterUser extends Component{
render(){

  return(


<Footer justify='between'
className='footer'

  size='large'>

  <Title pad='medium'>
<img src={logo} id='logoSize'/>

  </Title>
  <Paragraph margin='none'>
    © 2018 OWO Saving Socially
  </Paragraph>

  <Box direction='row'
    align='center'
    pad={{"between": "medium"}}>


    <Menu direction='row'
      size='medium'
      pad='medium'
      dropAlign={{"right": "right"}}>
      <Paragraph margin='none'>
        Follow Us
      </Paragraph>
      <Anchor target="blank" href="https://twitter.com/TheOfficial_OWO">
      <img src={twitter} />
      </Anchor>
      <Anchor target="blank" href="https://www.instagram.com/the_official_owo/">
      <img src={insta} />
      </Anchor>
      <Anchor target="blank" href="https://github.com/mflor54/Sou-Sou-App">
      <img src={github} />
      </Anchor>

    </Menu>
    </Box>
  <Box direction='row'
    align='center'
    pad={{"between": "medium"}}>



    <Menu direction='row'
      size='large'
      pad='medium'
      dropAlign={{"right": "right"}}>
      <Anchor href='#'>
        <HelpList/>
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



export default FooterUser;
