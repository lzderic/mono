import React from 'react';

const Pagination = ({ pagination, totalVehicleMake, totalVehicleModel }) => {
  // Number of pages
  const pageNumbers = [];

  // Get number of pages
  pagination.getNumberOfPages(totalVehicleMake, pageNumbers);
  pagination.getNumberOfPages(totalVehicleModel, pageNumbers);

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} >
            <button onClick={() => pagination.paginate(number)} >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;