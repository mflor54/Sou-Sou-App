import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import GridList from 'material-ui/GridList';

import Nav from '../Nav/Nav';
import Groups from '../Groups/Groups';
import Landing from '../Landing/Landing';
import FooterUser from '../Footer/Footer';
import GroupProfile from '../GroupProfile/GroupProfile';
import ProfilePic from './ProfilePic';
import { Button} from 'mdbreact';
import './ProfilePage.css'
var logo = require('../images/Logo/OwoLogoNWGroup3Sm.png');
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






renderProfilePage=()=>{

  console.log(this.state.userProfile);
  console.log(this.props.userInfo);
  const {userProfile} = this.state
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
  )

  return(
      <div xs={12} md={12}>

                  <Grid fluid="gridlayout">

                      <Row className="show-grid">
                          <Col xs={6} md={12} id="nav">
                              <Nav />
                          </Col>
                      </Row>

                  <div>
                      <Row className="userInfo">
                          <Col xs={6} md={4}>
                                <img alt=''  className="profilePic" />
                          </Col>
                          <Col xs={6} md={8} id="sec2">
                                <p>Welcome {userProfile.username}</p>
                                <p>Rating: Gold</p>
                                <p>Memeber Since: {cdate}</p>
                                {stripeButton}
                          </Col>
                      </Row>
                </div>

                <section className="container">

                    <Row className="show-grid2">
                          <Col xs={12} lg={12} className="title" >
                            <h2>My Groups</h2>
                          </Col>
                    </Row>

                <div className='root'>
                      <GridList
                           className='gridList'>
                                  {randomImages.map((tile) => (
                                      <div key={tile}>
                                          <img className="tiles" src={tile} />
                                      </div>
                                      ))}
                       </GridList>
                  </div>

                    <Row className="show-grid2">
                          <Col xs={12} lg={12} className="title">
                                <h2>My Groups</h2>
                          </Col>
                    </Row>

                  <div className='root'>
                          <GridList
                               cellHeight={180}
                                  className='gridList'>
                                      {randomImages.map((tile) => (
                                          <div key={tile}>
                                                <img className="tiles" src={tile} />
                                          </div>
                                        ))}
                          </GridList>
                    </div>

                </section>

                    <div>
                        <FooterUser className="footer"/>
                    </div>
                </Grid>
          </div>
    )
  }


render() {
  return(
      <div>
        <Route path="/groups/:groupID" component={GroupProfile}/>
          <Route path="/users/profile" component={this.renderProfilePage} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Landing} />
      </div>
    )
  }
}

export default ProfilePage;
