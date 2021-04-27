// Get Id from Url
export function getIdFromUrl() {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[pathArray.length - 1];
    return id;
};

// Delete vehicle
export const handleDeleteVehicle = (service, vehicle) => {
    service.deleteItem(vehicle.Id);
};

export const onSubmit = (name, abrv, id, service, history) => {
    const Title = name;
    const Abrv = abrv;
    const Id = Date.now();
    service.addItem({Id, Title, Abrv});
    history.push("/make");
};