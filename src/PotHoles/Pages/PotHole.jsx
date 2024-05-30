import { useState, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "./HomePage";
import PotHolesListAll from "./PotHolesListAll";
import ReportPotHole from "./ReportPotHole";
import PotHolePage from "./PotHolePage";
import Spinner from "../../components/Spinner";

const App = () => {
  const [potHoles, setPotHoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoles = async () => {
      try {
        const res = await fetch("http://localhost:8000/potholes");
        const data = await res.json();
        setPotHoles(data);
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
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage data={potHoles} />} />
          <Route
            path="/pages/PotHolesListAll"
            element={<PotHolesListAll isHome={false} data={potHoles} />}
          />
          <Route
            path="/pages/ReportPotHole"
            element={<ReportPotHole data={potHoles} />}
          />
          <Route path="/potholes/:id" element={<PotHolePage />} />
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  }
};
export default App;
