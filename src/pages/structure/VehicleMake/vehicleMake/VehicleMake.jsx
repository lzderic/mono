import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import VehicleMakeList from '../../../../components/vehicleMakeList/VehicleMakeList';

const VehicleMake = ({ service, layout, pagination, filteredList }) => {
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle make</h2>
      <LayoutButtons layout={layout} />
      <input type="text" placeholder="Search..." onChange={(e) => filteredList.setSearchTerm(e.target.value)} />
      <div className={layout.layout}>
        <VehicleMakeList service={service} pagination={pagination} filteredList={filteredList} />
      </div>
      <Link to="vehiclemake/add" className="link">
        <button className="button button--primary">New vehicle make</button>
      </Link>
      <Pagination pagination={pagination} totalVehicleMake={service.VehicleMake.length} />
    </main>
  );
}

export default observer(VehicleMake);