import React from 'react';

class LayoutButtons extends React.Component {
  render() {
    return(
      <>
        <button className="button button--primary" onClick={() => this.props.layout.setLayout("vehicle-grid-layout")}>GRID</button>
        <button className="button button--primary" onClick={() => this.props.layout.setLayout("vehicle-list-layout")}>LIST</button>
      </>
    )
  }
}

export default LayoutButtons;