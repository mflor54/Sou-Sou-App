import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';


import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Columns from 'grommet/components/Columns';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';
// import Anch from 'grommet/components/Anch';
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


import Navagation from '../Nav/Nav';
import Groups from '../Groups/Groups';
import Landing from '../Landing/Landing';
import FooterUser from '../Footer/Footer';
import CreateGroup from '../CreateGroup/CreateGroup';

import GroupProfile from '../GroupProfile/GroupProfile';
import ProfilePic from './ProfilePic';
import { Button} from 'mdbreact';
import axios from 'axios';
import './ProfilePage.css'
var logo = require('../images/Logo/OwoLogoNWGroup3Sm.png');
var owl = require('../images/icons/owl.png');
var Mike= require("../images/crew/mike.jpg");

var randomImages = [
    require('../images/groupImages/architecture-boat-buildings-208701.jpg'),
    require('../images/groupImages/backlit-clouds-dusk-853168.jpg'),
    require('../images/groupImages/bay-beach-beautiful-531602.jpg'),
    require('../images/groupImages/beach-cave-cavo-greco-371588.jpg'),
    require('../images/groupImages/celebration-coloured-crowd-889545.jpg'),
    require('../images/groupImages/book-chair-chat-711009.jpg'),
];


class ProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
       showUpload: false,
       userProfile: props.userInfo,
       userGroup:[],
       getgroups:[]

    }
  }

  //
  // handleFile = (files) => {
  //         console.log(files.base64)
  //         this.setState({
  //             showUpload: true,
  //             user: {
  //                 ...this.state.userProfile,
  //                 profile_pic: files.base64
  //             }
  //         })
  //     }
  //     handleUploadFile = (files) => {
  //         ProfileActions.uploadProfilePic({
  //             image_: this.state.userProfile.profile_pic
  //         }, ()=>{
  //             this.setState({
  //                 showUpload: false,
  //             })
  //         }, ()=>{
  //             alert('upload failed')
  //         })
  //     }

    getUserInfo = () => {

      const {userProfile} =this.state
      let userID = this.state.userProfile.id
      fetch(`/users/profile/${userID}`)
      .then(res => res.json())
      .then(data => {
        console.log("DATA stufff PP=====>", data.data);
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
      this.getUserInfo();
      this.getGroups()
    }




renderProfilePage=()=>{
  console.log(this.state.userGroup);
  let randomImage =<Image src={randomImages[Math.floor(Math.random()*randomImages.length)]}
     />

  console.log(this.state.userProfile);
  console.log(this.props.userInfo.id);

  const {userProfile, userGroup,getgroups} = this.state

  console.log(userGroup);
  var cts = this.state.userProfile.member_date,
     cdate = (new Date(cts)).toString();
  const stripeUser = this.state.userProfile.stripe_id
  const stripeButton = !stripeUser ? (
    <a href="http://localhost:3100/users/stripe/connect">
          <Button className="btn-custom pp" color="secondary-color-dark">
                Complete your account STRIPE
          </Button>
    </a>
  ):(
    <p>You have saved: {this.state.userProfile.amount} </p>
  );



  return(

    <Box direction='row'
          className='Profile'
          justify='center'
          align='stretch'
          wrap={true}
          reverse={false}
          pad='medium'>

          <Box direction='Row'
            justify='center'
            align='center'
            wrap={true}
            pad='small'
            colorIndex='light-2'
          
        >
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
                      pad='small'>
                      <Box colorIndex='light-2'
                            justify='center'
                            fixed={true}
                            align='center'
                            pad='small'>
                        <Headline>Hey {userProfile.username}</Headline>
                        </Box>
                        <Columns size='small'
                              masonry={true}
                              maxCount={1}>
                              <Box align='center'
                                  pad='small'

                                  >
                                    <Image alt='' className='profilePic' src={Mike} />
                              </Box>
                              <Paragraph
                                  size='small'
                                  strong={false}>

                                   <strong>  Rating: </strong> Gold<br /><br />

                                 <strong>  Memeber Since: </strong> <Timestamp fields={['month', 'year']}
                                      value={userProfile.member_date} /><br /><br />

                                     <strong>Next Pay Out: </strong><br/>
                                     Get Car Fund: <br />
                                     $5,000 May 4, 2108<br /><br />

                                     <strong>Due Dates:</strong><br />
                                    Get Car Fund: <br />
                                  $1,250 due by April 20, 2018<br />
                                    <a href="http://localhost:3100/users/stripe/connect">Make a Payment</a><br />
                                    <br />
                                    <strong>Total Svaings:</strong> $2,834
                              </Paragraph>
                                {stripeButton}
                        </Columns>
              </Box>


        </Box>

    <Box direction='Row'
          justify='center'
          align='center'
          wrap={true}
          pad='small'
          id='right'
          colorIndex='light-2'
      >


                  <Box colorIndex='light-2'
                        justify='center'
                        fixed={true}
                        align='center'
                        pad='small'>
                        <Box colorIndex='light-2'
                              justify='center'
                              fixed={true}
                              align='center'
                              pad='small'>
                        <Headline>Dashboard</Headline>
                              </Box>
                              <Box colorIndex='light-2'
                                    justify='end'
                                    fixed={true}
                                    align='end'
                                    pad='small'
                                    >
                                          <Link id='addButton' to='/groups/new'>
                                          <AddCircleIcon />
                                          </Link>
                                    </Box>

                                    <h2>My Groups</h2>
                                <Columns size='medium'
                                      masonry={true}
                                      maxCount={3}>

                                      {!userGroup ? (
                                        <Paragraph>No Groups Yet... Join a Group to Start Saving!</Paragraph>
                                        ):(

                                          <Box align='center'

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
                                </Columns>
                        </Box>
                      <Box
                            justify='center'
                            align='center'
                            pad='small'>
                                  <h2>Featured</h2>
                                  <Columns size='small'
                                        masonry={false}
                                        maxCount={3}>




                                                 <Box align='center'

                                                       margin='small'
                                                       colorIndex='light-2'>

                                                       {getgroups.map((group) => (
                                                         <Link to={`/groups/${group.group_name}`} groupinfo={group.creator}>
                                                         {randomImages.map((pics) => (
                                                           <Card id='thumbnail' thumbnail={pics}
                                                            heading={group.group_name.toUpperCase()}
                                                            label={`Group Creator: ${group.username}`}

                                                            />
                                                         ))}


                                                     </Link>

                                                    ))}
                                                 </Box>

                                  </Columns>
                        </Box>
                  </Box>
                  </Split>
              </Box>
    </Box>


    )
  }

render() {
    console.log(this.state.userGroup);
  return(

      <div>
      <Navagation />
      <Switch>

        <Route path="/groups/new" component={CreateGroup} />
          <Route path="/groups/:groupID" component={GroupProfile}/>
          <Route path="/users/profile/:userID" component={this.renderProfilePage} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Landing} />
          </Switch>

          <FooterUser />
      </div>
    )
  }
}

export default ProfilePage;