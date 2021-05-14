import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { filterListByName } from '../../../../common/utils/Utils';
import LayoutButtons from '../../../../components/layoutButtons/LayoutButtons';
import Pagination from '../../../../components/pagination/Pagination.jsx';
import ListOfItems from '../../../../components/listOfItems/ListOfItems';
import SearchFilter from '../../../../components/searchFilter/SearchFilter';
import SortItems from '../../../../components/sortItems/SortItems';

const VehicleModel = ({ service, layout, pagination, filteredList, sort }) => {
  return (
    <main className="container font-text">
      <h2 className="title">Vehicle model</h2>
      <div>
        <LayoutButtons layout={layout} />
        <SearchFilter filteredList={filteredList} placeholder={"Filter by Name"} />
        <SortItems service={service} sort={sort} value={"Name"} />
      </div>
      <div className={layout.layout}>
        <ListOfItems service={service} pagination={pagination} filteredList={filteredList} filter={filterListByName(service.VehicleModel, filteredList.searchTerm)} link={"vehiclemodel/update/"}/>
      </div>
      <Link to="vehiclemodel/add" className="link">
        <button className="button button--primary" >New vehicle model</button>
      </Link>
      <Pagination pagination={pagination} totalVehicleMake={service.VehicleModel.length} />
    </main>
  );
}

export default observer(VehicleModel);