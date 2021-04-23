import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../components/layoutButtons/LayoutButtons';
import Pagination from '../../components/pagination/Pagination.jsx';

const VehicleMake = ({ store, service, layout }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(4);

  // Get current vehicles
  const indexOfLastVehicles = currentPage * vehiclesPerPage;
  const indexOfFirstVehicles = indexOfLastVehicles - vehiclesPerPage;
  const currentVehicles = store.VehicleMake.slice(indexOfFirstVehicles, indexOfLastVehicles);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Delete vehicle
  const handleDeleteVehicleMake = (vehicle) => {
    service.deleteVehicleMake(vehicle.Id);
  };

  // Get list of vehicles
  const renderVehicleMake = currentVehicles.map((vehicle) => {
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
      <Pagination vehiclesPerPage={vehiclesPerPage} totalVehicleMake={store.VehicleMake.length} paginate={paginate} />
    </main>
  );
}

export default observer(VehicleMake);