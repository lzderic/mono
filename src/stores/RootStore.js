import React from "react";
import MakeService from "../pages/structure/VehicleMake/MakeService";
import ModelService from "../pages/structure/VehicleModel/ModelService";
import VehicleMakeStore from  "../pages/structure/VehicleMake/vehicleMake/VehicleMakeStore";
import VehicleModelStore from  "../pages/structure/VehicleModel/vehicleModel/VehicleModelStore";
import AddVehicleMakeStore from  "../pages/structure/VehicleMake/addVehicleMake/AddVehicleMakeStore";
import AddVehicleModelStore from  "../pages/structure/VehicleModel/addVehicleModel/AddVehicleModelStore";
import UpdateVehicleMakeStore from  "../pages/structure/VehicleMake/updateVehicleMake/UpdateVehicleMakeStore";
import UpdateVehicleModelStore from  "../pages/structure/VehicleModel/updateVehicleModel/UpdateVehicleModelStore";

class RootStore {
  constructor() {
    this.MakeService = new MakeService(this);
    this.ModelService = new ModelService(this);
    this.VehicleMakeStore = new VehicleMakeStore(this);
    this.VehicleModelStore = new VehicleModelStore(this);
    this.AddVehicleMakeStore = new AddVehicleMakeStore(this);
    this.AddVehicleModelStore = new AddVehicleModelStore(this);
    this.UpdateVehicleMakeStore = new UpdateVehicleMakeStore(this);
    this.UpdateVehicleModelStore = new UpdateVehicleModelStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);