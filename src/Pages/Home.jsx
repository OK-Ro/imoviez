import React from "react";
import Latest from "../components/Latest";
import Popular from "../components/Popular";
import Actions from "../components/Action";
import Category from "../components/Category";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import Horror from "../components/Horror";
import Animation from "../components/Animation";

function Home() {
  return (
    <div>
      <Latest />
      <Category />
      <Actions />
      <Trending />
      <Animation />
      <Popular />
      <Horror />
      <Footer />
    </div>
  );
}

export default Home;
