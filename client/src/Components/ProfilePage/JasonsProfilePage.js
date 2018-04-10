import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Columns from 'grommet/components/Columns';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';
import Toast from 'grommet/components/Toast';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Sidebar from 'grommet/components/Sidebar';
import Footer from 'grommet/components/Footer';
import Image from 'grommet/components/Image';
import Timestamp from 'grommet/components/Timestamp';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
// import Button from 'grommet/components/Button';

import AddCircleIcon from 'grommet/components/icons/base/AddCircle';
import SocialStripeIcon from 'grommet/components/icons/base/SocialStripe';


import Navagation from '../Nav/Nav';
import Groups from '../Groups/Groups';
import Landing from '../Landing/Landing';
import FooterUser from '../Footer/Footer';
import ProfilePage from './ProfilePage'
import GroupProfile from '../GroupProfile/GroupProfile';
import CreateGroup from '../CreateGroup/CreateGroup';
import ProfilePic from './ProfilePic';
import { Button} from 'mdbreact';
import axios from 'axios';
import './ProfilePage.css'
var logo = require('../images/Logo/OwoLogoNWGroup3Sm.png');
var owl = require('../images/icons/owl.png');
var Jason= require("../images/crew/jason.jpg");

var randomImages = [
    require('../images/groupImages/architecture-boat-buildings-208701.jpg'),
    require('../images/groupImages/backlit-clouds-dusk-853168.jpg'),
    require('../images/groupImages/bay-beach-beautiful-531602.jpg'),
    require('../images/groupImages/beach-cave-cavo-greco-371588.jpg'),
    require('../images/groupImages/celebration-coloured-crowd-889545.jpg'),
    require('../images/groupImages/book-chair-chat-711009.jpg'),
];


class JasonsProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
       showUpload: false,
       userProfile: props.userInfo,
       userGroup:[],
       getgroups:[]

    }
  }

    getJason = () => {
      let userID = 9
      fetch(`/profile/${userID}`)
      .then(res => res.json())
      .then(data => {
        console.log("DATA stufff PP=====>", data);
        const Store = [];
          Store.push(data.data);
          console.log('Store: ',Store);
        this.setState({
          userGroup:Store
        })
      });
    }

    getGroups= () => {
      fetch(`/groups`)
      .then(res => res.json())
      .then(data => {
        console.log("DATA stufff PP=====>", data.data);
          this.setState({ getgroups: data.data})
        })
      }



    componentDidMount(){
      this.getJason();
      this.getGroups()
    }




renderJasonsProfilePage=()=>{
  console.log(this.state.userGroup);
  let randomImage =<Image src={randomImages[Math.floor(Math.random()*randomImages.length)]}
     />

  const { userGroup,getgroups} = this.state

  return(

    <Box direction='row'
          className='Profile'
          justify='center'
          align='stretch'
          wrap={true}
          reverse={false}
          pad='medium'>

          <Box direction='row'
            justify='center'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            id='outter'
          colorIndex='light-2'>
            <Toast status='ok'
              >
            OWO Status: You are a new memeber of "Car Stash"... Welcome!!!
            </Toast>

    <Split separator={false}
    showOnResponsive='both'
      >
              <Box direction='Row'
                justify='center'
                align='center'
                wrap={true}
                pad='small'
                colorIndex='light-2'
                id='left'
            >

                <Box colorIndex='light-2'
                      justify='center'
                      fixed={true}
                      align='center'
                      pad='none'>
                      <Box colorIndex='light-2'
                            justify='center'
                            fixed={true}
                            align='center'
                            pad='none'>
                        <Headline>Hey, {userGroup.username} </Headline>
                        </Box>
                        <Columns
                              align='start'
                              size='small'
                              masonry={false}
                              >
                              <Box align='center'
                                  pad='small'

                                  >

                                    <Image fit='cover' alt='' id='profilePic' src={Jason} />

                              </Box>
                              <Paragraph
                                  size='medium'
                                  strong={false}>

                                   <strong>  Rating: </strong> Gold<br /><br />
                                   <hr />

                                 <strong>  Memeber Since: </strong> <Timestamp fields={['month', 'year']}
                                      value={userGroup.member_date} /><br /><br />
<hr />
                                     <strong>Next Pay Out: </strong><br/>
                                     Get Car Fund:
                                     $5,000 May 4, 2108<br /><br />
<hr />
                                     <strong>Due Dates:</strong><br />
                                    Student Loan... Ugh: <br />
                                  $1,250 due by April 13, 2018<br />
                                    <a href="http://localhost:3100/users/stripe/connect">Make a Payment</a><br />
                                    <SocialStripeIcon />
                                    <br />
                                    <hr />
                                    <strong>Total Svaings:</strong> $2,834
                              </Paragraph>

                        </Columns>
              </Box>


        </Box>

  <Box direction='column'
              justify='end'
              align='end'
              wrap={true}
              pad='small'
              margin='none'
              id='right'
              colorIndex='light-2'>
        <Box direction='column'
              justify='center'
              align='center'
              wrap={true}
              pad='small'
              margin='none'
              colorIndex='light-2'>

                  <Headline>Dashboard</Headline>
                              <Box direction='column'
                                justify='center'
                                align='center'
                                wrap={true}
                                pad='medium'
                                margin='none'
                                id='suggested'
                                colorIndex='light-2'>

                                    <h2>My Groups</h2>


                                  {!userGroup ? (
                                    <Paragraph>No Groups Yet... Join a Group to Start Saving!</Paragraph>
                                    ):(

                                      <Box align='center'
                                            justify='center'
                                            margin='small'
                                            colorIndex='light-2'>

                                            {userGroup.map((group) => (
                                              <Link to={`/groups/${group.group_name}`} groupinfo={group.creator}>

                                                <Card id='thumbnail' thumbnail={<Image src={randomImages[Math.floor(Math.random()*randomImages.length)]}
                                                   />}
                                                 heading={group.group_name.toUpperCase()}
                                                 label={`Group Creator: ${group.username}`}

                                                 />



                                          </Link>

                                         ))}
                                      </Box>

                                      )}
                            </Box>


                        <Box direction='column'
                          justify='center'
                          align='center'
                          wrap={true}
                          pad='small'
                          margin='none'
                          id='suggested'
                          colorIndex='light-2'>

                              <h1>Suggested Groups</h1>

                              </Box>
                              <Box direction='row'
                                justify='center'
                                align='center'
                                wrap={true}
                                pad='none'
                                margin='none'
                                id='thumbnails'
                                colorIndex='light-2'>
                            {getgroups.map((group) => (
                                <Link to={`/groups/${group.group_name}`} groupinfo={group.creator}>
                                <Card

                                thumbnail={<Image id='image' src={randomImages[Math.floor(Math.random()*randomImages.length)]}
                                   />}
                                   width='small'
                                   textSize='small'
                                   contentPad='none'
                                   pad='none'
                                   id='card'
                                 heading={group.group_name.toUpperCase()}
                                 label={`Group Creator: ${group.username}`}

                                 />


                                 </Link>

                               ))}
                            </Box>
                      </Box>
                  </Box>
            </Split>
        </Box>
    </Box>


    )
  }

render() {
  return(

      <div>
<Navagation />
      <Switch>

          <Route path="/profile/9" component={this.renderJasonsProfilePage}/>
          <Route path="/groups/new" component={CreateGroup} />
          <Route path="/groups/:groupID" component={GroupProfile}/>
          <Route path="/users/profile/:userID" component={ProfilePage} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Landing} />

          </Switch>

  <FooterUser />
      </div>
    )
  }
}

export default JasonsProfilePage;
