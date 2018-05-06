import React, {Component} from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';


import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import EmptyCircleIcon from 'grommet/components/icons/base/EmptyCircle';
import ContactIcon from 'grommet/components/icons/base/Contact';
import CircleQuestionIcon from 'grommet/components/icons/base/CircleQuestion';
import LogoutIcon from 'grommet/components/icons/base/Logout';
import GroupIcon from 'grommet/components/icons/base/Group';
import CloseIcon from 'grommet/components/icons/base/Close';

// import Anch from 'grommet/components/Anch';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Nav from '../Nav/Nav';
import HelpList from'../Help/Help';

import './Nav.css';

var logo = require('../images/Logo/OwoLogoNWGroupTurq.png');
var Jason= require("../images/crew/jason.jpg");


const Navagation =()=>{
  return(
    <Header splash={false}
          size='small'
          fixed={false}
          pad='small'
          float={false}>
          <Button icon={<Image id='jayImage' src={Jason}
                  full={false}
                  size='thumb' />}
                  responsive={true}
                          label='JaySavesDoe'
                          id="profileButton"
                          primary={false}
                          secondary={false}
                          accent={false}
                          critical={false}
                          plain={false}
                          path='/profile/12' />
          <Box flex={true}
                justify='end'
                direction='row'
                responsive={false}>
                      <img  src={logo}  className='logosize'/>
            </Box>
          <Box flex={true}
                justify='end'
                direction='row'
                responsive={false}>
                      <Menu
                      size="large"
                      icon={<EmptyCircleIcon colorIndex={'brand'} size='medium' />}
                            dropAlign={{"bottom": "right"}}>

                                <Anchor href='/groups'
                                      className='active'>
                                    <GroupIcon size='xsmall'  colorIndex={'brand'}/>  Group Dashboard
                                </Anchor>

                                <Anchor href='/help'>
                                      <CircleQuestionIcon size='xsmall'  colorIndex={'brand'}/> Support
                                </Anchor>
                                <Anchor href='/Contact'>
                                    <ContactIcon size='xsmall' colorIndex={'brand'} /> Contact Us

                                </Anchor>
                                <Anchor href='/'>
                                      <LogoutIcon size='xsmall' colorIndex={'brand'} /> Logout
                                </Anchor>
                      </Menu>
            </Box>
    </Header>


  )
}

export default Navagation;
