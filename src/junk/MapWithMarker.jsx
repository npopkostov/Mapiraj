import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

const MapWithMarker = () => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapClick = ({ latLng }) => {
    // Log the coordinates of the left click
    console.log("Clicked coordinates:", latLng);
    // Set marker position to the clicked coordinates
    setMarkerPosition(latLng);
  };

  return (
    <div>
      {/* Pigeon Map component */}
      <Map
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={12}
        width={600}
        height={400}
      >
        {/* Marker to indicate clicked coordinates */}
        {markerPosition && <Marker anchor={markerPosition} />}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-4xl">🢆</p>
        </div>
        <div>
          <button onClick={handleMapClick}> Hello </button>
        </div>
      </Map>
    </div>
  );
};

export default MapWithMarker;
