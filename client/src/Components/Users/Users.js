import React from "react";
import { Route,  Redirect } from "react-router-dom";
import axios from "axios";
import { ModalContainer, ModalRoute } from 'react-router-modal';
import ModalRegister from "../Register/Register";
import ModalLogin from "../Login/Login";
import Landing from '../Landing/Landing';
import ProfilePage from "../ProfilePage/ProfilePage";


import { Grid, Row, Col, Image} from 'react-bootstrap';

var randomImages = [
    require('../images/groupImages/architecture-boat-buildings-208701.jpg'),
    require('../images/groupImages/backlit-clouds-dusk-853168.jpg'),
    require('../images/groupImages/bay-beach-beautiful-531602.jpg'),
    require('../images/groupImages/beach-cave-cavo-greco-371588.jpg'),
    require('../images/groupImages/celebration-coloured-crowd-889545.jpg'),
    require('../images/groupImages/book-chair-chat-711009.jpg'),
];


class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      id: null

    };
  }

  setUser = user => {
    console.log("setUser: ", user)
    this.setState({ user: user});
  };

  renderLogin = () => {

    return (
      <Grid fluid="true">
          <Row className="show-grid">
              <Col xs={6} md={12}>
              <img  src={randomImages[Math.floor(Math.random()*randomImages.length)]}/>
                    <ModalLogin setUser={this.setUser} />
              </Col>
          </Row>
    </Grid>


    );

  };

  renderProfilePage= props => {
    const { user, id } = this.state;

    if (!user) {
      return null;

}
      return <ProfilePage userInfo={user} />;
  };




  render() {
    console.log("users: ", this.state);
    const { user, id } = this.state;
    return (
      <div>
      <ModalContainer  backdropClassName='react-router-modal__backdrop' />
        <ModalRoute path={`/users/login`} component={this.renderLogin} />
        <ModalRoute path={`/users/register`} component={ModalRegister} />
        <Route path="/users/profile" render={this.renderProfilePage} />

      </div>
    );
  }
}

export default Users;
