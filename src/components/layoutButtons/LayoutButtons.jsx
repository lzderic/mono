import React from 'react';

const LayoutButtons = ({ layout }) => {
  return(
    <>
      <button className="button button--primary" onClick={() => layout.setLayout("vehicle-grid-layout")}>GRID</button>
      <button className="button button--primary" onClick={() => layout.setLayout("vehicle-list-layout")}>LIST</button>
    </>
  );
}

export default LayoutButtons;