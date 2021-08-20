import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const App = (props) => {
    return (
        <div className="container-fluid">
            <nav className="navbar d-flex justify-content-center">
                <div className="navbar-links">
                    <ul>
                        <li><Link to="bio">Bio</Link></li>
                        <li><Link to="tech">Tech/Stacks</Link></li>
                        <li><Link to="projects">Projects</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default App;