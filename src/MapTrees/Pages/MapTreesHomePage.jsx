import { useState, useEffect } from "react";
import Header from "../Components/Header";
import HeroTrees from "../Components/HeroTrees";
import RecentMappedPlaces from "../Components/RecentMappedPlaces";
import Footer from "../Components/Footer";
import Spinner from "../../components/Spinner";

const MapTreesHomePage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [renderId, setRenderId] = useState("");
  const [smallTree, setSmallTree] = useState("");
  const [mediumTree, setMediumTree] = useState("");
  const [largeTree, setLargeTree] = useState("");
  const [indicator, setIndicator] = useState("");

  const selectedData = (turnedOn, id, small, medium, large) => {
    setIndicator(turnedOn);
    setRenderId(id);
    setSmallTree(small);
    setMediumTree(medium);
    setLargeTree(large);
  };

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const res = await fetch("http://localhost:9000/trees");
        const data = await res.json();
        setData(data);
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
      <Header />
      <HeroTrees
        isActivated={indicator}
        selectedId={renderId}
        small={smallTree}
        medium={mediumTree}
        large={largeTree}
      />
      <RecentMappedPlaces data={data} renderData={selectedData} />
      <Footer />
    </>
  );
};

export default MapTreesHomePage;
