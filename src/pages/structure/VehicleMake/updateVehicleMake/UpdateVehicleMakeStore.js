class UpdateVehicleMakeStore {

    // Values from current object
    value(id) {
        return this.RootStore.MakeService.getCurrentItem(id)
    }

    // Handle submit on UpdateVehicleMake page
    onUpdateMakeSubmit(data, service, id, history) {
        service.editItem(id, { data });
        history.push("/make");
    };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default UpdateVehicleMakeStore;