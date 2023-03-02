import React from 'react';
import data from '../../metal.json';
import Band from '../Band/Band';
import './BandList.css';

function BandList() {
const list = data.map((obj) => {
    const { band_name, formed, origin, fans } = obj;
    return (
      <Band
        key={band_name}
        band_name={band_name}
        formed={formed}
        origin={origin}
        fans={fans}
      />
    )
  })
  return ( 
    <div className="BandList"> 
        { list }
    </div>
  )
}


export default BandList;