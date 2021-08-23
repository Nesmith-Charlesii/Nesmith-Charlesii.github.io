import React, {useEffect} from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch, Route} from 'react-router-dom';

const App = (props) => {

    useEffect(() => {
        navAnimationDiv()
    }, [])

    const navAnimationDiv = () => {
        let navAnimationDiv;
        for(let i = 0; i < 100; i++) {
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
            let height = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            let width = height
            navAnimationDiv.style.top = y + "px";
            navAnimationDiv.style.right =x + "px";
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
                        transform: translateY(25vh) ;
                        opacity: .3;
                        height: ${height + 4}px;
                        width: ${width + 4}px;
                    }
                    50% {
                        transform: translateY(50vh) ;
                        opacity: .8;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                    75% {
                        transform: translateY(75vh) ;
                        opacity: .2;
                        height: ${height + 6}px;
                        width: ${width + 6}px;
                    }
                    100% {
                        transform: translateY(110vh) ;
                        opacity: 0;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                }
            `
            navAnimationDiv.appendChild(keyFrames);
        }
        console.log(navAnimationDiv.className);
    };

    return (
        <div className="container-fluid">
            <nav className="navbar d-flex justify-content-center" id="navBar">
                <div className="name-background-banner">
                    <div className="first-name-background">Charles</div>
                    <div className="last-name-background">Nesmith II</div>
                </div>
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
            <footer>
                <p>Powered By: React </p>
            </footer>
        </div>
    )
}

export default App;