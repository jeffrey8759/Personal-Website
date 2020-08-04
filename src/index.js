import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './circle-cropped.png';
class HiddenInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }
  render() {
    let button;
    if (this.state.hidden) {

    } else {
      button = <p> This application is still a work in progress </p>;
    };
    return (
      <div class="hiddenInfo">
        <h2>Hidden Information</h2>
        <button class="hideButton" onClick={() => this.setState({
          hidden: !this.state.hidden,
        })}>
          show/hide
        </button>
        {button}
      </div>
    )
  }
}

class MainPage extends 	React.Component {
  render() {
    return (
      <div class="main">
        <div class="navbar">
          <a href="#">About</a>
          <div class="dropdown">
            <button class="dropbtn">
              Files
            </button>
            <div class="dropdown-content">
              <a href="#">Resume</a>
              <a href="#">Transcript</a>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/jeffrey-cheng23/">LinkedIn</a>
          <a href="https://github.com/jeffrey8759">GitHub</a>
          <a href="#">Contact</a>
        </div>
        <div class='mainFrame'> 
          <h1> I'm Jeffrey. </h1>
          <h2> a front-end developer. </h2>
          <img id='profile_pic' src={logo}/>
          <p id='intro-p'> 
              I am a recent graduate from the University of Washington with a Bachelor degree in Computer Science.
          </p>
        </div>
      </div>
    )
	}
}
// ========================================

ReactDOM.render(
	<MainPage />,
	document.getElementById('root')
);
