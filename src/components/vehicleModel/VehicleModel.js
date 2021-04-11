import React from 'react';
import { observer } from 'mobx-react-lite';

const VehicleModel = ({store}) => {
  const renderVehicleModel = store.VehicleModel.map((vehicle) => {
    return(
      <div key={vehicle.id} className="vehicle-item">
        <h3>{vehicle.Name}</h3>
        <p>{vehicle.Abrv}</p>
        <p>{vehicle.MakeId}</p>
        <p>{vehicle.Id}</p>
        <button className="button button--primary" onClick={() => handleDeleteVehicleModel(vehicle)}>
          Delete 
        </button>
        <button className="button button--primary" onClick={() => handleUpdateVehicleModel(vehicle)}>
          Update 
        </button>
      </div>
    );
  });
  
  const handleDeleteVehicleModel = (vehicle) => {
    store.deleteVehicleModel(vehicle.Id);
  };

  const handleUpdateVehicleModel = (vehicle) => {
    vehicle.Name = prompt("Name?", vehicle.Name);
    vehicle.Abrv = prompt("Abrv?", vehicle.Abrv);
    store.updateVehicleModel(vehicle.Id, vehicle);
  };

  return (
    <main className="container font-text">
      <h2 className="title">Vehicle model</h2>
      <div className="vehicle-grid-layout">
        {renderVehicleModel}
      </div>
      <button className="button button--primary" >New vehicle model</button>
    </main>
  );
}

export default observer(VehicleModel);