import { makeAutoObservable } from 'mobx';

class MakeService {
    VehicleMake = [
        {
          Id: 1,
          Title: "Volkswagen",
          Abrv: "vw",
        },
        {
          Id: 2,
          Title: "Bayerische Motoren Werke",
          Abrv: "bmw",
        },
        {
          Id: 3,
          Title: "Ford",
          Abrv: "Ford",
        },
        {
          Id: 4,
          Title: "Honda",
          Abrv: "Honda",
        },
        {
          Id: 5,
          Title: "Škoda",
          Abrv: "Škoda",
        },
        {
          Id: 6,
          Title: "Ferrari",
          Abrv: "Ferrari",
        }
    ];

    // Create VehicleMake
    addItem(vehicle = { Id: 0, Title: "", Abrv: "" }) {
        this.VehicleMake.push(vehicle);
        return vehicle;
    }

    // Delete VehicleMake
    deleteItem(VehicleMakeId) {
        const VehicleMakeIndexAtId = this.VehicleMake.findIndex(
            (vehicle) => vehicle.Id === VehicleMakeId
        );
        const findVehicleMakeId = this.RootStore.ModelService.VehicleModel.some((vehicle) => vehicle.MakeId === VehicleMakeId);
        if (!findVehicleMakeId && VehicleMakeIndexAtId > -1) {
            this.VehicleMake.splice(VehicleMakeIndexAtId, 1);
        } else {
            alert("Cant delete vehicle make where make.Id === model.MakeId !");
        }
    }

    // Update VehicleMake
    editItem(VehicleMakeId, update) {
        const index = this.VehicleMake.findIndex(
            (vehicle) => vehicle.Id.toString() === VehicleMakeId
        );
        if (index > -1 && update) {
            const currObject = this.VehicleMake[index];
        if (update.data.title && update.data.title !== "") {
            currObject.Title = update.data.title;
        }
        if (update.data.abrv && update.data.abrv !== "") {
            currObject.Abrv = update.data.abrv;
        }
        this.VehicleMake[index] = currObject;
        return this.VehicleMake[index];
        }
    }

    // Get values from current object
    getCurrentItem(id) {
        const index = this.VehicleMake.findIndex(
            (vehicle) => vehicle.Id.toString() === id
        );
        if (index < 0) {
            return { Title: "", Abvr: "" }
        }
        return this.VehicleMake[index];
    }
    
    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default MakeService;