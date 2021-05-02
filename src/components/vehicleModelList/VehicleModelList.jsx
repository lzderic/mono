import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { filterListByName, handleDeleteVehicle } from '../../common/utils/Utils';

const VehicleModelList = ({ service, pagination, filteredList }) => {
  // Filter vehicle list by Name
    const filter = filterListByName(service.VehicleModel, filteredList.searchTerm);
    // List of current vehicles
    const currentVehicles = pagination.currentVehicles(filter);
    return(
        currentVehicles.map((vehicle) => {
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
        })
    );
}

export default observer(VehicleModelList);