import { makeAutoObservable } from 'mobx';

class LayoutStore {
    layout = "vehicle-grid-layout";

    constructor(VehicleMakeStore, VehicleModelStore ) {
        this.VehicleMakeStore = VehicleMakeStore;
        this.VehicleModelStore = VehicleModelStore;
        makeAutoObservable(this);
    }

    // Set page layout
    setLayout(layout){
        return this.layout = layout;
    }
}

export default LayoutStore;
