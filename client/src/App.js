import React, { Component } from 'react';
import 'grommet/grommet.min.css';
import '../node_modules/grommet-css';
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
