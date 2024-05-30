import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const PotHoleCard = ({
  id,
  date,
  time,
  type,
  location,
  description,
  picture,
  region,
}) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div className="grid grid-cols-2 bg-white p-6 rounded-lg shadow-md">
      <div>
        <h2 className="text-2xl font-bold">{location}</h2>

        <p className="mt-0.3 mb-1 text-red-400 text-sm">
          Reported: {date} ({time})
        </p>
        <div className="flex items-center">
          <FaLocationDot className="text-red-700 mr-2 size-5" />
          <h3 className="">Region: {region}</h3>
        </div>
        <div className="flex flex-col mr-5">
          <div className="mt-1">
            <p className="flex mb-5 text-s font-normal text-justify mr-3">
              {isClicked ? description.slice(0, 40) + "..." : description}
            </p>
          </div>
        </div>
        <button
          className="flex mb-5 flex-col hover:text-indigo-500 "
          onClick={() => {
            setIsClicked((prev) => {
              prev === true ? (prev = false) : (prev = true);
              return prev;
            });
          }}
        >
          {isClicked === true ? "See More" : "See less"}
        </button>

        <NavLink
          to={`/potholes/${id}`}
          className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
        >
          Details
        </NavLink>
      </div>

      <img
        className="h-[250px] ml-2 w-full bg-white p-1 rounded-lg shadow-md"
        src={picture}
        alt="Pothole-1"
      />
    </div>
  );
};

export default PotHoleCard;
