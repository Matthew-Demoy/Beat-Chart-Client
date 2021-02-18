import React from "react";
import ChartOptions from "../charts/ChartOptions";
import { Top100List } from "../charts/list/chartList";

const Homepage = () => {
  return (
    <div className={"grid grid-cols-12"}>
      <div className={"col-span-1 sm:col-span-2"}>
        
      </div>
      <div className={"col-span-10 sm:col-span-8"}>
          <div>
              <div>The best DJ Charts</div>
              <div>Now on Spotify</div>
          </div>
          <ChartOptions />
        <Top100List />
      </div>
    </div>
  );
};

export default Homepage;
