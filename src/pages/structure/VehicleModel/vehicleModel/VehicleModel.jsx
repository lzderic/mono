import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { filterListByName } from '../../../../common/utils/Utils';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import ListOfItems from '../../../../components/listOfItems/ListOfItems';
import SearchFilter from '../../../../components/searchFilter/SearchFilter';
import SortItems from '../../../../components/sortItems/SortItems';

const VehicleModel = ({ service, store }) => {
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle model</h2>
      <div>
        <LayoutButtons layout={store.LayoutStore} />
        <SearchFilter filteredList={store.FilteredListStore} placeholder={"Filter by Name"} />
        <SortItems service={service.VehicleModel} sort={store.SortItemsStore} value={"Name"} />
      </div>
      <div className={store.LayoutStore.layout}>
        <ListOfItems service={service} pagination={store.PaginationStore} filter={filterListByName(service.VehicleModel, store.FilteredListStore.searchTerm)} link={"vehiclemodel/update/"}/>
      </div>
      <Link to="vehiclemodel/add" className="link">
        <button className="button button--primary" >New vehicle model</button>
      </Link>
      <Pagination pagination={store.PaginationStore} totalVehicle={service.VehicleModel.length} />
    </main>
  );
}

export default observer(VehicleModel);