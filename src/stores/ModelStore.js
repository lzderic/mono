import { makeAutoObservable } from "mobx";

class ModelStore {
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

    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default ModelStore;