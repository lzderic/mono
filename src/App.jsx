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
import MakeLayoutStore from './components/layoutButtons/MakeLayoutStore';
import ModelLayoutStore from './components/layoutButtons/ModelLayoutStore';
import MakePaginationStore from './components/pagination/MakePaginationStore';
import ModelPaginationStore from './components/pagination/ModelPaginationStore';
import FilteredMakeListStore from './components/searchFilter/FilteredMakeListStore';
import FilteredModelListStore from './components/searchFilter/FilteredModelListStore';
import MakeSortItemsStore from './components/sortItems/MakeSortItemsStore';
import ModelSortItemsStore from './components/sortItems/ModelSortItemsStore';

const App = () => {
    const { MakeService,
            ModelService
        } = useStores();

        const MakeLayout = new MakeLayoutStore();
        const ModelLayout = new ModelLayoutStore();
        const MakePagination = new MakePaginationStore();
        const ModelPagination = new ModelPaginationStore();
        const FilteredMakeList = new FilteredMakeListStore();
        const FilteredModelList = new FilteredModelListStore();
        const MakeSortItems = new MakeSortItemsStore();
        const ModelSortItems = new ModelSortItemsStore();
    
    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/make" component={() => <VehicleMake service={MakeService} layout={MakeLayout} pagination={MakePagination} filteredList={FilteredMakeList} sort={MakeSortItems} />}
                    />
                    <Route
                        path="/model" component={() => <VehicleModel service={ModelService} layout={ModelLayout} pagination={ModelPagination} filteredList={FilteredModelList} sort={ModelSortItems} />} 
                    />
                    <Route
                        path="/vehiclemake/update/:id" component={() => <UpdateVehicleMake service={MakeService} />} 
                    />
                    <Route
                        path="/vehiclemake/add" component={() => <AddVehicleMake service={MakeService} />} 
                    />
                    <Route
                        path="/vehiclemodel/update/:id" component={() => <UpdateVehicleModel service={ModelService} />} 
                    />
                    <Route
                        path="/vehiclemodel/add" component={() => <AddVehicleModel service={ModelService} makeService={MakeService} />} 
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;