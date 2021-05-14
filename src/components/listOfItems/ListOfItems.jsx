import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { handleDeleteVehicle } from '../../common/utils/Utils';

const ListOfItems = ({ service, pagination, filter, link }) => {
    const currentVehicles = pagination.currentVehicles(filter);
    return(
        currentVehicles.map((vehicle) => {
            return(
            <div key={vehicle.Id} className="vehicle-item">
                {Object.values(vehicle).map((element, index) => { 
                    return React.createElement('p', {key: index}, element);
                })}
                <button className="button button--primary" onClick={() => handleDeleteVehicle(service, vehicle)}>
                    Delete 
                </button>
                <Link to={`${link}${vehicle.Id}`} className="link">
                <button className="button button--primary">
                    Update 
                </button>
                </Link>
            </div>
            );
        })
    );
}

export default observer(ListOfItems);