import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './circle-cropped.png';
import Drawer from './drawer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class MainPage extends 	React.Component {
  render() {
    return (
      <html>
      <head>
        <title>Jeffrey Cheng</title>
      </head>
        <div class="main">
          <Drawer class="drawer"/>
	  <Router>
	    <Link to="/contact">Contact</Link>
          <Switch>
            <Route path="/contact">
	      <Contact />
	    </Route>

	    <Route path="/">
	      <About />
	    </Route>
	  </Switch>
	  </Router>
	</div>
      </html>
    )
	}
}

function About() {
  return (
    <div class='mainFrame'> 
          <h1> I'm Jeffrey. </h1>
          <h2> a front-end developer. </h2>
          <img id='profile_pic' src={logo}/>
          <div id='about-myself'>
          <p id='intro-p'> 
              I am a recent graduate from the University of Washington with a Bachelor degree in Computer Science.
              I am passionate about data science and front-end development. In school, majority of my coursework focused
              on Machine Learning and AI, and I have research experience in data analysis. Outside of school, I am a
              self-taught front-end developer that loves making single page application and cool looking websites.
          </p>
          <p id='research'>
              At the University of Washington, I had the chance to work as researcher under Dr. Jeff Ban. The research was 
              focused on route optimization for a ride sourcing service, Didi. My tasks included importing and organizing 
              the ride records and visualizing them to validate the dataset before feeding the data into our Markov decision
              model. The data we fed into the model came from the formation of traffic analysis zone, which I created from 
              iterating through each ride record.
          </p>
          </div>
        </div>
  );
}
function Contact() {
  return (
    <h1>
      Contact Information
    </h1>
  );
}
// ========================================

ReactDOM.render(
	<MainPage />,
	document.getElementById('root')
);
