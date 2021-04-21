import React from "react";
import MakeStore from "./MakeStore"
import ModelStore from "./ModelStore";
import VehicleMakeService from "./VehicleMakeService";
import VehicleModelService from "./VehicleModelService";
import UpdateVehicleMakeService from "./UpdateVehicleMakeService";
import UpdateVehicleModelService from "./UpdateVehicleModelService";
import AddVehicleMakeService from "./AddVehicleMakeService";
import AddVehicleModelService from "./AddVehicleModelService";

class RootStore {
  constructor() {
    this.MakeStore = new MakeStore(this)
    this.ModelStore = new ModelStore(this)
    this.VehicleMakeService = new VehicleMakeService(this)
    this.VehicleModelService = new VehicleModelService(this)
    this.UpdateVehicleMakeService = new UpdateVehicleMakeService(this)
    this.UpdateVehicleModelService = new UpdateVehicleModelService(this)
    this.AddVehicleMakeService = new AddVehicleMakeService(this)
    this.AddVehicleModelService = new AddVehicleModelService(this)
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);