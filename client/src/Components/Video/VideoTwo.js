import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import {Row, Col, Jumbotron, Modal} from 'react-bootstrap';
var howToVid = require('./OwoVid.mp4')


class Video extends Component{
  constructor(){
    super()
    this.state={
      visable:false
    }
  }


  onEnterViewport() {
  this.setState({
    visible: true,
  });
}

onExitViewport() {
  this.setState({
    visible: false,
  });
}

render() {
  const { visible } = this.state;

  return (
    <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
    <video className='videoTag' autoPlay loop muted>
        <source src={howToVid} type='video/mp4' />
    </video>
    </ScrollTrigger>
  );
}


}

export default Video;
