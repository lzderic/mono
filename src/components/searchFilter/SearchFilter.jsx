import React from 'react';

const SearchFilter = ({ filteredList, placeholder }) => {
    return(
        <>
            <input type="text" className="search-filter"
            placeholder={placeholder} onChange={(e) => filteredList.setSearchTerm(e.target.value)} />
            </>
    );
}

export default SearchFilter;