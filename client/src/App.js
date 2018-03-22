import React, { Component } from 'react';
import './App.css';


import Landing from './Components/Landing/Landing';
import GroupProfile from './Components/GroupProfile/GroupProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Landing/> */}
        <GroupProfile />
      </div>
      
    )
  }
}

export default App;
