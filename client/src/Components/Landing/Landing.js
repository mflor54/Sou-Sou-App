import React, { Component } from 'react';
import ModalLogin from '../Login/Login';
import ModalRegister from '../Register/Register';

import { Grid, Row, Col,Jumbotron} from 'react-bootstrap';
import { Button} from 'mdbreact';
import './Landing.css';
import { Link, Route, Switch } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import Users from '../Users/Users'
var imageName = require('../images/OwoLogoNWGroup3MD.png')
//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';




class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      showReg:false,
      show:true
    }
  }

  handleBackClick=()=> {
  this.setState({ show: false });
}



   renderLandingPage=()=>{
    let loginClose = () => this.setState({ showLogin: false });
    let regClose = () => this.setState({ showReg: false });
   return(

   <div className="Landing">
      <div>
        </div>
          <Grid fluid="gridlayout">
            <Row className="show-grid">
              <Col xs={12} lg={12} id="jumbotop">
                <Jumbotron bsClass="jumbotron">
                  <div>
                    <img id='logo' src={imageName} />
                  </div>
                  <p>
                    OWO is ... Information about what we do. Who we cater to and why.
                  </p>
                     <div className="modButtons">
                        <ModalLogin show={this.state.showLogin} onBackdropClick={this.handleBackClick}  />
                        <ModalRegister show={this.state.showReg} onBackdropClick={this.handleBackClick}/>
                        <ModalContainer />
                     </div>
                   </Jumbotron>
                 </Col>
               </Row>
             <Row className="show-grid">
               <Col xs={12} lg={12} id="row1">
                 <h2>Why OWO ?</h2>
               </Col>
             </Row>
           <Row className="show-grid2">
             <Col xs={6} md={4} id="sec1">
               <p>Some images and text about saving  with OwO</p>
              </Col>
             <Col xs={6} md={4} id="sec1">
               <p>Some images and text about saving  with OwO</p>
             </Col>
              <Col xs={6} md={4} id="sec1">
                <p>Some images and text about saving  with OwO</p>
              </Col>
            </Row>
          <Row className="cd-scrolling-bg cd-scrolling-bg--color-1">
             <Col xs={12} lg={12} className="cd-scrolling-bg__content">
               <h2>Why OWO ?</h2>
             </Col>
          </Row>
           <div className="cd-fixed-bg cd-fixed-bg--1">
             <div className="cd-fixed-bg__content">
               <h2>The Future</h2>
             </div>
           </div>
           <Row className="cd-scrolling-bg--color-2.5">
             <Col xs={12} lg={12} >
               <h2>Meet the team</h2>
             </Col>
           </Row>
             <Row className="cd-scrolling-bg cd-scrolling-bg--color-2">
               <Col xs={6} md={3} className="cd-scrolling-bg__content">
                 <h3>Rachel</h3>
                 <p>Team Lead</p>
               </Col>
               <Col xs={6} md={3} className="cd-scrolling-bg__content">
                  <h3>Crystal</h3>
                  <p>Design Lead</p>
               </Col>
               <Col xs={6} md={3} className="cd-scrolling-bg__content">
               <h3>Mike</h3>
               <p>Technical Lead</p>
               </Col>
               <Col xs={6} md={3} className="cd-scrolling-bg__content">
               <h3>Krystal</h3>
               <p>Demo Lead</p>
               </Col>
             </Row>


       <Row className="show-grid">
         <Col xs={6} xsOffset={6}>
           <code>&lt;{'full width col'} /&gt;</code>
         </Col>
       </Row>

       <Row className="show-grid">
         <Col md={6} mdPush={6}>
           <code>&lt;{'half width'} /&gt;</code>
         </Col>
         <Col md={6} mdPull={6}>
           <code>&lt;{'half width'} /&gt;</code>
         </Col>
       </Row>
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
    </Switch>
  </div>
    )
  }
}



export default Landing;
