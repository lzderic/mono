import { makeAutoObservable } from "mobx";

class MakeStore {
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

    constructor(RootStore) {
        this.RootStore = RootStore;
        makeAutoObservable(this);
    }
}

export default MakeStore;