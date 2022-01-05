import React from "react";

import Header from './components/Header'
import Map from './components/Map/Map'
import Footer from './components/Footer'

import "./styles.scss";

const App = () => {
  return (
    <main>
      <Header />
      <Map />
      <Footer />
    </main>
  )
}

export default App;
