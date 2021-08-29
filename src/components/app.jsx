import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import NavBar from './navBar/navBar';
import NavBarContent from './navBarContent/navBarContent.jsx';
import Bio from './bio/bio.jsx';

const App = (props) => {

    return (
        <div className="container-fluid">
            <NavBar/>
            <NavBarContent/>
            <Bio/>
            <footer>
                <p>Powered By: <b>CNII</b></p>
            </footer>
        </div>
    )
}

export default App;