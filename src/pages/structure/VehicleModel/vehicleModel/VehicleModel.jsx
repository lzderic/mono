import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import ListOfItems from '../../../../components/listOfItems/ListOfItems';
import SearchFilter from '../../../../components/searchFilter/SearchFilter';
import SortItems from '../../../../components/sortItems/SortItems';

const VehicleModel = ({ store }) => {
  useEffect(() => {
    setTimeout(() =>{ store.getMakeData(); }, 500);
    setTimeout(() =>{ store.getModelData(); }, 500);
  }, [store]);
  
  store.checkMakeData();
  store.checkModelData();

  if(!store.modelData.length) {
    return <h2 className="title">Loading...</h2>
  }else {
    return (
      <main className="container font-text">
        <h2 className="title">Vehicle model</h2>
        <div>
          <LayoutButtons layout={store.LayoutStore} />
          <SearchFilter filteredList={store.FilteredListStore} placeholder={"Filter by Name"} />
          <SortItems service={store.modelData} sort={store.SortItemsStore} value={"Name"} data={store.modelData} />
        </div>
        <div className={store.LayoutStore.layout}>
          <ListOfItems store={store} makeData={store.makeData} service={store.RootStore.ModelService} pagination={store.PaginationStore} filter={store.filterListByName(store.modelData, store.FilteredListStore.searchTerm)} link={"vehiclemodel/update/"}/>
        </div>
        <Link to="vehiclemodel/add" className="link">
          <button className="button button--primary" >New vehicle model</button>
        </Link>
        <Pagination pagination={store.PaginationStore} totalVehicle={store.modelData.length} />
      </main>
    )
  }
}

export default observer(VehicleModel);