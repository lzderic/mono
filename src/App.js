import React from 'react';
import VehicleStore from './store/VehicleStore';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './scss/style.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import VehicleMake from './pages/vehicleMake/VehicleMake'
import VehicleModel from './pages/vehicleModel/VehicleModel';
import VehicleMakeUpdate from './pages/vehicleMakeUpdate/VehicleMakeUpdate';
import VehicleModelUpdate from './pages/vehicleModelUpdate/VehicleModelUpdate';

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
                    <Route path="/vehiclemake/update/:id" component={() => <VehicleMakeUpdate store={store} />} />
                    <Route path="/vehiclemodel/update/:id" component={() => <VehicleModelUpdate store={store} />} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;