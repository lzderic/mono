import React from 'react';

const LayoutButtons = (props) => {

  const handleLayoutGrid = () => {
    props.passData("vehicle-grid-layout");
  };

  const handleLayoutList = () => {
    props.passData("vehicle-list-layout");
  };

    return(
      <>
        <button className="button button--primary" onClick={handleLayoutGrid}>GRID</button>
        <button className="button button--primary" onClick={handleLayoutList}>LIST</button>
      </>
    );
}

export default LayoutButtons;