import React, { Component } from 'react';
import Jumbotronn from './HomeComponents/Jumbotronn'
import About from './HomeComponents/About'
import VideoContainer from './HomeComponents/VideoContainer'
import Commands from './HomeComponents/Commands'
import Footer from './HomeComponents/Footer'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotronn/>
        <About/>
        <VideoContainer/>
        <Commands/>
        <Footer/>
      </div>
    );
  }
}