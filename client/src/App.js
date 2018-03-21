import React, { Component } from 'react';
import './App.css';


import Landing from './Components/Landing/Landing'
import ProfilePage from './Components/ProfilePage/ProfilePage'
import Groups from './Components/Groups/Groups'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <ProfilePage/>
        <Groups />
      </div>
    );
  }
}

export default App;
