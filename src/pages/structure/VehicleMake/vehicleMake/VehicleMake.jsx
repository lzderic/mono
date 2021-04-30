import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import VehicleMakeList from '../../../../components/vehicleMakeList/VehicleMakeList';
import SearchFilter from '../../../../components/searchFilter/SearchFilter';

const VehicleMake = ({ service, layout, pagination, filteredList }) => {
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle make</h2>
      <LayoutButtons layout={layout} />
      <SearchFilter filteredList={filteredList} placeholder={"Filter by Title"} />
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