import { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";

const MapWithMarker = ({ onButtonClick }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState([41.9981, 21.4254]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setMapCenter([latitude, longitude]);
      },
      (error) => {
        console.error("Error getting user location", error);
      }
    );
  }, []);

  const handleMapClick = (event) => {
    const { latLng } = event;
    if (latLng) {
      handleButtonClick(latLng);
      setMarkerPosition(latLng);
      return latLng;
    }
  };

  const handleButtonClick = (latLng) => {
    onButtonClick(latLng);
  };

  return (
    <div>
      <Map
        center={mapCenter}
        defaultZoom={13}
        width={600}
        height={400}
        onClick={handleMapClick}
      >
        {markerPosition && <Marker anchor={markerPosition} />}
      </Map>
    </div>
  );
};

export default MapWithMarker;
