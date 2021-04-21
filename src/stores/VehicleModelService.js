import { makeAutoObservable } from 'mobx';

class VehicleModelService {
    // Delete VehicleModel
    deleteVehicleModel(VehicleModelId) {
        const VehicleModelIndexAtId = this.RootStore.ModelStore.VehicleModel.findIndex(
            (vehicle) => vehicle.Id === VehicleModelId
        );
        if (VehicleModelIndexAtId > -1) {
            this.RootStore.ModelStore.VehicleModel.splice(VehicleModelIndexAtId, 1);
        }
    }
    
    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default VehicleModelService;