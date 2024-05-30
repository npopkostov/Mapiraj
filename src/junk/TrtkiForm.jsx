import React from "react";

const Trtkiform = () => {
  return (
    <form>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Report PotHole
              </h2>

              <div className="mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  PotHole size
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  required
                >
                  <option value="Full-Time">Small</option>
                  <option value="Part-Time">Medium</option>
                  <option value="Remote">Large</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  PotHole Location
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Ulica Londonska karshi Skara Bar"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Golema dupka vednas pokraj restoranot posle peshackiot.. od desna strana koga vozite nakaj CityMall tesko se izbegnuva ako ima zgolemen soobrakjaj"
                ></textarea>
              </div>

              <div>
                <button className="mt-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
                  Report PotHole
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Trtkiform;
