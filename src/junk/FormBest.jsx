import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReportMap from "./ReportMap";
import TrtkiForm from "../early/TrtkiForm";
import MapWithMarker2 from "./MapWithMarker2";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [coordinates, setCoordinates] = useState(null);

  const handleMapButtonClick = (coords) => {
    // Set the coordinates from the map
    setCoordinates(coords);
    console.log(coords);
  };

  return (
    <>
      <div className="bg-indigo-50">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
              <h2 className="text-3xl text-center font-semibold mb-6">
                Report PotHole
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {" "}
                  PotHole Size Selection
                </label>
                <select
                  {...register("potholeSize")}
                  placeholder="potholeSize"
                  className="border rounded w-full py-2 px-3"
                >
                  <option value="Small">Small ✋</option>
                  <option value="Medium">Medium ⚠️ </option>
                  <option value="Large">Large 💥</option>
                </select>
                <div className="mb-2 mt-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    PotHole Location
                  </label>
                  <input
                    placeholder="eg. Ulica Londonska karsi Skara Bar"
                    {...register("potHoleLocation")}
                    className="border rounded w-full py-2 px-3 mb-2"
                    required
                  />
                </div>

                <div className="mb-2 mt-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Golema dupka vednas pokraj restoranot posle peshackiot.. od desna strana koga vozite nakaj CityMall tesko se izbegnuva ako ima zgolemen soobrakjaj"
                    {...register("potHoleLocation")}
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    required
                  />
                </div>
                <label className="block text-gray-700 font-bold mb-2">
                  Picture of the PotHole
                </label>
                <input
                  type="file"
                  {...register("picture", { required: true })}
                  className="border rounded w-full py-2 px-3 mb-2"
                  required
                />
                <label className="block text-gray-700 font-bold mb-2 mt-4">
                  PotHole Location on Map
                </label>

                <div>
                  <MapWithMarker2 onButtonClick={handleMapButtonClick} />
                </div>
                <input
                  type="submit"
                  className="mt-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <TrtkiForm />
    </>
  );
};

export default Form;
