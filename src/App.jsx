import React from 'react';
import { useStores } from './stores/RootStore';
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
import MakeLayoutStore from './common/stores/MakeLayoutStore';
import ModelLayoutStore from './common/stores/ModelLayoutStore';
import MakePaginationStore from './common/stores/MakePaginationStore';

const App = () => {
    const { MakeStore,
            ModelStore,
            UpdateVehicleMakeService,
            UpdateVehicleModelService,
            AddVehicleMakeService,
            AddVehicleModelService,
            VehicleMakeService,
            VehicleModelService
        } = useStores();

        const MakeLayout = new MakeLayoutStore();
        const ModelLayout = new ModelLayoutStore();
        const MakePagination = new MakePaginationStore();
    
    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/make" component={() => <VehicleMake store={MakeStore} service={VehicleMakeService} layout={MakeLayout} pagination={MakePagination} />}
                    />
                    <Route
                        path="/model" component={() => <VehicleModel store={ModelStore} service={VehicleModelService} layout={ModelLayout} />} 
                    />
                    <Route
                        path="/vehiclemake/update/:id" component={() => <UpdateVehicleMake store={UpdateVehicleMakeService} />} 
                    />
                    <Route
                        path="/vehiclemake/add" component={() => <AddVehicleMake store={AddVehicleMakeService} />} 
                    />
                    <Route
                        path="/vehiclemodel/update/:id" component={() => <UpdateVehicleModel store={UpdateVehicleModelService} />} 
                    />
                    <Route
                        path="/vehiclemodel/add" component={() => <AddVehicleModel store={AddVehicleModelService} />} 
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;