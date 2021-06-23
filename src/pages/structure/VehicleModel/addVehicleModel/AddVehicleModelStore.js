class AddVehicleModelStore {
    // Handle submit on AddVehicleModel page
    onAddModelSubmit (data, history) {
        const id = this.RootStore.VehicleModelStore.modelData.lenght + 1;
        const Name = data.name;
        const Abrv = data.abrv;
        let MakeId = 0;

        this.RootStore.VehicleModelStore.makeData.find((vehicleMake) => {
            if(vehicleMake.Abrv === Abrv) {
                return MakeId = vehicleMake.id;
            }
           return MakeId;
        });

        this.RootStore.ModelService.addItem(id, MakeId, Name, Abrv);
        history.push("/model");
    };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default AddVehicleModelStore;