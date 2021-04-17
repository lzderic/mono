import { action, computed, makeObservable, observable } from "mobx";

class VehicleStore {
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
      MakeId: 1,
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

  constructor() {
    makeObservable(this, {
      VehicleMake: observable,
      VehicleModel: observable,
      totalVehicleMake: computed,
      totalVehicleModel: computed,
      createVehicleMake: action,
      createVehicleModel: action,
      updateVehicleMake: action,
      updateVehicleModel: action,
      deleteVehicleMake: action,
      deleteVehicleModel: action,
    });
  }

  // Create VehicleMake
  createVehicleMake(vehicle = { Id: 0, Title: "", Abrv: "" }) {
    this.VehicleMake.push(vehicle);
    return vehicle;
  }

  // Create VehicleModel
  createVehicleModel(vehicle = { Id: 0, MakeId: 0, Name: "", Abrv: "" }) {
    this.VehicleModel.push(vehicle);
    return vehicle;
  }

  // total number of VehicleMake
  get totalVehicleMake() {
    return this.VehicleMake.length;
  }

  // total number of VehicleModel
  get totalVehicleModel() {
    return this.VehicleModel.length;
  }

  // Update VehicleMake
  updateVehicleMake(VehicleMakeId, update) {
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

  // Update VehicleModel
  updateVehicleModel(VehicleModelId, update) {
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

  // Delete VehicleMake
  deleteVehicleMake(VehicleMakeId) {
    const VehicleMakeIndexAtId = this.VehicleMake.findIndex(
      (vehicle) => vehicle.Id === VehicleMakeId
    );
    if (VehicleMakeIndexAtId > -1) {
      this.VehicleMake.splice(VehicleMakeIndexAtId, 1);
    }
  }

  // Delete VehicleModel
  deleteVehicleModel(VehicleModelId) {
    const VehicleModelIndexAtId = this.VehicleModel.findIndex(
      (vehicle) => vehicle.Id === VehicleModelId
    );
    if (VehicleModelIndexAtId > -1) {
      this.VehicleModel.splice(VehicleModelIndexAtId, 1);
    }
  }
}

export default VehicleStore;
