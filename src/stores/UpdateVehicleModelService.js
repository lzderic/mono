import { makeAutoObservable } from 'mobx';

class UpdateVehicleModelService {
    // Update VehicleModel
    updateVehicleModel(VehicleModelId, update) {
        const index = this.RootStore.ModelStore.VehicleModel.findIndex(
            (vehicle) => vehicle.Id.toString() === VehicleModelId
        );
        if (index > -1 && update) {
            const currObject = this.RootStore.ModelStore.VehicleModel[index];
        if (update.data.name && update.data.name !== "") {
                currObject.Name = update.data.name;
        }
        if (update.data.abrv && update.data.abrv !== "") {
            currObject.Abrv = update.data.abrv;
        }
        this.RootStore.ModelStore.VehicleModel[index] = currObject;
        return this.RootStore.ModelStore.VehicleModel[index];
        }
    }

    // Get values from current object
    getCurrentVehicle(id) {
        const index = this.RootStore.ModelStore.VehicleModel.findIndex(
            (vehicle) => vehicle.Id.toString() === id
        );
        if (index < 0) {
            return { Name: "", Abvr: "" }
        }
        return this.RootStore.ModelStore.VehicleModel[index];
    }
    
    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default UpdateVehicleModelService;