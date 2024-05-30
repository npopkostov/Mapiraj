import { useState, useEffect } from "react";
import RecentPotHoleList from "../Components/RecentPotHolesList";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Spinner from "../../components/Spinner";

const PotHolesListAll = ({ isHome = false, data }) => {
  const [mainData, setMainData] = useState(data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchHoles = async () => {
      try {
        const res = await fetch("http://localhost:8000/potholes");
        const data = await res.json();
        setMainData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHoles();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <Header />
      <Hero coordinates={mainData} />
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Reported PotHoles" : `All reported PotHoles`}
          </h2>
        </div>
        <section className="py-4">
          <div className="container-xl lg:container m-auto">
            <RecentPotHoleList data={mainData} />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default PotHolesListAll;
