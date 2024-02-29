import React from "react";
import ReactDOM from "react-dom";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Hotels,
  Trips,
  Drivers,
} from "./components";

import AddDriver from "./components/AddDriver";
import AddHotel from "./components/AddHotel";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Hotels />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/adddrivers" element={<AddDriver />} />
      <Route path="/addhotel" element={<AddHotel />} />

    </Routes>
  </Router>,

  document.getElementById("root")
);


