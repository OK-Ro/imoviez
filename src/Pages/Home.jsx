import React from "react";
import Latest from "../components/Latest";
import Popular from "../components/Popular";
import Actions from "../components/Action";
import Category from "../components/Category";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import Horror from "../components/Horror";
import Animation from "../components/Animation";
import Romance from "../components/Romance";

function Home() {
  return (
    <div>
      <Latest />
      <Category />
      <Trending />
      <Actions />
      <Popular />
      <Animation />
      <Romance />
      <Horror />
      <Footer />
    </div>
  );
}

export default Home;
