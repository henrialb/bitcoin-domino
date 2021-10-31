import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./styles.css";

import MapChart from "./MapChart";

const Map = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Map />, rootElement);

export default Map;
