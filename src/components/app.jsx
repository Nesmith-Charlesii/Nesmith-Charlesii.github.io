import React, {useEffect} from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch, Route} from 'react-router-dom';

const App = (props) => {

    useEffect(() => {
        navAnimationDiv()
        backgroundText()
    }, [])

    const navAnimationDiv = () => {
        let navAnimationDiv;
        for(let i = 0; i < 70; i++) {
            // Create element and add to class list
            navAnimationDiv = document.createElement('div');
            let navBar = document.getElementById("navBar");
            navAnimationDiv.classList.add(`background-animation`);
            navAnimationDiv.setAttribute("id", `nav-animation${i}`);
            // Insert into HTML
            navBar.insertBefore(navAnimationDiv, navBar.childNodes[0]);
            // Style element
            let y = Math.floor(Math.random() * window.innerWidth);
            let x = Math.floor(Math.random() * window.innerWidth);
            let height = Math.floor(Math.random() * (40 - 20 + 1) + 20);
            let width = height
            navAnimationDiv.style.top = y + "px";
            navAnimationDiv.style.right = x + "px";
            navAnimationDiv.style.height = height + "px";
            navAnimationDiv.style.width = width;

            let duration = Math.floor(Math.random() * 10);
    
            let keyFrames = document.createElement("style");
            
            keyFrames.innerHTML = `
                #${navAnimationDiv.id} {
                    animation: box-banner 10s infinite linear ${duration}s;
                }

                @keyframes box-banner {
                    0% {
                        transform: translateY(0);
                        opacity: 0;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                    25% {
                        transform: translateY(25vh) rotate(20deg);
                        opacity: .4;
                        height: ${height + 2}px;
                        width: ${width + 2}px;
                    }
                    50% {
                        transform: translateY(50vh) rotate(-180deg);
                        opacity: 0;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                    75% {
                        transform: translateY(75vh) ;
                        opacity: .6;
                        height: ${height + 2}px;
                        width: ${width + 2}px;
                    }
                    100% {
                        transform: translateY(110vh) rotate(45deg);
                        opacity: 0;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                }
            `
            navAnimationDiv.appendChild(keyFrames);
        }
    };

    const backgroundText = () => {
        let skillSetBottom = ["SOFTWARE", "FULL", ]
    }

    return (
        <div className="container-fluid">
            <nav className="navbar d-flex justify-content-center" id="navBar">
                <div className="name-background-banner">
                    <div className="first-name-background">
                        <p>Charles</p>
                        <p id="developer">DEVELOPER</p>
                    </div>
                    <div className="last-name-background">
                        <p id="software">SOFTWARE</p>
                        <p>Nesmith II</p>
                    </div>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li><Link to="bio" id="bio">Bio</Link></li>
                        <li><Link to="tech" id="tech-stacks">Tech/Stacks</Link></li>
                        <li></li>
                        <li id="profile-image-container">
                            <hr/>
                                <div id="profile-image"></div>
                            <hr/>
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
            <footer>
                <p>Powered By: <b>CNII</b></p>
            </footer>
        </div>
    )
}

export default App;