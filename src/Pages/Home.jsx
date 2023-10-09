import React from "react";
import Latest from "../components/Latest";
import Popular from "../components/Popular";
import Actions from "../components/Action";
import Category from "../components/Category";
import Trending from "../components/Trending";

import Horror from "../components/Horror";
import Animation from "../components/Animation";
import Romance from "../components/Romance";
import Video from "../components/Video";
import Comedy from "../components/Comedy";
import SiFi from "../components/SiFi";
import Adventure from "../components/Adventure";
import Sports from "../components/Sports";
import Drama from "../components/Drama";

function Home() {
  return (
    <div>
      <Latest />
      <Category />
      <Trending />
      <Video />
      <Actions />
      <Comedy />
      <Popular />
      <SiFi />
      <Animation />
      <Romance />
      <Horror />
      <Adventure />
      <Sports />
      <Drama />
    </div>
  );
}

export default Home;
