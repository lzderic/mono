import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const ListOfItems = ({ store, service, pagination, filter, link }) => {
    const currentVehicles = pagination.currentVehicles(filter);
    return(
        currentVehicles.map((vehicle) => {
            return(
            <div key={vehicle.id} className="vehicle-item">
                {Object.values(vehicle).map((element, index) => { 
                    return React.createElement('p', {key: index}, element);
                })}
                <button className="button button--primary" onClick={() => store.handleDeleteVehicle(service, vehicle.id)}>
                    Delete 
                </button>
                <Link to={`${link}${vehicle.id}`} className="link">
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