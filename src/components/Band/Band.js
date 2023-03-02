import React from "react";
import Like from '../Like/Like';

function Band(props) {
    const { band_name, formed, origin, fans } = props;
    console.log(`this is in band${props}`)
    return (
      <div className="Band">
        <h2>Band Name: {band_name}</h2>
        <p>Formed: {formed}</p>
        <p>Origin: {origin}</p>
        <p>Fans: {fans}</p>
        <Like />
      </div>
    );
  }

export default Band;