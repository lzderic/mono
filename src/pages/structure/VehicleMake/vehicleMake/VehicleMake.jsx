import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import ListOfItems from '../../../../components/listOfItems/ListOfItems';
import SearchFilter from '../../../../components/searchFilter/SearchFilter';
import SortItems from '../../../../components/sortItems/SortItems';

const VehicleMake = ({ store }) => {
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle make</h2>
      <div>
        <LayoutButtons layout={store.LayoutStore} />
        <SearchFilter filteredList={store.FilteredListStore} placeholder={"Filter by Title"} />
        <SortItems service={store.RootStore.MakeService.VehicleMake} sort={store.SortItemsStore} value={"Title"} />
      </div>
      <div className={store.LayoutStore.layout}>
        <ListOfItems service={store.RootStore.MakeService} pagination={store.PaginationStore} filter={store.filterListByTitle(store.RootStore.MakeService.VehicleMake, store.FilteredListStore.searchTerm)} link={"vehiclemake/update/"}/>
      </div>
      <Link to="vehiclemake/add" className="link">
        <button className="button button--primary">New vehicle make</button>
      </Link>
      <Pagination pagination={store.PaginationStore} totalVehicle={store.RootStore.MakeService.VehicleMake.length} />
    </main>
  );
}

export default observer(VehicleMake);