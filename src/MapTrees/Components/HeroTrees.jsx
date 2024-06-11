import { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import Spinner from "../../components/Spinner";

const HeroTrees = ({ isActivated, selectedId, small, medium, large }) => {
  const [fullData, setFullData] = useState("");
  const [loading, setLoading] = useState(true);
  const [renderId, setRenderId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:9000/trees/");
        const data = await res.json();
        setFullData(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isActivated && selectedId) {
      if (renderId.length === 0) {
        setRenderId([selectedId]);
      }
      if (renderId.length >= 1) {
        if (!renderId.includes(selectedId)) {
          setRenderId([...renderId, selectedId]);
        }
      }
    }
    if (!isActivated && selectedId) {
      if (renderId.length >= 0) {
        const removeItem = selectedId;
        const arr = renderId.filter((value) => value !== removeItem);
        setRenderId(arr);
      }
    }
  }, [isActivated, selectedId, small, medium, large]);

  //For testing purpose:
  // useEffect(() => {
  //   console.log("The Render ID value -this is for testin purpose:", renderId);
  // }, [renderId]);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <Map height={450} defaultCenter={[41.998, 21.4254]} defaultZoom={14}>
        {/* large trees */}
        {fullData.map((tree) => {
          if (renderId.includes(tree.id)) {
            return tree.detailsLarge.coords.map((coords) => {
              return (
                <Marker
                  className={
                    large.slice(0, 6) === `false` + `${tree.id}`
                      ? "hidden"
                      : "block"
                  }
                  width={30}
                  anchor={coords}
                  color="#166534"
                  onClick={() => {
                    console.log(`${tree.title} - ${tree.detailsLarge.tree}`);
                  }}
                />
              );
            });
          }
        })}
        {/* medium trees */}
        {fullData.map((tree) => {
          if (renderId.includes(tree.id)) {
            return tree.detailsMedium.coords.map((coords) => {
              return (
                <Marker
                  className={
                    medium.slice(0, 6) === `false` + `${tree.id}`
                      ? "hidden"
                      : "block"
                  }
                  width={30}
                  anchor={coords}
                  color="#5A9D37"
                  onClick={() =>
                    console.log(`${tree.title} - ${tree.detailsMedium.tree}`)
                  }
                />
              );
            });
          }
        })}
        {/* small trees */}
        {fullData.map((tree) => {
          if (renderId.includes(tree.id)) {
            return tree.detailsSmall.coords.map((coords) => {
              return (
                <Marker
                  className={
                    small.slice(0, 6) === `false` + `${tree.id}`
                      ? "hidden"
                      : "block"
                  }
                  width={30}
                  anchor={coords}
                  color="#94DA49"
                  onClick={() =>
                    console.log(`${tree.title} - ${tree.detailsSmall.tree}`)
                  }
                />
              );
            });
          }
        })}
      </Map>
    </>
  );
};

export default HeroTrees;
