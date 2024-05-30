import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

const TreeCard = ({ data, sendDataForRender }) => {
  const [loading, setLoading] = useState(true);
  const [mainData, setMainData] = useState(data);
  const [turnedOn, setTurnedOn] = useState(false);
  const [treeBtnSmall, setTreeBtnSmall] = useState(false);
  const [treeBtnMedium, setTreeBtnMedium] = useState(false);
  const [treeBtnLarge, setTreeBtnLarge] = useState(false);

  const handleBtnClick = (
    turnedOn,
    id,
    treeBtnSmall,
    treeBtnMedium,
    treeBtnLarge
  ) => {
    sendDataForRender(turnedOn, id, treeBtnSmall, treeBtnMedium, treeBtnLarge);
  };

  const treeDivStyle = turnedOn
    ? "h-60 bg-indigo-50 rounded rounded-xl shadow-xl border border-gray-300 border-1"
    : "h-60 bg-white rounded rounded-xl shadow-xl border border-gray-300 border-1";

  const treeBtnSm = treeBtnSmall
    ? "inline hover:bg-white rounded rouned-m shadow mr-1 bg-indigo-400"
    : "inline hover:bg-indigo-300 rounded rouned-m shadow mr-1 border bg-white";

  const treeBtnMd = treeBtnMedium
    ? "inline hover:bg-white rounded rouned-m shadow mr-1 bg-indigo-400"
    : "inline hover:bg-indigo-300 rounded rouned-m shadow mr-1 border bg-white";

  const treeBtnLg = treeBtnLarge
    ? "inline hover:bg-white rounded rouned-m shadow mr-1 bg-indigo-400"
    : "inline hover:bg-indigo-300 rounded rouned-m shadow mr-1 border bg-white";

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
    <div>
      <div className="flex items-end justify-end">
        <button
          className="bg-indigo-300 rounded-t-xl pl-3 pr-3 py-1 mr-3"
          onClick={() => {
            setTurnedOn((prev) => !prev);
            setTreeBtnSmall((prev) => !prev);
            setTreeBtnMedium((prev) => !prev);
            setTreeBtnLarge((prev) => !prev);
            handleBtnClick(
              !turnedOn,
              mainData.id,
              !treeBtnSmall,
              !treeBtnMedium,
              !treeBtnLarge
            );
          }}
        >
          {turnedOn ? <FaRegLightbulb /> : <FaLightbulb />}
        </button>
      </div>
      <div className={treeDivStyle}>
        <h1 className="flex items-center justify-center mt-1 font-bold text-xl">
          {mainData.title}
        </h1>
        <div className="flex items-center justify-center">
          {mainData.detailsSmall && (
            <button
              className={
                turnedOn
                  ? treeBtnSm
                  : "inline hover:bg-indigo-300 rounded rouned-m shadow mr-1 border bg-white"
              }
              onClick={() => {
                if (turnedOn) {
                  setTreeBtnSmall((prev) => !prev);
                  console.log(treeBtnSmall);
                  handleBtnClick(
                    turnedOn,
                    mainData.id,
                    !treeBtnSmall,
                    treeBtnMedium,
                    treeBtnLarge
                  );
                }
              }}
            >
              <h3 className=" hidden xl:inline">Small</h3>{" "}
              <h3 className="inline">🌱</h3>
            </button>
          )}
          {mainData.detailsMedium && (
            <button
              className={
                turnedOn
                  ? treeBtnMd
                  : "inline hover:bg-indigo-300 rounded rouned-m shadow mr-1 border bg-white"
              }
              onClick={() => {
                if (turnedOn) {
                  setTreeBtnMedium((prev) => !prev);
                  handleBtnClick(
                    turnedOn,
                    mainData.id,
                    treeBtnSmall,
                    !treeBtnMedium,
                    treeBtnLarge
                  );
                }
              }}
            >
              <h3 className=" hidden xl:inline">Medium</h3>{" "}
              <h3 className="inline">🌲</h3>
            </button>
          )}
          {mainData.detailsLarge && (
            <button
              className={
                turnedOn
                  ? treeBtnLg
                  : "inline hover:bg-indigo-300 rounded rouned-m shadow mr-1 border bg-white"
              }
              onClick={() => {
                if (turnedOn) {
                  setTreeBtnLarge((prev) => !prev);
                  handleBtnClick(
                    turnedOn,
                    mainData.id,
                    treeBtnSmall,
                    treeBtnMedium,
                    !treeBtnLarge
                  );
                }
              }}
            >
              <h3 className=" hidden xl:inline ">Large</h3>{" "}
              <h3 className="inline">🌳</h3>
            </button>
          )}
        </div>
        <div className="flex mt-2 justify-center">
          <img
            className="size-40 rounded-lg border border-gray-300 border-1 shadow"
            src={mainData.picture}
          />
        </div>
      </div>
    </div>
  );
};

export default TreeCard;
