// import { Map, GeoJson } from "pigeon-maps";

// const geoJsonSample = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: { type: "Point", coordinates: [21.4254, 41.9981] },
//       properties: { prop0: "value0" },
//     },
//   ],
// };

// export function HomeMap({ coords }) {
//   console.log(coords);

//   return (
//     <Map height={450} defaultCenter={[41.9981, 21.4254]} defaultZoom={11}>
//       <GeoJson
//         data={geoJsonSample}
//         styleCallback={(feature, hover) => {
//           if (feature.geometry.type === "LineString") {
//             return { strokeWidth: "1", stroke: "black" };
//           }
//           return {
//             fill: "#d4e6ec99",
//             strokeWidth: "2",
//             stroke: "#303F9F",
//             r: "15",
//           };
//         }}
//       />
//     </Map>
//   );
// }

// export default HomeMap;
