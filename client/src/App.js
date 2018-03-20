import React, { Component } from 'react';
import './App.css';


import Landing from './Components/Landing/Landing'
import ProfilePage from './Components/ProfilePage/ProfilePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <ProfilePage/>
      </div>
    );
  }
}

export default App;
