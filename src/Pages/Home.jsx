import React from "react";
import Latest from "../components/Latest";
import Popular from "../components/Popular";
import Actions from "../components/Action";
import Category from "../components/Category";
import Trending from "../components/Trending";

function Home() {
  return (
    <div>
      <Latest />
      <Category />
      <Actions />
      <Trending />
      <Popular />
    </div>
  );
}

export default Home;
