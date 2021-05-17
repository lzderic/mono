import { makeAutoObservable } from 'mobx';

class SortItemsStore {
    // Data
    data;

    // Set data
    setData(value) {
        this.data = value;
    }

    // Sort vehicle array
    sortArray(type, service, value) {
        let types = [];
        
        if(value === 'Title') {
            types = {
                Id: 'Id',
                Title: value
            }
        } else if(value === 'Name') {
            types = {
                Id: 'Id',
                Name: value
            }
        }

        const sortProperty = types[type];
        const sorted = service.sort((a, b) => a[sortProperty] !== b[sortProperty] ? a[sortProperty] < b[sortProperty] ? -1 : 1 : 0);
        return this.setData(sorted);     
    }

    constructor(VehicleMakeStore, VehicleModelStore) {
        this.VehicleMakeStore = VehicleMakeStore;
        this.VehicleModelStore = VehicleModelStore;
        makeAutoObservable(this);
    }
}

export default SortItemsStore;