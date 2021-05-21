class UpdateVehicleModelStore {

    // Values from current object
    value(id) {
        return this.RootStore.ModelService.getCurrentItem(id)
    }

    // Handle submit on UpdateVehicleModel page
    onUpdateModelSubmit(data, service, id, history) {
        service.editItem(id, { data });
        history.push("/model");
    };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default UpdateVehicleModelStore;