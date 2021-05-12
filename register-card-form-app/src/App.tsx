import React from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import RegisterCardForm from './components/CreditCardForm';
import Menu from './components/Menu';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={RegisterCardForm} exact/>
                <Route path="/menu" component={Menu} exact/>
            </Switch>
        </Router>
    );
}

export default App;
