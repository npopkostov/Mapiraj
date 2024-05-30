import { useState, useEffect } from "react";
import PotHoleCard from "./PotHoleCard";
import Spinner from "../../components/Spinner";

const RecentPotHolesList = ({ data }) => {
  const [mainData, setMainData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      setMainData(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            {mainData.map((api) => (
              <PotHoleCard
                key={api.id}
                id={api.id}
                date={api.date}
                time={api.time}
                type={api.type}
                location={api.location}
                description={api.description}
                picture={api.picture}
                region={api.region}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentPotHolesList;
