import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../components/layoutButtons/LayoutButtons';

const VehicleModel = ({ store, service, layout }) => {
  // Delete vehicle
  const handleDeleteVehicleModel = (vehicle) => {
    service.deleteVehicleModel(vehicle.Id);
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
      <LayoutButtons layout={layout} />
      <div className={layout.layout}>
        {renderVehicleModel}
      </div>
      <Link to="vehiclemodel/add" className="link">
        <button className="button button--primary" >New vehicle model</button>
      </Link>
    </main>
  );
}

export default observer(VehicleModel);