import { makeAutoObservable } from 'mobx';

class LayoutButtonsStore {
    layout = "vehicle-grid-layout";

    constructor() {
        makeAutoObservable(this)
    }

    setLayout(layout){
        return this.layout = layout;
    }
}

export default LayoutButtonsStore;
