class UpdateVehicleModelStore {

    // Values from current object
    value(id) {
        return this.RootStore.ModelService.getCurrentItem(id)
    }

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default UpdateVehicleModelStore;