import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import ListOfItems from '../../../../components/listOfItems/ListOfItems';
import SearchFilter from '../../../../components/searchFilter/SearchFilter';
import SortItems from '../../../../components/sortItems/SortItems';

const VehicleMake = ({ store }) => {
  useEffect(() => {
    setTimeout(() =>{ store.getMakeData(); }, 500);
    setTimeout(() =>{ store.getModelData(); }, 500);
  }, [store]);
  
  store.checkMakeData();
  store.checkModelData();

  if(!store.makeData.length) {
    return <h2 className="title">Loading...</h2>
  }else {
    return (
      <main className="container font-text">
        <h2 className="title">Vehicle make</h2>
        <div>
          <LayoutButtons layout={store.LayoutStore} />
          <SearchFilter filteredList={store.FilteredListStore} placeholder={"Filter by Title"} />
          <SortItems data={store.makeData} sort={store.SortItemsStore} value={"Title"} />
        </div>
        <div className={store.LayoutStore.layout}>
          <ListOfItems store={store} makeData={store.makeData} service={store.RootStore.MakeService} pagination={store.PaginationStore} filter={store.filterListByTitle(store.makeData, store.FilteredListStore.searchTerm)} link={"vehiclemake/update/"}/>
        </div>
        <Link to="vehiclemake/add" className="link">
          <button className="button button--primary">New vehicle make</button>
        </Link>
        <Pagination pagination={store.PaginationStore} totalVehicle={store.makeData.length} />
      </main>
      )
    }
}

export default observer(VehicleMake);