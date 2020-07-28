import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
          <h1> Jeffrey Cheng </h1>
          <img id='profile_pic' src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/106243546_3354141631302843_4473972968588926169_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=nRIdlhMQhZAAX-jNyOo&_nc_ht=scontent-sea1-1.xx&oh=2fe648b2eb90bdd87b04f241654e5ada&oe=5F434002'/>
          <HiddenInfo />
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
