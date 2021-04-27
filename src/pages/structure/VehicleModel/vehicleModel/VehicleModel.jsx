import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import { handleDeleteVehicle } from '../../../../common/utils/Utils';

const VehicleModel = ({ service, layout, pagination }) => {
  // List of current vehicles
  const currentVehicles = pagination.currentVehicles(service.VehicleModel);

  // Get list of vehicles
  const renderVehicleModel = currentVehicles.map((vehicle) => {
    return(
      <div key={vehicle.Id} className="vehicle-item">
        <h3>{vehicle.Name}</h3>
        <p>{vehicle.Abrv}</p>
        <p>{vehicle.MakeId}</p>
        <p>{vehicle.Id}</p>
        <button className="button button--primary" onClick={() => handleDeleteVehicle(service, vehicle)}>
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
      <Pagination pagination={pagination} totalVehicleMake={service.VehicleModel.length} />
    </main>
  );
}

export default observer(VehicleModel);