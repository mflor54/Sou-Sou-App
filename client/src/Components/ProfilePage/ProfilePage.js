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
import './ProfilePage.css';

var logo = require('../images/Logo/OwoLogoNWGroup3Sm.png');


const avatarStyle = {
  height: '50px',
  width: '50px',
  marginRight: '5px'
}



class ProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.state = {
       showUpload: false,
      userProfile: props.userInfo,
      groups:"",
      userGroup:""

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


  getMyGroups = () => {
    fetch("/groups")
    .then(res => res.json())
    .then(groups => {
      console.log('Show mw all groups:',groups)
  
      let data = groups.data
      this.setState({
        groups: data
      });
    });

  
    /////if the person exsit in the group then filter them and retun group they belong to

  }
  componentDidMount(){
    this.getMyGroups();
  }


showMyGroup(group_name){
  let owlstr = [];
  for(var i = 0; i < group_name; i++){

    owlstr.push("https://image.flaticon.com/icons/svg/12/12324.svg");

  }
  return owlstr.map((owl)=> <img src={owl} style={avatarStyle} alt="username"/>);
}





renderProfilePage=({props})=>{

    console.log(this.state.userProfile);
  console.log(this.props.userInfo);
  let groupsjsx;

  if (this.state.groups) {
    groupsjsx = this.state.groups.map((group) => {
      return(<div> {group.group_name} </div>)
    })
  }


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
                <p>Start saving now click <a href="http://localhost:3100/users/stripe/connect">STRIPE</a></p>
            </Col>
          </Row>


        <Row className="show-grid2">
  
          <Row className="show-grid2">
              <Col xs={12} lg={12} className="cd-scrolling-bg__content">
                    <h2>My Groups</h2>
                    { this.state.groups ? <div>{groupsjsx}</div> :
                    <p>You are not in a group, Create one now!</p> }
              </Col>
          </Row>
        <Row>
            <Col xs={12} lg={12} className="cd-scrolling-bg__content">
                <h2>Suggested Groups</h2>
                  Join a group today
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

          <Route path="/users/profile" render={this.renderProfilePage} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Landing} />
      </div>
    )
  }
}

export default (ProfilePage);
