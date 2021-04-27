import React from "react";
import MakeService from "../pages/structure/VehicleMake/MakeService";
import ModelService from "../pages/structure/VehicleModel/ModelService";

class RootStore {
  constructor() {
    this.MakeService = new MakeService(this)
    this.ModelService = new ModelService(this)
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);