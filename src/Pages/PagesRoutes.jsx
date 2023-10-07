import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";

function PagesRoutes() {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default PagesRoutes;
