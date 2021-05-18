import React from 'react';
import { useStores } from './stores/RootStore';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './scss/style.scss';
import Header from './components/header/Header.jsx';
import Home from './pages/structure/home/Home.jsx';
import VehicleMake from './pages/structure/VehicleMake/vehicleMake/VehicleMake.jsx';
import VehicleModel from './pages/structure/VehicleModel/vehicleModel/VehicleModel.jsx';
import UpdateVehicleMake from './pages/structure/VehicleMake/updateVehicleMake/UpdateVehicleMake';
import AddVehicleMake from './pages/structure/VehicleMake/addVehicleMake/AddVehicleMake';
import UpdateVehicleModel from './pages/structure/VehicleModel/updateVehicleModel/UpdateVehicleModel.jsx';
import AddVehicleModel from './pages/structure/VehicleModel/addVehicleModel/AddVehicleModel';

const App = () => {
    const { VehicleMakeStore,
            VehicleModelStore,
            AddVehicleMakeStore,
            AddVehicleModelStore,
            UpdateVehicleMakeStore,
            UpdateVehicleModelStore
        } = useStores();
    
    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/make" component={() => <VehicleMake store={VehicleMakeStore} />}
                    />
                    <Route
                        path="/model" component={() => <VehicleModel store={VehicleModelStore} />} 
                    />
                    <Route
                        path="/vehiclemake/update/:id" component={() => <UpdateVehicleMake store={UpdateVehicleMakeStore} />} 
                    />
                    <Route
                        path="/vehiclemake/add" component={() => <AddVehicleMake store={AddVehicleMakeStore} /> } 
                    />
                    <Route
                        path="/vehiclemodel/update/:id" component={() => <UpdateVehicleModel store={UpdateVehicleModelStore} />} 
                    />
                    <Route
                        path="/vehiclemodel/add" component={() => <AddVehicleModel store={AddVehicleModelStore} />} 
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;