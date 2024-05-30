import React, { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import Spinner from "../../components/Spinner";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

export function HeroMap({ data, zoom = 12, id = false, details = true }) {
  const [hue, setHue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [potHole, setPotHole] = useState(data);
  const [userLatLng, setLatLng] = useState([41.9981, 21.4254]);
  const [showDetails, setShowDetails] = useState(false);
  const [potHoleDetails, setPotHoleDetails] = useState("");
  const [small, setSmall] = useState(0);
  const [medium, setMedium] = useState(0);
  const [large, setLarge] = useState(0);

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatLng([position.coords.latitude, position.coords.longitude]);
      });
      setPotHole(data);
    } catch (error) {
      console.log("Error loading because of ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const smallHoles = potHole.reduce((acc, hole) => {
      return hole.type === "Small ✋" ? acc + 1 : acc;
    }, 0);
    setSmall(smallHoles);

    const mediumHoles = potHole.reduce((acc, hole) => {
      return hole.type === "Medium ⚠️" ? acc + 1 : acc;
    }, 0);
    setMedium(mediumHoles);

    const largeHoles = potHole.reduce((acc, hole) => {
      return hole.type === "Large 💥" ? acc + 1 : acc;
    }, 0);
    setLarge(largeHoles);
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <Map
      height={450}
      defaultCenter={
        id ? [potHole[0].coords[0], potHole[0].coords[1]] : userLatLng
      }
      defaultZoom={zoom}
    >
      {potHole.map((location) => (
        <Marker
          width={50}
          anchor={[location.coords[0], location.coords[1]]}
          color={location.markerColor}
          key={location.id}
          onClick={() => {
            details && setShowDetails((prev) => (prev ? false : true));
            setPotHoleDetails(location);
          }}
        />
      ))}
      {showDetails && (
        <div className="absolute animate-scale-up right-14 top-14 h-80 w-80 bg-white rounded-3xl bg-opacity-90 shadow-lg border ">
          <div className="flex mt-5 ml-5 ">
            <h3 className="underline">PotHole size: </h3>
            <h3 className="font-bold ml-1"> {potHoleDetails.type}</h3>
          </div>
          <div className="flex mt-1 ml-5 ">
            <h3>
              <FaLocationDot className="text-red-500 mt-0.5" />
            </h3>
            <h3 className="text-red-500 ml-1"> {potHoleDetails.region}</h3>
          </div>
          <div className="mt-1 ml-5 ">
            <h3 className="underline">PotHole Location:</h3>
            <h3 className="font-bold">{potHoleDetails.location}</h3>
          </div>
          <div className=" ml-5 ">
            <h3 className="underline">PotHole description:</h3>
            <h3 className="text-s mr-3">
              {potHoleDetails.description.slice(0, 80) + "..."}
            </h3>
          </div>
          <div className="flex justify-between ml-5 mr-5 ">
            <NavLink
              className="mt-2 font-bold hover:text-indigo-600 "
              to={`/potholes/${potHoleDetails.id}`}
            >
              Details
            </NavLink>
            <img
              className=" -mt-4 size-20 border rounded-xl"
              src={potHoleDetails.picture}
            />
          </div>
        </div>
      )}
      {details && (
        <div className="absolute bottom-0 w-80 h-9 bg-white opacity-80 rounded-lg">
          <div className="flex items-center justify-center mt-2">
            <h3 className="font-bold"> ({small + medium + large}) Total:</h3>
            <h3 className=" pl-2 pr-2">✋ - {small} </h3>

            <h3>⚠️ - {medium}</h3>

            <h3 className="pl-2">💥 - {large}</h3>
          </div>
        </div>
      )}
    </Map>
  );
}

export default HeroMap;
