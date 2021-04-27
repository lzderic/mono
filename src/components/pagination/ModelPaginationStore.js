import { makeAutoObservable } from 'mobx';

class ModelPaginationStore {
    // Current page
    currentPage = 1;
    // Nubmer of vehicles per page
    vehiclesPerPage = 4;
     
    indexOfLastVehicles(){
        return this.currentPage * this.vehiclesPerPage;
    } 
    indexOfFirstVehicles() {
        return this.indexOfLastVehicles() - this.vehiclesPerPage;
    }

    // Current vehicles on page
    currentVehicles(store) {
        return store.slice(this.indexOfFirstVehicles(), this.indexOfLastVehicles());
    }

    // Set page number 
    paginate(pageNumber) {
        return this.currentPage = pageNumber;
    }

    // Get number of pages 
    getNumberOfPages(totalVehicleModel, pageNumbers) {
        for (let i = 1; i <= Math.ceil(totalVehicleModel / this.vehiclesPerPage); i++) {
            pageNumbers.push(i);
          }
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default ModelPaginationStore;