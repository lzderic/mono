import { makeAutoObservable } from 'mobx';

class UpdateVehicleMakeService {
    // Update VehicleMake
    updateVehicleMake(VehicleMakeId, update) {
        const index = this.RootStore.MakeStore.VehicleMake.findIndex(
            (vehicle) => vehicle.Id.toString() === VehicleMakeId
        );
        if (index > -1 && update) {
            const currObject = this.RootStore.MakeStore.VehicleMake[index];
        if (update.data.title && update.data.title !== "") {
            currObject.Title = update.data.title;
        }
        if (update.data.abrv && update.data.abrv !== "") {
            currObject.Abrv = update.data.abrv;
        }
        this.RootStore.MakeStore.VehicleMake[index] = currObject;
        return this.RootStore.MakeStore.VehicleMake[index];
        }
    }

    // Get values from current object
    getCurrentVehicle(id) {
        const index = this.RootStore.MakeStore.VehicleMake.findIndex(
            (vehicle) => vehicle.Id.toString() === id
        );
        if (index < 0) {
            return { Title: "", Abvr: "" }
        }
        return this.RootStore.MakeStore.VehicleMake[index];
    }
    
    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default UpdateVehicleMakeService;