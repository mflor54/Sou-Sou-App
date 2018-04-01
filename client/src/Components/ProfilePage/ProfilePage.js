import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';

import Nav from '../Nav/Nav';
import Groups from '../Groups/Groups';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ProfilePic from './ProfilePic';
import { Button} from 'mdbreact';
import './ProfilePage.css'
var logo = require('../images/Logo/OwoLogoNWGroup3Sm.png');


class ProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.state = {
       showUpload: false,
      userProfile: props.userInfo,

    }
    this.renderProfilePage = this.renderProfilePage.bind(this)
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






renderProfilePage=({props})=>{

    console.log(this.state.userProfile);
  console.log(this.props.userInfo);

  const {userProfile} = this.state
  return(

    <div className="Profile">
      <Grid fluid="gridlayout">
      <Row className="show-grid">
          <Col xs={6} md={12} id="nav">
              <Nav />
          </Col>
       </Row>

      <Row className="show-grid">
        <Col xs={6} md={4} id="sec1">
          <div className="profilePic"> Pic Here</div>

        </Col>
        <Col xs={6} md={8} id="sec2">
            <p>Welcome {userProfile.username}</p>
                <p>Rating: Gold</p>
                  <p>Memeber Since: 2017</p>
                <p>Savings to date: $3,689</p>
            </Col>
          </Row>


          <Row className="show-grid2">
            <Row>
                <Col xs={12} lg={12} className="cd-scrolling-bg__content">
                    <h2>Groups</h2>
                </Col>
            </Row>
            <Row className="show-grid2">
                <Col xs={12} lg={12} className="cd-scrolling-bg__content">
                    <h2>Your Groups</h2>
                </Col>
            </Row>
          </Row>

          <Row>
          <Footer />
          </Row>
        </Grid>

      </div>
    )
  }

render(){

    return(

      <div>

          <Route path="/users/profile" component={this.renderProfilePage} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Landing} />
      </div>
    )
  }
}

export default ProfilePage;
