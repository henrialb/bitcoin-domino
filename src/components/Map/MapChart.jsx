import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoCylindricalStereographic } from "d3-geo-projection";

// const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";
const geoUrl = "./world-110m.json";

const width = 800;
const height = 500;

const projection = geoCylindricalStereographic()
  .translate([width / 2, height / 2])
  .scale(125);

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
      <ComposableMap viewBox="0 0 800 410" data-tip="" projection={projection} >
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
