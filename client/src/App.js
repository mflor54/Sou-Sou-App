import React, { Component } from 'react';
import './App.css';
import { Button} from 'mdbreact';


import Landing from './Components/Landing/Landing'
import GroupProfile from './Components/GroupProfile/GroupProfile'
import CreateGroup from './Components/CreateGroup/CreateGroup'

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        {/* <CreateGroup /> */}

      </div>

    )
  }
}

export default App;
