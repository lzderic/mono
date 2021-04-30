import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import VehicleModelList from '../../../../components/vehicleModelList/VehicleModelList';

const VehicleModel = ({ service, layout, pagination, filteredList }) => {
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle model</h2>
      <input type="text" placeholder="Search..." onChange={(e) => filteredList.setSearchTerm(e.target.value)} />
      <LayoutButtons layout={layout} />
      <div className={layout.layout}>
        <VehicleModelList service={service} pagination={pagination} filteredList={filteredList} />
      </div>
      <Link to="vehiclemodel/add" className="link">
        <button className="button button--primary" >New vehicle model</button>
      </Link>
      <Pagination pagination={pagination} totalVehicleMake={service.VehicleModel.length} />
    </main>
  );
}

export default observer(VehicleModel);