import { makeAutoObservable } from 'mobx';

class VehicleMakeService {
    // Delete VehicleMake
    deleteVehicleMake(VehicleMakeId) {
        const VehicleMakeIndexAtId = this.RootStore.MakeStore.VehicleMake.findIndex(
            (vehicle) => vehicle.Id === VehicleMakeId
        );
        const findVehicleMakeId = this.RootStore.ModelStore.VehicleModel.some((vehicle) => vehicle.MakeId === VehicleMakeId);
        if (!findVehicleMakeId && VehicleMakeIndexAtId > -1) {
            this.RootStore.MakeStore.VehicleMake.splice(VehicleMakeIndexAtId, 1);
        } else {
            alert("Cant delete vehicle make where make.Id === model.MakeId !");
        }
    }
    
    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default VehicleMakeService;