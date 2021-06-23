import React from 'react';

const SortItems = ({ data, sort, value}) => {
    return(
        <div className="sort-items">
            <p className="sort-items__par">Sort by:</p>
            <select onChange={(e) => sort.sortArray(e.target.value, value, data)}>
                <option value="Id">Id</option>
                <option value={value}>{value}</option>
            </select>
        </div>
    )
}

export default SortItems;