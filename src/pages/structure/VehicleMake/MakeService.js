import { makeAutoObservable } from "mobx";

class MakeService {
  VehicleMakeFromBackend = [
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
    },
  ];

  VehicleMakeToShow = [];

  // Create VehicleMake
  addItem(vehicle = { Id: 0, Title: "", Abrv: "" }) {
    vehicle.Id = this.VehicleMakeFromBackend.length + 1;
    this.VehicleMakeFromBackend.push(vehicle);
    return vehicle;
  }

  // Delete VehicleMake
  deleteItem(VehicleMakeId) {
    const VehicleMakeIndexAtId = this.VehicleMakeFromBackend.findIndex(
      (vehicle) => vehicle.Id === VehicleMakeId
    );
    const findVehicleMakeId = this.RootStore.ModelService.VehicleModel.some(
      (vehicle) => vehicle.MakeId === VehicleMakeId
    );
    if (!findVehicleMakeId && VehicleMakeIndexAtId > -1) {
      this.VehicleMakeFromBackend.splice(VehicleMakeIndexAtId, 1);
    } else {
      alert("Cant delete vehicle make where make.Id === model.MakeId !");
    }
  }

  // Update VehicleMake
  editItem(VehicleMakeId, update) {
    const index = this.VehicleMakeFromBackend.findIndex(
      (vehicle) => vehicle.Id.toString() === VehicleMakeId
    );
    if (index > -1 && update) {
      const currObject = this.VehicleMakeFromBackend[index];
      if (update.data.title && update.data.title !== "") {
        currObject.Title = update.data.title;
      }
      if (update.data.abrv && update.data.abrv !== "") {
        currObject.Abrv = update.data.abrv;
      }
      this.VehicleMakeFromBackend[index] = currObject;
      return this.VehicleMakeFromBackend[index];
    }
  }

  // Get values from current object
  getCurrentItem(id) {
    const index = this.VehicleMakeFromBackend.findIndex(
      (vehicle) => vehicle.Id.toString() === id
    );
    if (index < 0) {
      return { Title: "", Abvr: "" };
    }
    return this.VehicleMakeFromBackend[index];
  }

  constructor(RootStore) {
    this.RootStore = RootStore;
    makeAutoObservable(this);
  }
}

export default MakeService;
