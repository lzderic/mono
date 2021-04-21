import { makeAutoObservable } from 'mobx';

class AddVehicleModelService {
    // Create VehicleModel
    createVehicleModel(vehicle = { Id: 0, MakeId: 0, Name: "", Abrv: "" }) {
        this.RootStore.MakeStore.VehicleMake.find((vehicleMake) => {
            let makeId = 0;
            if(vehicleMake.Abrv === vehicle.Abrv) {
                makeId = vehicle.MakeId = vehicleMake.Id;
            }
            return makeId;
        });
        this.RootStore.ModelStore.VehicleModel.push(vehicle);
        return vehicle;
    }

    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default AddVehicleModelService;