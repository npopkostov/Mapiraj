import { useState, useEffect } from "react";
import "../customStyles/welcome.css";
import Spinner from "../../components/Spinner";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import WelcomeHero from "../Components/WelcomeHero";
import HomePage from "../../PotHoles/Pages/HomePage";
import MapTreesHomePage from "../../MapTrees/Pages/MapTreesHomePage";
import PotHolesListAll from "../../PotHoles/Pages/PotHolesListAll";
import ReportPotHolePage from "../../PotHoles/Pages/ReportPotHolePage";
import PotHolePage from "../../PotHoles/Pages/PotHolePage";
import MapTreesPage from "../../MapTrees/Pages/MapTreesPage";
const WelcomePage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoles = async () => {
      try {
        const res = await fetch("http://localhost:8000/potholes");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHoles();
  }, []);

  if (loading) {
    <Spinner loading={loading} />;
  } else {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/home" element={<WelcomeHero />} />
          <Route path="/potholesHome" element={<HomePage data={data} />} />
          <Route path="/mapTrees" element={<MapTreesHomePage />} />
          <Route
            path="/potHoleListAll"
            element={<PotHolesListAll isHome={false} data={data} />}
          />
          <Route
            path="/reportPotHole"
            element={<ReportPotHolePage data={data} />}
          />
          <Route path="/potholes/:id" element={<PotHolePage />} />
          <Route path="/mapNewTrees" element={<MapTreesPage />} />
        </>
      )
    );
    return <RouterProvider router={router} />;
  }
};
export default WelcomePage;
