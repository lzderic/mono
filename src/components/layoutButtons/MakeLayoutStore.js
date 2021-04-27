import { makeAutoObservable } from 'mobx';

class MakeLayoutStore {
    layout = "vehicle-grid-layout";

    constructor() {
        makeAutoObservable(this)
    }

    // Set page layout
    setLayout(layout){
        return this.layout = layout;
    }
}

export default MakeLayoutStore;
