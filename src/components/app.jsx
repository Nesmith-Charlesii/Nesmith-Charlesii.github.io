import React, {useEffect} from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch, Route} from 'react-router-dom';

const App = (props) => {

    useEffect(() => {
        navAnimationDiv()
        playNavAnimation()
    }, [])

    const navAnimationDiv = () => {
        let navAnimationDiv;
        for(let i = 1; i <= 40; i++) {
            navAnimationDiv = document.createElement('div');
            let navBar = document.getElementById("navBar");
            navAnimationDiv.classList.add("background-animation");
            navAnimationDiv.setAttribute("id", "nav-animation");
            navBar.insertBefore(navAnimationDiv, navBar.childNodes[0]);
            navAnimationDiv.style.position = "absolute";
            navAnimationDiv.style.top = `${Math.floor(Math.random() * 95)}%`;
            navAnimationDiv.style.right = `${Math.floor(Math.random() * 100)}%`;
        }
    };

    const playNavAnimation = () => {
            let circles = document.querySelectorAll(".background-animation");
            let keyFrames = document.createElement("style");
            for(let i = 0; i < circles.length; i++) {
                let circle = circles[i];
                keyFrames.innerHTML = `
                @keyframes circle {
                    50% {
                        top: -20%;
                    }
                }
                
                .background-animation {
                    animation: circle 35s infinite forwards;
                }`

                circle.appendChild(keyFrames);
            }
            
        }

    return (
        <div className="container-fluid">
            <nav className="navbar d-flex justify-content-center" id="navBar">
                <div className="navbar-links">
                    <ul>
                        <li><Link to="bio">Bio</Link></li>
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