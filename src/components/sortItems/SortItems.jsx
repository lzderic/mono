import React from 'react';

const SortItems = ({ service, sort, value}) => {
    return(
        <>
            <select  className="sort-items" onChange={(e) => sort.sortArray(e.target.value, service)}>
                <option value="Id">Id</option>
                <option value={value}>{value}</option>
            </select>
        </>
    )
}

export default SortItems;