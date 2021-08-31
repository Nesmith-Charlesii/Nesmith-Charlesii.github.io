import React from 'react';
import './bio.css';

const Bio = (props) => {
    return (
        <section id="bio">
            {/* <div className="about-header">
                <p id="about">About</p>
                <p id="me">Me</p>
            </div> */}
            <div className="about-content">
                <div className="about-profile-container">
                    <div className="about-profile-photo">
                    
                    </div>
                </div>
                <div className="about-text-container">
                    <div className="about-text">
                        <p>I'm a Full-Stack Developer located in Raleigh, NC with a focus on front end development. I  have created various web applications using CRUD operations to enhance user experience while implementing CSS libraries such as Bootstrap to provide engaging and navigable user interfaces. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bio; 