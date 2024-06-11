import { useState } from "react";
import { useForm } from "react-hook-form";
import MapWithMarker from "./MapWithMarker";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ data }) => {
  const navigate = useNavigate();
  let newId = data.length + 1;
  function submitForm(data, coordinates, img64, newId, color) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let lat = Number(coordinates[0].toString().slice(0, 7));
    let lon = Number(coordinates[1].toString().slice(0, 7));

    const newSubmit = {
      id: `${newId + 1}`,
      date: `${day}.${month}.${year}`,
      time: `${hour}:${minutes}`,
      type: data.potholeSize,
      location: data.potHoleLocation,
      description: data.potHoleDescription,
      picture: img64,
      coords: [lat, lon],
      markerColor: color,
      region: data.region,
    };

    const addNewHole = async (newSubmit) => {
      try {
        const res = await fetch("http://localhost:8000/potholes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSubmit),
        });
      } catch (error) {
        console.log("Error:", error);
      } finally {
        toast.success("PotHole sucessfully added");
        setTimeout(() => {
          navigate("/potholesHome");
        }, 1500);
      }
    };
    addNewHole(newSubmit);
  }

  const { register, handleSubmit } = useForm();
  const [coordinates, setCoordinates] = useState(null);

  const handleMapButtonClick = (coords) => {
    setCoordinates(coords);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-indigo-50">
        <form
          onSubmit={handleSubmit((data) => {
            const img = new FileReader();
            img.readAsDataURL(data.picture[0]);

            img.onload = () => {
              const img64 = img.result;
              let color;
              if (data.potholeSize === "Small ✋") {
                color = "#38bdf8";
              }
              if (data.potholeSize === "Medium ⚠️") {
                color = "#facc15";
              }
              if (data.potholeSize === "Large 💥") {
                color = "#f97316";
              }
              if (coordinates === null) {
                alert(
                  "Please place the location of the PotHole on the map then proceed to submit"
                );
                return;
              }
              submitForm(data, coordinates, img64, newId, color);
            };
          })}
        >
          <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
              <h2 className="text-3xl text-center font-semibold mb-6">
                Report PotHole{" "}
                <p className="inline text-gray-400">no.{newId}</p>
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
                  <option value="Small ✋">Small ✋</option>
                  <option value="Medium ⚠️">Medium ⚠️ </option>
                  <option value="Large 💥">Large 💥</option>
                </select>
                <div className="mb-2 mt-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    City/Region:
                  </label>
                  <input
                    placeholder="eg. Skopje/Kumanovo/Centar/Patot za Drachevo..."
                    {...register("region")}
                    className="border rounded w-full py-2 px-3 mb-2"
                    required
                  />
                </div>

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
                    {...register("potHoleDescription")}
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
                  accept="image/*"
                  {...register("picture", { required: true })}
                  className="border rounded w-full py-2 px-3 mb-2"
                  required
                />
                <label className="block text-gray-700 font-bold mb-2 mt-4">
                  PotHole Location on Map
                </label>

                <div>
                  <MapWithMarker onButtonClick={handleMapButtonClick} />
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
    </>
  );
};

export default Form;
