import React from 'react';
import VehicleStore from './store/VehicleStore';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './scss/style.scss';
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
import VehicleMake from './pages/vehicleMake/VehicleMake.jsx';
import VehicleModel from './pages/vehicleModel/VehicleModel.jsx';
import UpdateVehicleMake from './pages/updateVehicleMake/UpdateVehicleMake.jsx';
import AddVehicleMake from './pages/addVehicleMake/AddVehicleMake';
import UpdateVehicleModel from './pages/updateVehicleModel/UpdateVehicleModel.jsx';
import AddVehicleModel from './pages/addVehicleModel/AddVehicleModel';

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
                    <Route path="/vehiclemake/update/:id" component={() => <UpdateVehicleMake store={store} />} />
                    <Route path="/vehiclemake/add" component={() => <AddVehicleMake store={store} />} />
                    <Route path="/vehiclemodel/update/:id" component={() => <UpdateVehicleModel store={store} />} />
                    <Route path="/vehiclemodel/add" component={() => <AddVehicleModel store={store} />} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;