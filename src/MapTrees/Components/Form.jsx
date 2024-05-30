import { useState } from "react";
import MapWithMarker from "./MapWithMarker";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [treeCords, setTreeCords] = useState([]);

  const submitCoords = (coords) => {
    setTreeCords(coords);
    console.log(treeCords);
  };
  return (
    <>
      <div className="bg-green-50">
        <form
          onSubmit={handleSubmit((data) => {
            // const img = new FileReader();
            // img.readAsDataURL(data.picture[0]);
            console.log(data, treeCords);
            // img.onload = () => {
            //   const img64 = img.result;
            //   let color;
            //   if (data.potholeSize === "Small 🌱") {
            //     color = "#86efac";
            //   }
            //   if (data.potholeSize === "Medium 🌲") {
            //     color = "#16a34a";
            //   }
            //   if (data.potholeSize === "Large 🌳") {
            //     color = "#14532d";
            //   }

            //   submitForm(data, coordinates, img64, newId, color);
            // };
          })}
        >
          <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
              <h2 className="text-3xl text-center font-semibold mb-6">
                Map Trees
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {" "}
                  Tree Size:
                </label>
                <select
                  {...register("potholeSize")}
                  placeholder="treeSize"
                  className="border rounded w-full py-2 px-3"
                >
                  <option value="Small 🌱">Small 🌱</option>
                  <option value="Medium 🌲">Medium 🌲 </option>
                  <option value="Large 🌳">Large 🌳</option>
                </select>
                <div className="mb-2 mt-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Tree Type:
                  </label>
                  <input
                    placeholder="eg. Javor (Hippocastanoideae)"
                    {...register("region")}
                    className="border rounded w-full py-2 px-3 mb-2"
                    required
                  />
                </div>

                <div className="mb-2 mt-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Javor nad 5m visina"
                    {...register("potHoleDescription")}
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    required
                  />
                </div>
                <label className="block text-gray-700 font-bold mb-2">
                  Picture of the Tree
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("picture", { required: true })}
                  className="border rounded w-full py-2 px-3 mb-2"
                  required
                />
                <label className="block text-gray-700 font-bold mb-2 mt-4">
                  Map the trees:
                </label>

                <div>
                  <MapWithMarker submitMarkedTrees={submitCoords} />
                </div>
                <input
                  type="submit"
                  className="mt-3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
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
