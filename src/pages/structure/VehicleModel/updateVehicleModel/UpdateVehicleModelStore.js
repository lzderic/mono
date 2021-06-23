class UpdateVehicleModelStore {

    // Values from current object
    getCurrentItem(id) {
        const index = this.RootStore.VehicleModelStore.modelData.findIndex(
            (vehicle) => vehicle.id.toString() === id
        );
        if (index < 0) {
            return { Name: "", Abvr: "" }
        }
        return this.RootStore.VehicleModelStore.modelData[index];
    }

    // Handle submit on UpdateVehicleModel page
    onUpdateModelSubmit(id, data, history) {
        const Name = data.name;
        const Abrv = data.abrv;
        let MakeId = 0;

        this.RootStore.VehicleModelStore.makeData.find((vehicleMake) => {
            if(vehicleMake.Abrv === Abrv) {
                return MakeId = vehicleMake.id;
            }
                return MakeId;
        });

        this.RootStore.ModelService.editItem(id, MakeId, Name, Abrv);

        return history.push("/model");
    };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default UpdateVehicleModelStore;