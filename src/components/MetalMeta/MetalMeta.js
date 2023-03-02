import React from 'react';
import data from '../../metal.json';
import './MetalMeta.css';

function MetalMeta() { 
    return (
        <div className="MetalMeta">
            <h1>Metal Bands 🤘</h1>
            <p>Total Bands: {data.length}</p>
        </div>
      );
}

export default MetalMeta;