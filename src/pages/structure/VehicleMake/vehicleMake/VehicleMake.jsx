import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import { handleDeleteVehicle } from '../../../../common/utils/Utils';

const VehicleMake = ({ service, layout, pagination }) => {
  // List of current vehicles
  const currentVehicles = pagination.currentVehicles(service.VehicleMake);

  // Get list of vehicles
  const renderVehicleMake = currentVehicles.map((vehicle) => {
    return(
      <div key={vehicle.Id} className="vehicle-item">
        <h3>{vehicle.Title}</h3>
        <p>{vehicle.Abrv}</p>
        <p>{vehicle.Id}</p>
        <button className="button button--primary" onClick={() => handleDeleteVehicle(service, vehicle)}>
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
  
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle make</h2>
      <LayoutButtons layout={layout} />
      <div className={layout.layout}>
        {renderVehicleMake}
      </div>
      <Link to="vehiclemake/add" className="link">
        <button className="button button--primary">New vehicle make</button>
      </Link>
      <Pagination pagination={pagination} totalVehicleMake={service.VehicleMake.length} />
    </main>
  );
}

export default observer(VehicleMake);