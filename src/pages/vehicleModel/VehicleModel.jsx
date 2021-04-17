import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../components/layoutButtons/LayoutButtons';

const VehicleModel = ({store}) => {
  const [layout, setLayout] = useState("vehicle-grid-layout");

  // Delete vehicle
  const handleDeleteVehicleModel = (vehicle) => {
    store.deleteVehicleModel(vehicle.Id);
  };

  // Get list of vehicles
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

  return (
    <main className="container font-text">
      <h2 className="title">Vehicle model</h2>
      <LayoutButtons passData={layout => setLayout(layout)} />
      <div className={layout}>
        {renderVehicleModel}
      </div>
      <button className="button button--primary" >New vehicle model</button>
    </main>
  );
}

export default observer(VehicleModel);