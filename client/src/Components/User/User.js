import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import ModalRegister from "../Register/Register";
import ModalLogin from "../Login/Login";
import ProfilePage from "../ProfilePage/ProfilePage";

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
    const { user, scores } = this.state;
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
      <Route path="/users/register" component={ModalRegister} />
       <Route path="/users/login" render={this.renderLogin} />
        <Route path="/users/profile" render={this.renderProfilePage} />
      </div>
    );
  }
}

export default Users;
