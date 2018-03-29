import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { ModalContainer, ModalRoute } from 'react-router-modal';
import ModalRegister from "../Register/Register";
import ModalLogin from "../Login/Login";
import ProfilePage from "../ProfilePage/ProfilePage";
import Token from "../Stripe/Token";
import Done from "../Stripe/Done";

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

    return <ModalLogin setUser={this.setUser} />;

  };

  renderProfilePage= props => {
    const { user, id } = this.state;
    console.log("State.user is = " + user);
    if (!user) {
      return <div> must log in first </div>;

    }
      return <ProfilePage id={user.id} />;
  };




  render() {
    console.log("users: ", this.state);
    const { user, id } = this.state;
    return (
      <div className="App">
<ModalContainer  backdropClassName='react-router-modal__backdrop' />
      <ModalRoute path={`/users/login`} component={this.renderLogin} parentPath="/"/>
      <ModalRoute path={`/users/register`} component={ModalRegister} />
      <Route path="/users/profile" render={this.renderProfilePage} />
      <Route path="/users/stripe/token" component={Token}/>
      <Route path="/users/stripe/done" component={Done}/>
      
      </div>
    );
  }
}

export default Users;
