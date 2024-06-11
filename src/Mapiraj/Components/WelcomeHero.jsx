import { useState } from "react";
import "../customStyles/welcome.css";
import { FaEarthEurope } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const WelcomeHero = () => {
  const [page, setPage] = useState("home");
  const [hero, setHero] = useState("hero");
  const [waves, setWaves] = useState("waves");
  const [btn, setBtn] = useState("[#f0fdf4]");
  const navigate = useNavigate();

  return (
    <section className={hero}>
      <div className="content">
        <h2 className="font-mono font-bold text-6xl items-center justify-center">
          Mapiraj/mk <FaEarthEurope className="inline animate-pulse " />
        </h2>
        <p className="-mt-2">- map just everything...</p>
        <select
          onChange={(e) => {
            if (e.target.value === "/select") {
              setPage("home");
              setHero("hero");
              setWaves("waves");
              setBtn("[#d6d3d1]");
            }
            if (e.target.value === "/potHoles") {
              setPage("/potholes");
              setHero("hero-1");
              setWaves("waves-1");
              setBtn("[#ecfeff]");
            }
            if (e.target.value === "/mapTrees") {
              setPage("/mapTrees");
              setHero("hero-2");
              setWaves("waves-2");
              setBtn("[#365314]");
            }
          }}
          className="bg-stone-600 border rounded py-2 px-2 mt-3  text-stone-900 "
        >
          <option className="text-orange-200" value="/select">
            {" "}
            Select..
          </option>
          <option className="text-orange-200" value="/potHoles">
            {" "}
            PotHoles{" "}
          </option>
          <option className="text-orange-200" value="/mapTrees">
            {" "}
            MapTrees(alpha){" "}
          </option>
        </select>

        <button
          onClick={() => {
            if (page === "/potholes") {
              navigate("/potholesHome");
            }
            if (page === "/mapTrees") {
              navigate("/mapTrees");
            }
          }}
          className={`ml-5 border py-2 px-1 rounded-3xl hover:bg-${btn} hover:text-slate-50`}
        >
          {" "}
          Go...{" "}
        </button>
      </div>

      <div className={waves}></div>
    </section>
  );
};

export default WelcomeHero;
