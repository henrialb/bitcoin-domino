import React, { memo } from "react";
// import reactDom from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const geoUrl = "./world-110m.json";

// const rounded = num => {
//   if (num > 1000000000) {
//     return Math.round(num / 100000000) / 10 + "Bn";
//   } else if (num > 1000000) {
//     return Math.round(num / 100000) / 10 + "M";
//   } else {
//     return Math.round(num / 100) / 10 + "K";
//   }
// };

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <h1>BITCOIN DOMINO</h1>
      <p className="site-desc">A visualisation of the adoption of Bitcoin across the world.</p>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties
                  setTooltipContent(`${NAME}`)
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: geo.properties.ADOPTION === 'legal tender' ? '#F7931A' : '#666',
                    outline: "none"
                  },
                  hover: {
                    fill: geo.properties.ADOPTION === 'legal tender' ? '#F7811A' : '#363636',
                    outline: "none"
                  },
                  pressed: {
                    fill: "#343434",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
