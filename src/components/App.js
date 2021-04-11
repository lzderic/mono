import React from 'react';
import VehicleStore from '../store/VehicleStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../scss/style.scss';
import Header from './header/Header';
import Home from './home/Home';
import VehicleMake from './vehicleMake/VehicleMake'
import VehicleModel from './vehicleModel/VehicleModel';

const App = () => {
    const store = new VehicleStore();

    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/make" component={() => <VehicleMake store={store} />} />
                    <Route path="/model" component={() => <VehicleModel store={store} />} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;