import React, {Component} from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Box from 'grommet/components/Box';

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


const Navagation =()=>{
  return(
    <Header splash={false}
          size='small'
          fixed={false}
          pad='medium'
          float={false}>
                <Title>
                      Sample Title

                </Title>
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
