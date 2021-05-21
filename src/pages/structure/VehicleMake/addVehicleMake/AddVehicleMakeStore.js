class AddVehicleMakeStore {
    // Handle submit on AddVehicleMake page
    onAddMakeSubmit(data, service, history) {
        const Title = data.title;
        const Abrv = data.abrv;
        const Id = Date.now();
        service.addItem({Id, Title, Abrv});
        history.push("/make");
    };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default AddVehicleMakeStore;