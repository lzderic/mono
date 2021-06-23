class AddVehicleMakeStore {
    // handle add submit
    onAddMakeSubmit(data, history) {
        const id = this.RootStore.VehicleMakeStore.makeData.lenght + 1;
        const Title = data.title;
        const Abrv = data.abrv;

        this.RootStore.MakeService.addItem(id, Title, Abrv);

        return history.push("/make");
 };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default AddVehicleMakeStore;
