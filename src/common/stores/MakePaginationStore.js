import { makeAutoObservable } from 'mobx';

class MakePaginationStore {
    currentPage = 1;
    vehiclesPerPage = 4;

    indexOfLastVehicles = this.currentPage * this.vehiclesPerPage;
    indexOfFirstVehicles = this.indexOfLastVehicles - this.vehiclesPerPage;

    currentVehicles(store) {
        return store.slice(this.indexOfFirstVehicles, this.indexOfLastVehicles);
    }

    paginate(pageNumber) {
        return this.currentPage = pageNumber;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default MakePaginationStore;