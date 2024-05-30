import { useState } from "react";
import { Map, Marker } from "pigeon-maps";

const MapWithMarker = ({ submitMarkedTrees }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [treeCoords, setTreeCoords] = useState([]);
  const [treeArr, setTreeArr] = useState([]);
  const handleMapClick = (event) => {
    const { latLng } = event;
    if (latLng) {
      setTreeCoords(latLng);
      createTreeArr(latLng);
      return setMarkerPosition(latLng);
    }
  };
  const createTreeArr = (latLng) => {
    setTreeArr((prev) => {
      const newArr = [...prev, latLng];

      return newArr;
    });
  };
  submitMarkedTrees(treeArr);
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <Map
      height={300}
      defaultCenter={[41.9981, 21.4254]}
      defaultZoom={11}
      onClick={handleMapClick}
    >
      {treeArr.length >= 1 &&
        treeArr.map((location) => <Marker anchor={location} />)}
    </Map>
  );
};

export default MapWithMarker;
