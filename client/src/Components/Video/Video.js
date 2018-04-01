import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import {Row, Col, Jumbotron, Modal} from 'react-bootstrap';
import './Video.css';
var howToVid = require('./OwoVid.mp4');



class Video extends Component{

render() {


  return (

    <section>

      <video loop preload autoplay>
        <source id="source_polar_mp4" src={howToVid} type="video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"/>
      </video>
    </section>
  );
}


}

export default Video;
