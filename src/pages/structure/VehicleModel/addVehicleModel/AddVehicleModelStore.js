class AddVehicleModelStore {
    // Handle submit on AddVehicleModel page
    onAddModelSubmit (data, service, history) {
        const Name = data.name;
        const Abrv = data.abrv;
        const Id = Date.now();
        service.addItem({Id, Name, Abrv});
        history.push("/model");
    };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default AddVehicleModelStore;