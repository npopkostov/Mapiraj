import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import RecentPotHolesList from "../Components/RecentPotHolesList";
import Footer from "../Components/Footer";
import Spinner from "../../components/Spinner";

const HomePage = ({ data }) => {
  const [mainData, setMainData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentData, setRecentData] = useState("");

  useEffect(() => {
    const fetchHoles = async () => {
      try {
        const res = await fetch("http://localhost:8000/potholes");
        const data = await res.json();
        setMainData(data);
        const testData = data.slice(data.length - 6, data.length);
        setRecentData(testData.reverse());
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
      <Hero coordinates={recentData} />
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Recent Reported PotHoles
          </h2>
          <RecentPotHolesList data={recentData} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
