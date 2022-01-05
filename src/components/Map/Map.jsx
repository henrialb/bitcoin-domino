import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import Footer from '../Footer'

import "./styles.scss";

import MapChart from "./MapChart";

const Map = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <h1>BITCOIN DOMINO</h1>
      <p className="site-desc">Tracking the adoption of Bitcoin by nation-states across the world – one domino piece at a time.</p>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Footer />
    </>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Map />, rootElement);

export default Map;
