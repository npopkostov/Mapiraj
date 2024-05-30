import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import HeroMap from "../Components/HeroMap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot } from "react-icons/fa6";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PotHolePage = () => {
  const { id } = useParams();
  const [potHole, setPotHole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPotHole = async () => {
      try {
        const res = await fetch(`http://localhost:8000/potholes/${id}`);
        const data = await res.json();
        setPotHole(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPotHole();
  }, []);

  // Delete PotHole
  async function deletePotHole() {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) {
      return;
    } else {
      const res = await fetch(`http://localhost:8000/potholes/${id}`, {
        method: "DELETE",
      });
      toast.success("PotHole sucessfully deleted");
      setTimeout(() => {
        navigate("/potholesHome");
      }, 1500);
    }
  }
  const navigate = useNavigate();
  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <ToastContainer />
      <Header />
      <div className="container mx-auto border mt-10 py-4 shadow  rounded-lg shadow-md">
        <div>
          <div className="ml-7">
            <h2 className="text-2xl font-bold">
              {" "}
              PotHole size: {potHole.type}
            </h2>
            <h2 className="text-2xl font-bold mt-5 mb-3">
              Location: {potHole.location}
            </h2>
            <FaLocationDot className="inline size-5 text-red-500 mb-1 " />
            <div className="inline">
              <p className="inline ml-1 font-bold text-lg"> {potHole.region}</p>
            </div>
            <p className="mt-1 mb-4 text-red-400 text-m">
              Reported: {potHole.date} ({potHole.time})
            </p>
            <div className="flex flex-col text-xl font-bold ">
              Description:
              <p className=" flex mt-1 text-xl font-normal text-justify mr-3 p-1 ">
                {potHole.description}
              </p>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-2 mt-10 py-1">
            <div className="m-5">
              <HeroMap
                data={[potHole]}
                zoom={18}
                id={potHole.id}
                details={false}
              />
            </div>
            <div className="m-5">
              <img className="h-[450px] w-full" src={potHole.picture} />
            </div>
          </div>

          <button
            className=" border border-round shadow flex flex-col ml-5 py-1 px-1 bg-red-600  text-white
          hover:bg-red-700 hover:font-bold"
            onClick={deletePotHole}
          >
            {" "}
            Delete{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PotHolePage;
