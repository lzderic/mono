import { makeAutoObservable } from 'mobx';

class FilteredMakeListStore {
    searchTerm = "";

    setSearchTerm(value) {
        return this.searchTerm = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default FilteredMakeListStore;