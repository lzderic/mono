import { makeAutoObservable } from 'mobx';

class ModelService {
    VehicleModel = [
        {
          Id: 1,
          MakeId: 2,
          Name: "X5",
          Abrv: "bmw",
        },
        {
          Id: 2,
          MakeId: 2,
          Name: "330d",
          Abrv: "bmw",
        },
        {
          Id: 3,
          MakeId: 3,
          Name: "Fiesta",
          Abrv: "Ford",
        },
        {
          Id: 4,
          MakeId: 3,
          Name: "Kuga",
          Abrv: "Ford",
        },
        {
          Id: 5,
          MakeId: 3,
          Name: "Fiesta",
          Abrv: "Ford",
        },
        {
          Id: 6,
          MakeId: 1,
          Name: "Polo",
          Abrv: "vw",
        }
    ];

    // Create VehicleModel
    addItem(vehicle = { Id: 0, MakeId: 0, Name: "", Abrv: "" }) {
        this.RootStore.MakeService.VehicleMakeFromBackend.find((vehicleMake) => {
            let makeId = 0;
            if(vehicleMake.Abrv === vehicle.Abrv) {
                makeId = vehicle.MakeId = vehicleMake.Id;
            }
            return makeId;
        });
        this.VehicleModel.push(vehicle);
        return vehicle;
    }

    // Delete VehicleModel
    deleteItem(VehicleModelId) {
        const VehicleModelIndexAtId = this.VehicleModel.findIndex(
            (vehicle) => vehicle.Id === VehicleModelId
        );
        if (VehicleModelIndexAtId > -1) {
            this.VehicleModel.splice(VehicleModelIndexAtId, 1);
        }
    }

    // Update VehicleModel
    editItem(VehicleModelId, update) {
        const index = this.VehicleModel.findIndex(
            (vehicle) => vehicle.Id.toString() === VehicleModelId
        );
        if (index > -1 && update) {
            const currObject = this.VehicleModel[index];
        if (update.data.name && update.data.name !== "") {
                currObject.Name = update.data.name;
        }
        if (update.data.abrv && update.data.abrv !== "") {
            currObject.Abrv = update.data.abrv;
        }
        this.VehicleModel[index] = currObject;
        return this.VehicleModel[index];
        }
    }

    // Get values from current object
    getCurrentItem(id) {
        const index = this.VehicleModel.findIndex(
            (vehicle) => vehicle.Id.toString() === id
        );
        if (index < 0) {
            return { Name: "", Abvr: "" }
        }
        return this.VehicleModel[index];
    }
    
    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default ModelService;