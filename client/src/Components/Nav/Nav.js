import React, {Component} from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';


import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';
// import Anch from 'grommet/components/Anch';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Nav from '../Nav/Nav';
import HelpList from'../Help/Help';

import './Nav.css';

var logo = require('../images/Logo/OwoLogoNWGroupTurq.png');
var Mike= require("../images/crew/mike.jpg");


const Navagation =()=>{
  return(
    <Header splash={false}
          size='small'
          fixed={false}
          pad='medium'
          float={false}>
          <Button icon={<Image id='jayImage' src={Mike}
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
                          path='/groups/Spending%20Money' />
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
                      <Menu icon={<Actions />}
                            dropAlign={{"right": "right"}}>
                                <Anchor href='/groups'
                                      className='active'>
                                      Group Dashboard
                                </Anchor>
                                <Anchor href='/'>
                                      Logout
                                </Anchor>
                                <Anchor >
                                      <HelpList  />
                                </Anchor>
                                <Anchor href='/Contact'>
                                      Contact Us

                                </Anchor>
                      </Menu>
            </Box>
    </Header>


  )
}

export default Navagation;
