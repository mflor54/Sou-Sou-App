import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './Video.css';
var howToVid = require('./owo_movie.mov')


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
