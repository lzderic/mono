import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { filterListByTitle } from '../../../../common/utils/Utils';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import ListOfItems from '../../../../components/listOfItems/ListOfItems';
import SearchFilter from '../../../../components/searchFilter/SearchFilter';
import SortItems from '../../../../components/sortItems/SortItems';

const VehicleMake = ({ service, layout, pagination, filteredList, sort }) => {
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle make</h2>
      <div>
        <LayoutButtons layout={layout} />
        <SearchFilter filteredList={filteredList} placeholder={"Filter by Title"} />
        <SortItems service={service} sort={sort} value={"Title"} />
      </div>
      <div className={layout.layout}>
        <ListOfItems service={service} pagination={pagination} filteredList={filteredList} id={"vehicle.id"} filter={filterListByTitle(service.VehicleMake, filteredList.searchTerm)} link={"vehiclemake/update/"}/>
      </div>
      <Link to="vehiclemake/add" className="link">
        <button className="button button--primary">New vehicle make</button>
      </Link>
      <Pagination pagination={pagination} totalVehicleMake={service.VehicleMake.length} />
    </main>
  );
}

export default observer(VehicleMake);