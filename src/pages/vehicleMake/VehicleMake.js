import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import VehicleLayout from '../../components/vehicleLayout/VehicleLayout';

const VehicleMake = ({store}) => {
  const[layout, setLayout] = useState("vehicle-grid-layout");

  const renderVehicleMake = store.VehicleMake.map((vehicle) => {
    return(
      <div key={vehicle.Id} className="vehicle-item">
        <h3>{vehicle.Title}</h3>
        <p>{vehicle.Abrv}</p>
        <p>{vehicle.Id}</p>
        <button className="button button--primary" onClick={() => handleDeleteVehicleMake(vehicle)}>
          Delete 
        </button>
        <Link to={`vehiclemake/update/${vehicle.Id}`} className="link">
          <button className="button button--primary">
            Update 
          </button>
        </Link>
      </div>
    );
  });
  
  const handleAddVehicleMake = () => {
    const Title = prompt("Title?");
    const Abrv = prompt("Abrv?");
    store.createVehicleMake({ Id: Date.now(), Title, Abrv });
  };

  // const handleUpdateVehicleMake = (vehicle) => {
  //   vehicle.Title = prompt("Title?", vehicle.Title);
  //   vehicle.Abrv = prompt("Abrv?", vehicle.Abrv);
  //   store.updateVehicleMake(vehicle.Id, vehicle);
  // };

  const handleDeleteVehicleMake = (vehicle) => {
    store.deleteVehicleMake(vehicle.Id);
  };

  return (
    <main className="container font-text">
      <h2 className="title">Vehicle make</h2>
      <VehicleLayout passData={(layout) => setLayout(layout)} />
      <div className={layout}>
        {renderVehicleMake}
      </div>
      <button className="button button--primary" onClick={handleAddVehicleMake}>New vehicle make</button>
    </main>
  );
}

export default observer(VehicleMake);