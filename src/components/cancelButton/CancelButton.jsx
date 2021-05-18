import React from 'react';
import { Link } from 'react-router-dom';

class CancelButton extends React.Component {
    render() {
        return(
            <Link to={this.props.link} className="link">
                <button className="button button-cancel">Cancel</button>
            </Link>
        )
    }
}

export default CancelButton;