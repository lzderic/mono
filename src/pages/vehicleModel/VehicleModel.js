import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import VehicleLayout from '../../components/vehicleLayout/VehicleLayout';

const VehicleModel = ({store}) => {
  const[layout, setLayout] = useState("vehicle-grid-layout");

  const renderVehicleModel = store.VehicleModel.map((vehicle) => {
    return(
      <div key={vehicle.Id} className="vehicle-item">
        <h3>{vehicle.Name}</h3>
        <p>{vehicle.Abrv}</p>
        <p>{vehicle.MakeId}</p>
        <p>{vehicle.Id}</p>
        <button className="button button--primary" onClick={() => handleDeleteVehicleModel(vehicle)}>
          Delete 
        </button>
        <Link to={`vehiclemodel/update/${vehicle.Id}`} className="link">
          <button className="button button--primary">
            Update 
          </button>
        </Link>
      </div>
    );
  });
  
  const handleDeleteVehicleModel = (vehicle) => {
    store.deleteVehicleModel(vehicle.Id);
  };

  // const handleUpdateVehicleModel = (vehicle) => {
  //   vehicle.Name = prompt("Name?", vehicle.Name);
  //   vehicle.Abrv = prompt("Abrv?", vehicle.Abrv);
  //   store.updateVehicleModel(vehicle.Id, vehicle);
  // };

  return (
    <main className="container font-text">
      <h2 className="title">Vehicle model</h2>
      <VehicleLayout passData={layout => setLayout(layout)} />
      <div className={layout}>
        {renderVehicleModel}
      </div>
      <button className="button button--primary" >New vehicle model</button>
    </main>
  );
}

export default observer(VehicleModel);