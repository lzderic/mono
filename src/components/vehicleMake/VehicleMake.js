import React from 'react';
import { observer } from 'mobx-react-lite';

const VehicleMake = ({store}) => {
  const renderVehicleMake = store.VehicleMake.map((vehicle) => {
    return(
      <div key={vehicle.id} className="vehicle-item">
        <h3>{vehicle.Title}</h3>
        <p>{vehicle.Abrv}</p>
        <p>{vehicle.Id}</p>
        <button className="button button--primary" onClick={() => handleDeleteVehicleMake(vehicle)}>
          Delete 
        </button>
        <button className="button button--primary" onClick={() => handleUpdateVehicleMake(vehicle)}>
          Update 
        </button>
      </div>
    );
  });
  
  const handleAddVehicleMake = () => {
    const Title = prompt("Title?");
    const Abrv = prompt("Abrv?");
    store.createVehicleMake({ id: Date.now(), Title, Abrv });
  };

  const handleUpdateVehicleMake = (vehicle) => {
    vehicle.Title = prompt("Title?", vehicle.Title);
    vehicle.Abrv = prompt("Abrv?", vehicle.Abrv);
    store.updateVehicleMake(vehicle.Id, vehicle);
  };

  const handleDeleteVehicleMake = (vehicle) => {
    store.deleteVehicleMake(vehicle.Id);
  };

  return (
    <main className="container font-text">
      <h2 className="title">Vehicle make</h2>
      <div className="vehicle-grid-layout">
        {renderVehicleMake}
      </div>
      <button className="button button--primary" onClick={handleAddVehicleMake}>New vehicle make</button>
    </main>
  );
}

export default observer(VehicleMake);