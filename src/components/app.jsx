import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch, Route} from 'react-router-dom';

const App = (props) => {

    const backgroundAnimation = () => {
        let backgroundAnimation = document.getElementById("background-animation");
        let navBar = document.getElementById("navBar");
        backgroundAnimation.style.height = `40px`;
        backgroundAnimation.style.width = `40px`;
        let cloneAnimation;
        for(let i = 1; i <= 3; i++) {
            cloneAnimation = backgroundAnimation.cloneNode(true);
            navBar.insertBefore(cloneAnimation, navBar.childNodes[0]);
            backgroundAnimation.style.position = "absolute";
            backgroundAnimation.style.top = `${Math.floor(Math.random() * 500)}px`;
            backgroundAnimation.style.right = `${Math.floor(Math.random() * 300)}px`
            backgroundAnimation.style.bottom = `${Math.floor(Math.random() * 500)}px`
        }
        console.log("clicked")
    };

    return (
        <div className="container-fluid">
            <nav className="navbar d-flex justify-content-center" id="navBar">
                <div id="background-animation"></div>
                <div className="navbar-links">
                    <ul>
                        <li><Link to="bio" onClick={() => backgroundAnimation()}>Bio</Link></li>
                        <li><Link to="tech">Tech/Stacks</Link></li>
                        <li></li>
                        <li id="profile-image-container">
                            <p className="full-name">Charles Nesmith II</p>
                            <hr/>
                                <div id="profile-image"></div>
                            <hr/>
                            <p className="full-name">Software Developer</p>
                        </li>
                        <li><Link to="projects">Projects</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/"> 
                </Route>
            </Switch>
        </div>
    )
}

export default App;