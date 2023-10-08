import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import Details from "../Hooks/Details";

import SearchBar from "../components/SearchBar";
import SearchedResults from "../components/SearchedResults";
import Watchlist from "./Watchlist";
import ActionMovies from "./ActionMovies";

function PagesRoutes() {
  return (
    <Routes>
      <Route path="/searchedResults/:query" element={<SearchedResults />} />
      <Route path="/searchbar" element={<SearchBar />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/actionmovies" element={<ActionMovies />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default PagesRoutes;
