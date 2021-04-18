import React from 'react';
import { Link } from 'react-router-dom';

const CancelButton = ({ link }) => {
    return(
        <Link to={link} className="link">
            <button className="button button-cancel">Cancel</button>
        </Link>
    );
}

export default CancelButton;