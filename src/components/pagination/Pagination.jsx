import React from 'react';

const Pagination = ({ pagination, totalVehicle }) => {
  // Number of pages
  const pageNumbers = [];

  // Get number of pages
  pagination.getNumberOfPages(totalVehicle, pageNumbers);

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