import { makeAutoObservable } from 'mobx';

class FilteredModelListStore {
    searchTerm = "";

    setSearchTerm(value) {
        return this.searchTerm = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default FilteredModelListStore;