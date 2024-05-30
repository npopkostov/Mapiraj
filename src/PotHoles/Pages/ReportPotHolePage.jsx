import { useState, useEffect } from "react";
import Form from "../Components/Form";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Spinner from "../../components/Spinner";

const ReportPotHolePage = ({ data }) => {
  const [mainData, setMainData] = useState("");
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
      <Form data={mainData} />
      <Footer />
    </>
  );
};

export default ReportPotHolePage;
