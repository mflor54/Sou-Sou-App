import React from "react";
import { Route,  Redirect } from "react-router-dom";
import axios from "axios";
import { ModalContainer, ModalRoute } from 'react-router-modal';
import ModalRegister from "../Register/Register";
import ModalLogin from "../Login/Login";
import Landing from '../Landing/Landing';
import ProfilePage from "../ProfilePage/ProfilePage";
import Token from "../Stripe/Token";
import Done from "../Stripe/Done";
import '../Landing/Landing.css'

import { Grid, Row, Col, Image} from 'react-bootstrap';
import { Switch } from 'react-router-dom'

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
      id: null,
      loading:true

    };
  }

  setUser = user => {
    console.log("setUser: ", user)
    this.setState({ user: user});
  };

  renderLogin = () => {

    return (
      <div>
              <ModalLogin setUser={this.setUser} />

              <img className="UserBg" src={randomImages[Math.floor(Math.random()*randomImages.length)]}/>

</div>
    );

  };

  renderRegistation = () => {

    return (


                    <div>
                    <ModalRegister />

                            <img className="UserBg" src={randomImages[Math.floor(Math.random()*randomImages.length)]}/>

                </div>

    );

  };

  componentDidMount=()=>{
    fetch('/users/user')
    .then((res) => {
      if (res.ok){
        return res.json()
      } else {
        this.setState({
          loading:false
        })
      }
    })
    .then(data => {
      console.log("=====>", data);
          this.setState({
            user:data,
            loading:false

          })
    });

  }

  renderProfilePage= props => {

    const { user, id } = this.state;
    console.log("users: ", user);

    console.log("State.user is = ", user);

    if (!user) {
      return <div>Loading....</div>


}
      return <ProfilePage userInfo={user} />;

  };




  render() {

    const { user, id, loading } = this.state;
        console.log("users: ", user);


    return (
      <div>
      <Switch>
      <Route path="/users/profile/:userID" render={this.renderProfilePage} />
      <Route path="/users/stripe/token" component={Token}/>
      <Route path="/users/stripe/done" component={Done}/>
      <ModalRoute path={`/users/login`} component={this.renderLogin} parentPath="/"/>
      <ModalRoute  path={`/users/register`}  component={this.renderRegistation} />
      </Switch>
      <ModalContainer  backdropClassName='react-router-modal__backdrop' />
      </div>
    );
  }
}

export default Users;
