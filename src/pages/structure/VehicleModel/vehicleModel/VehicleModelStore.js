import {makeAutoObservable} from 'mobx';
import LayoutStore from '../../../../components/layoutButtons/LayoutStore';
import PaginationStore from '../../../../components/pagination/PaginationStore';
import SortItemsStore from '../../../../components/sortItems/SortItemsStore';
import FilteredListStore from '../../../../components/searchFilter/FilteredListStore';

class VehicleModelStore {

    constructor(RootStore) {
        this.RootStore = RootStore;
        this.LayoutStore = new LayoutStore(this);
        this.PaginationStore = new PaginationStore(this);
        this.SortItemsStore = new SortItemsStore(this);
        this.FilteredListStore = new FilteredListStore(this);
        makeAutoObservable(this);
    }
}

export default VehicleModelStore;