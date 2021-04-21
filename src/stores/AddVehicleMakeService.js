import { makeAutoObservable } from 'mobx';

class AddVehicleMakeService {
    // Create VehicleMake
    createVehicleMake(vehicle = { Id: 0, Title: "", Abrv: "" }) {
        this.RootStore.MakeStore.VehicleMake.push(vehicle);
        return vehicle;
    }
    
    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default AddVehicleMakeService;