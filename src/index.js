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
          <h2> a web developer. </h2>
          <img id='profile_pic' src={logo}/>
          <div id='about-myself'>
          <p id='intro-p'>
              I am a recent graduate from the University of Washington with a Bachelor degree in Computer Science.
              I am passionate about data science and front-end development. In school, majority of my coursework focused
              on Machine Learning and AI, and I have research experience in data analysis. Outside of school, I am a
              self-taught front-end developer that loves making web application and cool looking websites.
          </p>
          <p id='interests'>
              One of my hobbies is playing video games with my friends. The games I play the most are League of Legends and
              Minecraft. If you are interested in gaming with us, join our Discord <a id='discord_link' href="https://discord.gg/yPtypMVcRY">here</a>.
  
          </p>
          <p id='current projects'>
              I am currently working on some other web projects and I plan on hosting them on my Raspberry Pi. Hopefully you will
              get to see the links of those programs here someday.
          </p>
          <p id='more info about career'>
              For more information about my academic or career background, check out my resume in the file section of the menu. If you need
              to contact me about career opportunities or just want to chat, you can contact me via methods in the contact section!
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
