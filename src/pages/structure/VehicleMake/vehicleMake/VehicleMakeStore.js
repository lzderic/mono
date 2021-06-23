import swal from 'sweetalert';
import {makeAutoObservable, autorun } from 'mobx';
import LayoutStore from '../../../../components/layoutButtons/LayoutStore';
import PaginationStore from '../../../../components/pagination/PaginationStore';
import SortItemsStore from '../../../../components/sortItems/SortItemsStore';
import FilteredListStore from '../../../../components/searchFilter/FilteredListStore';

class VehicleMakeStore {
    // Make data
    makeData = [];

    // Model data
    modelData = [];

    // Set make data
    setMakeData(value) {
        return this.makeData = value;
    }

    // Set model data
    setModelData(value) {
        return this.modelData = value;
    }

    // Check make data
    checkMakeData() {
        autorun(() => {
            if (!this.makeData.length) {
                return this.getMakeData();
            } else if(this.makeData.length) {
                return this.makeData;
            }
        })
    }

    // Check model data
    checkModelData() {
        autorun(() => {
            if (!this.modelData.length) {
                return this.getModelData();
            } else if(this.modelData.length) {
                return this.modelData;
            }
        })
    }

    // Get make data
    async getMakeData() {
        await fetch('http://localhost:8000/VehicleMake', {
            method: 'GET'
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                return this.setMakeData(data)
            })
    }

    // Get model data
    async getModelData() {
        await fetch('http://localhost:8000/VehicleModel', {
            method: 'GET'
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                return this.setModelData(data)
            })
    }

    // Filter list by title
    filterListByTitle(list, searchValue) {
        if (searchValue === "") {
            return list;
        }
        return list.filter((it) =>
            it.Title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    // Delete vehicle
    handleDeleteVehicle(service, id) {
        const findVehicleMakeId = this.modelData.some((vehicle) => vehicle.MakeId === id);
        if (!findVehicleMakeId) {
            service.deleteItem(id);
        } else {
            swal("Oops!", "Cant delete vehicle make where make.Id === model.MakeId !", "error");
        }

        return setTimeout(() =>{ this.getMakeData(); }, 400);
    }

    constructor(RootStore) {
        this.RootStore = RootStore;
        this.LayoutStore = new LayoutStore(this);
        this.PaginationStore = new PaginationStore(this);
        this.SortItemsStore = new SortItemsStore(this);
        this.FilteredListStore = new FilteredListStore(this);
        makeAutoObservable(this);
    }
}

export default VehicleMakeStore;