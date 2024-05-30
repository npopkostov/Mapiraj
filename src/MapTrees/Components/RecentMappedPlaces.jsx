import TreeCard from "./TreeCard";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const RecentMappedPlaces = ({ data, renderData }) => {
  const [mainData, setMainData] = useState("");
  const [loading, setLoading] = useState(true);

  const dataForRender = (turnedOn, id, small, medium, large) => {
    renderData(turnedOn, id, small, medium, large);
  };

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const res = await fetch("http://localhost:9000/trees");
        const data = await res.json();
        setMainData(data);
      } catch (error) {
        console.log("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrees();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <section className="bg-green-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Recently Mapped Trees
          </h2>
          <section className="py-4">
            <div className="container-xl lg:container m-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg">
                {mainData.map((tree) => {
                  return (
                    <TreeCard
                      data={tree}
                      sendDataForRender={dataForRender}
                      key={tree.id}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default RecentMappedPlaces;
