import { makeAutoObservable } from 'mobx';

class FilteredListStore {
    searchTerm = "";

    setSearchTerm(value) {
        return this.searchTerm = value;
    }

    constructor(VehicleMakeStore, VehicleModelStore) {
        this.VehicleMakeStore = VehicleMakeStore;
        this.VehicleModelStore = VehicleModelStore;
        makeAutoObservable(this);
    }
}

export default FilteredListStore;