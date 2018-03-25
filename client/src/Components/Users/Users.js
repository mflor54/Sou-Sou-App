import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { ModalContainer, ModalRoute } from 'react-router-modal';
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
    const { user, id } = this.state;
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
<ModalContainer />
      <ModalRoute path={`/users/login`} component={this.renderLogin} />
      <ModalRoute path={`/users/register`} component={ModalRegister} />
      <Route path="/users/profile" render={this.renderProfilePage} />

      </div>
    );
  }
}

export default Users;
