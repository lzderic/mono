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