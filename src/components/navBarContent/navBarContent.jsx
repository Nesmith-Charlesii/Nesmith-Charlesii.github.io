import React, {useEffect} from 'react';
import {Link} from 'react-scroll';
import './navbarContent.css'

const NavBarContent = (props) => {

    useEffect(() => {
        navAnimationDiv()
        // backgroundText()
    })

    const navAnimationDiv = () => {
        let navAnimationDiv;
        for(let i = 0; i < 20; i++) {
            // Create element and add to class list
            navAnimationDiv = document.createElement('div');
            let navBar = document.getElementById("navBarContent");
            navAnimationDiv.classList.add(`background-animation`);
            navAnimationDiv.setAttribute("id", `nav-animation${i}`);
            // Insert into HTML
            navBar.insertBefore(navAnimationDiv, navBar.childNodes[0]);
            // Style element
            let y = Math.floor(Math.random() * window.innerHeight);
            let x = Math.floor(Math.random() * window.innerWidth);
            let height = Math.floor(Math.random() * (180 - 80 + 1) + 80);
            let width = height
            navAnimationDiv.style.top = y + "px";
            navAnimationDiv.style.right = x + "px";
            navAnimationDiv.style.height = height + "px";
            navAnimationDiv.style.width = width;

            let randomDuration = Math.floor(Math.random() * 10);
    
            let keyFrames = document.createElement("style");
            
            keyFrames.innerHTML = `
                #${navAnimationDiv.id} {
                    animation: box-banner 15s infinite linear ${randomDuration}s;
                }

                @keyframes box-banner {
                    0% {
                        transform: translateY(0);
                        opacity: 0;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                    25% {
                        transform: translateY(25vh) rotate(${randomDuration}deg);
                        opacity: .2;
                        height: ${height + 2}px;
                        width: ${width + 2}px;
                    }
                    50% {
                        transform: translateY(50vh) rotate(-${randomDuration}deg);
                        opacity: 0;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                    75% {
                        transform: translateY(75vh) ;
                        opacity: .4;
                        height: ${height + 2}px;
                        width: ${width + 2}px;
                    }
                    100% {
                        transform: translateY(100vh) rotate(${randomDuration}deg);
                        opacity: 0;
                        height: ${navAnimationDiv.style.height};
                        width: ${navAnimationDiv.style.width};
                    }
                }
            `
            navAnimationDiv.appendChild(keyFrames);
        }
    };

    // let i = 0; 
    // const backgroundText = () => {
    //     let topLeftWord = document.getElementById('top-left-word');
    //     let bottomRightWord = document.getElementById('bottom-right-word');
    //     let skillWordsTop = ["Full-Stack", "Web"];
    //     let skillWordsBottom = ["Developer", "Design"]
    //     if(i < skillWordsBottom.length) {
    //         bottomRightWord.innerText = skillWordsBottom[i];
    //         topLeftWord.innerText = skillWordsTop[i];  
    //         i++;
    //         setTimeout(backgroundText, 10000);
    //     } else {
    //         i = 0;
    //         backgroundText();
    //     }
    // }

    return (
        <section id="navbar">
        {/* <NavBar/> */}
            <nav className="navBarContent d-flex justify-content-center" id="navBarContent">
                <div className="background-shape">
                    
                </div>
                <div className="name-background-banner">
                    <div className="top-background">
                        <p id="top-left-word">Full-Stack</p>
                    </div>
                    <div className="bottom-background">
                        <p id="bottom-right-word">Developer</p>
                    </div>
                </div>
                <div id="profile-image-container">
                    <div id="profile-image"></div>
                </div>
                <div className="navBarContent-links">
                    <ul>
                        <li><Link to="bio" smooth={true}>Bio</Link></li>
                        <li><Link to="tech" smooth={true}>Tech/Stacks</Link></li>
                        <li></li>
                        <li><Link to="projects" smooth={true}>Projects</Link></li>
                        <li><Link to="contact" smooth={true}>Contact</Link></li>
                    </ul>
                </div>
                <div className="myName">
                    <p>Charles</p>
                    <p>Nesmith II</p>
                </div>
            </nav>
        </section>
    )
}

export default NavBarContent;