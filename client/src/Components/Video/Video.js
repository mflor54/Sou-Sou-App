import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './Video.css';
var howToVid = require('./OWOcycle.mov')


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
    <video className='videoTag' autoPlay loop muted>
        <source src={howToVid} type='video/mp4' />
    </video>
  );
}


}

export default Video;
