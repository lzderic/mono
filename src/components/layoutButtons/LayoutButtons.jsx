import React from 'react';

const LayoutButtons = ({layout}) => {

  const handleLayoutGrid = () => {
    layout.setLayout("vehicle-grid-layout");
  };

  const handleLayoutList = () => {
    layout.setLayout("vehicle-list-layout");
  };

    return(
      <>
        <button className="button button--primary" onClick={handleLayoutGrid}>GRID</button>
        <button className="button button--primary" onClick={handleLayoutList}>LIST</button>
      </>
    );
}

export default LayoutButtons;