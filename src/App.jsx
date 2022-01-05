import React from "react";

import Header from './components/Header'
import Map from './components/Map/Map'
import Footer from './components/Footer'

import "./styles.scss";

const App = () => {
  return (
    <div id="wrapper">
      <Header />
      <Map />
      <Footer />
    </div>
  )
}

export default App;
