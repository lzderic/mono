import { makeAutoObservable } from 'mobx';

class FilteredMakeListStore {
    searchTerm = "";

    setSearchTerm(value) {
        console.log(this);
        return this.searchTerm = value;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default FilteredMakeListStore;