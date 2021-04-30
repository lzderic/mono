import React from 'react';

const SearchFilter = ({ filteredList, placeholder }) => {
    return(
        <>
            <input type="text" placeholder={placeholder} onChange={(e) => filteredList.setSearchTerm(e.target.value)} />
        </>
    );
}

export default SearchFilter;