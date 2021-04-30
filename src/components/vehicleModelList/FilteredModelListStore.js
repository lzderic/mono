import { makeAutoObservable } from 'mobx';

class FilteredModelListStore {
    searchTerm = "";

    setSearchTerm(value) {
        console.log(this);
        return this.searchTerm = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default FilteredModelListStore;