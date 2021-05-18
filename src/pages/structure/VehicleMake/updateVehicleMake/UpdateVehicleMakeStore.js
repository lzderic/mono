class UpdateVehicleMakeStore {

    // Values from current object
    value(id) {
        return this.RootStore.MakeService.getCurrentItem(id)
    }

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default UpdateVehicleMakeStore;