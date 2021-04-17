import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../components/layoutButtons/LayoutButtons';
import Pagination from '../../components/pagination/Pagination.jsx';

const VehicleMake = ({store}) => {
  const [layout, setLayout] = useState("vehicle-grid-layout");
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(4);

  // // Add new vehicle
  // const handleAddVehicleMake = () => {
  //   const Title = prompt("Title?");
  //   const Abrv = prompt("Abrv?");
  //   store.createVehicleMake({ Id: Date.now(), Title, Abrv });
  // };

  // Get current vehicles
  const indexOfLastVehicles = currentPage * vehiclesPerPage;
  const indexOfFirstVehicles = indexOfLastVehicles - vehiclesPerPage;
  const currentVehicles = store.VehicleMake.slice(indexOfFirstVehicles, indexOfLastVehicles);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Get list of vehicles

  // Delete vehicle
  const handleDeleteVehicleMake = (vehicle) => {
    store.deleteVehicleMake(vehicle.Id);
  };
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
      <LayoutButtons passData={(layout) => setLayout(layout)} />
      <div className={layout}>
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