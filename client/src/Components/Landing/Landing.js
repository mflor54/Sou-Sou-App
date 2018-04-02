import React, { Component } from 'react';
import ModalLogin from '../Login/Login';
import ModalRegister from '../Register/Register';
import Groups from '../Groups/Groups';
import { Grid, Row, Col,Jumbotron, Image} from 'react-bootstrap';
import { Button} from 'mdbreact';
import './Landing.css';
import { Link, Route, Switch } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import Users from '../Users/Users';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HelpList from'../Help/Help';
import Video from '../Video/Video';

var logo = require('../images/Logo/OwoLogoNWGroup3LG.png');
var thumb= require("../images/Logo/OwoLogoNWGroup3Sm.png");
var brain = require('../images/icons/brain.png')
var mm = require('../images/icons/mm.png')
var saving = require('../images/icons/saving.png')
var connect = require('../images/icons/connect3.png')

var arrow = require('../images/icons/arrow1.png')
// var bgFixed = require('../images/groupImages/audience-band-celebration-196652.jpg');


//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';




class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      showReg:false,
      showHelp: false,
     expanded: null,
      show:true
    }
  }

  handleBackClick=()=> {
  this.setState({ show: false });
}

handleChange = panel => (event, expanded) => {
  this.setState({
    expanded: expanded ? panel : false,
  });
};

   renderLandingPage=()=>{
     const { classes } = this.props;
     const { expanded } = this.state;
    let loginClose = () => this.setState({ showLogin: false });
    let regClose = () => this.setState({ showReg: false });
    let lgClose = () => this.setState({ lgShow: false });

   return(

     <div className="Landing">

          <Grid fluid="gridlayout">
            <Row className="show-grid">
              <Col xs={6} md={12} id="jumbotop">
                <Jumbotron bsClass="jumbotron">
                  <Row>
                      <Header />
                      <Col xs={1} md={2} className="login_button">
                        <ModalLogin show={this.props.showLogin} onBackdropClick={this.handleBackClick}  />
                      </Col>
                   </Row>

                <Row className="show-grid">
                  <Col xs={6} lg={12}>
                    <img  src={logo}  id='logosize'/>
                  </Col>
                </Row>


                      <h3 id="title">
                        OWO means Money in Yoruba.
                      </h3>
                      <Row className="show-grid">
                        <Col xs={6} lg={12}>
                        <p id="mission">
                          We envision a world where everyone has the opportunity to save OWO (money) with their family,
                          friends and neighbors while also emphasizing the importance of financial security. Through a social
                          platform OWO members can support and motivate each other to reach their savings goal. By providing
                          resources we want to improve the financial knowledge of our OWO members that will benefit in future
                          progression/succession of our community and economy.
                        </p>
                      </Col>
                    </Row>

                      <div className="modButtons">

                         <ModalRegister show={this.state.showReg} onBackdropClick={this.handleBackClick}/>
                         <ModalContainer  />
                      </div>

                      <Row className="show-grid">
                        <Col xs={8} lg={12}>
                        <a href="#HowTo">
                          <img  src={arrow} className="arrow"/></a>
                        </Col>
                      </Row>
                   </Jumbotron>
                 </Col>
               </Row>

        <Row className="cd-scrolling-bg cd-scrolling-bg--color-3" id="HowTo">
              <Row center="md" >
                  <Col xs={6} md={4} className="cd-scrolling-bg__content row_title">
                      <h1>Why OWO ?</h1>
                  </Col>
              </Row>
            <Row center="md">
              <Col xs={6} md={2} className="cd-scrolling-bg__content row_title">
              <img src={connect} className="icons"/>
                  <h2>Connect</h2>
                 <p>Being in contact with family, friends and neighbors can help you be more effective than saving alone.</p>
              </Col>
                  <Col xs={6} md={2} className="cd-scrolling-bg__content row_title">
                  <img src={saving}  className="icons" />
                  <h2>Save</h2>

                      <p>You are in control. You are able to choose when you want your payout and how much you would like to save.</p>
                   </Col>
                  <Col xs={6} md={2} className="cd-scrolling-bg__content row_title">
                  <img src={mm}   className="icons"/>
                  <h2>Knowledge</h2>

                      <p>Understanding the importance of finacial discipline will reesonate throughout your life.</p>
                  </Col>

                   <Col xs={6} md={2} className="cd-scrolling-bg__content row_title">
                          <img src={brain}   className="icons"/>
                         <h2>Security</h2>
                      <p>Not to worry, OWO will step in and contibute if a another memeber stops thier payments.</p>
                   </Col>
              </Row>
          </Row>
          <Row className="cd-fixed-bg cd-fixed-bg--1">
              <Col xs={12} lg={12} >
                  <img className="cd-fixed-bg__content"/>
                  <h2>Entertainment</h2>
              </Col>
          </Row>

    <Row className="cd-scrolling-bg cd-scrolling-bg--color-1">
        <Row>
           <Col xs={12} lg={12} className="cd-scrolling-bg__content row_title row_title">
                <h1>How to OWO</h1>
           </Col>
        </Row>
        <Row>
           <Col xs={6} md={3} className="cd-scrolling-bg__content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

            </Col>
          <Col xs={6} md={3} className="cd-scrolling-bg__content">
            <Video />
          </Col>
        </Row>


          <Row>
              <Col xs={12} lg={12} className="cd-scrolling-bg__content row_title" >
                  <ModalRegister show={this.state.showReg} onBackdropClick={this.handleBackClick}/>

                 </Col>
             </Row>
          </Row>

          <Row className="cd-fixed-bg cd-fixed-bg--2">
            <Col xs={12} lg={12} >
            <img className="cd-fixed-bg__content"/>
              <h2>Travel</h2>
            </Col>
          </Row>

            <Row className="cd-scrolling-bg cd-scrolling-bg--color-2">
                  <Row>
                      <Col xs={12} lg={12} className="cd-scrolling-bg__content row_title" >
                          <h1>The OWO Crew</h1>
                          <h2 id="content">
                             Developing a digital world of finacial accountablity to connect nieghbors
                             and allow oppertunities beyond the scope of instutionalized economy
                          </h2>
                      </Col>
                  </Row>
                  <Row>
                     <Col xs={6} md={3} className="cd-scrolling-bg__content">
                     <Image src={thumb} rounded />
                        <h3>Rachel</h3>
                         <p>Team Lead</p>
                      </Col>
                      <Col xs={6} md={3} className="cd-scrolling-bg__content">
                      <Image src={thumb} rounded />
                          <h3>Crystal</h3>
                          <p>Design Lead</p>
                      </Col>
                      <Col xs={6} md={3} className="cd-scrolling-bg__content">
                      <Image src={thumb} rounded />
                        <h3>Mike</h3>
                         <p>Technical Lead</p>
                      </Col>
                      <Col xs={6} md={3} className="cd-scrolling-bg__content">
                          <Image src={thumb} rounded />
                          <h3>Krystal</h3>
                         <p>Demo Lead</p>
                      </Col>
                   </Row>
              </Row>
                <div>


          <Footer />
          </div>
     </Grid>
   </div>
     )
  }

  render(){
    let loginClose = () => this.setState({ showLogin: false });
    let regClose = () => this.setState({ showReg: false });
  return(

  <div>
    <Switch>
      <Route exact path="/" component={this.renderLandingPage} />
      <Route path="/users" component={Users} />
      <Route path="/groups" component={Groups} />
    </Switch>
  </div>
    )
  }
}



export default Landing;
