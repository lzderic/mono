import { makeAutoObservable } from 'mobx';

class ModelSortItemsStore {
    // Data
    data; 

    // Set data
    setData(value) {
        this.data = value;
    }

    // Sort vehicle array
    sortArray(type, service) {
        const types = {
            Id: 'Id',
            Name: 'Name'
        };
        const sortProperty = types[type];
        const sorted = service.VehicleModel.sort((a, b) => a[sortProperty] !== b[sortProperty] ? a[sortProperty] < b[sortProperty] ? -1 : 1 : 0);
        this.setData(sorted);     
    }
     

    constructor() {
        makeAutoObservable(this)
    }
}

export default ModelSortItemsStore;