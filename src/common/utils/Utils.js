// Get Id from Url
export function getIdFromUrl() {
  const pathArray = window.location.pathname.split("/");
  const id = pathArray[pathArray.length - 1];
  return id;
};

// Id from Url
export const id =() => {
  return getIdFromUrl();
} 

// Delete vehicle
export const handleDeleteVehicle = (service, vehicle) => {
  service.deleteItem(vehicle.Id);
};

// Handle submit on AddVehicleMake page
export const onAddMakeSubmit = (data, service, history) => {
  const Title = data.title;
  const Abrv = data.abrv;
  const Id = Date.now();
  service.addItem({Id, Title, Abrv});
  history.push("/make");
};

// Handle submit on AddVehicleModel page
export const onAddModelSubmit = (data, service, history) => {
  const Name = data.name;
  const Abrv = data.abrv;
  const Id = Date.now();
  service.addItem({Id, Name, Abrv});
  history.push("/model");
};

// Handle submit on UpdateVehicleMake page
export const onUpdateMakeSubmit = (data, service, id, history) => {
  service.editItem(id, { data });
  history.push("/make");
};

// Handle submit on UpdateVehicleModel page
export const onUpdateModelSubmit = (data, service, id, history) => {
  service.editItem(id, { data });
  history.push("/model");
};

// Filter list by title
export function filterListByTitle(list, searchValue) {
  if (searchValue === "") {
    return list;
  }
  return list.filter((it) =>
    it.Title.toLowerCase().includes(searchValue.toLowerCase())
  );
}

// Filter list by name
export function filterListByName(list, searchValue) {
  if (searchValue === "") {
    return list;
  }
  return list.filter((it) =>
    it.Name.toLowerCase().includes(searchValue.toLowerCase())
  );
}
