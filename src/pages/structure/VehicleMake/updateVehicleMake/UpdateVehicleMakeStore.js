class UpdateVehicleMakeStore {

    // Values from current object
    getCurrentItem(id) {
        const index = this.RootStore.VehicleMakeStore.makeData.findIndex(
            (vehicle) => vehicle.id.toString() === id
        );
        if (index < 0) {
            return { Title: "", Abvr: "" };
        }
        return this.RootStore.VehicleMakeStore.makeData[index];
    }

    // Handle submit on UpdateVehicleMake page
    onUpdateMakeSubmit(id, data, history) {
        const Title = data.title;
        const Abrv = data.abrv;

        this.RootStore.MakeService.editItem(id, Title, Abrv);

        return history.push("/make");
    };

    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default UpdateVehicleMakeStore;