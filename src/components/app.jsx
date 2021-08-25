import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from './navBar/navBar.jsx';

const App = (props) => {

    return (
        <div className="container-fluid">
            <Switch>
                <Route path="/"> 
                    <NavBar/>
                </Route>
            </Switch>
            <footer>
                <p>Powered By: <b>CNII</b></p>
            </footer>
        </div>
    )
}

export default App;