import React, { useState } from "react";
import { getCharts } from "./list/chartListSlice";
import { useDispatch } from "react-redux";
import Button from "../../components/button";

const ChartOptions = () => {
  const dispatch = useDispatch();

  const [isPopular, changePopular] = useState<boolean>(true);
  //let popularBtnClasses = ['col-span-3 h-12 my-2']
  //let selectionBtnClasses = ['col-span-3  h-12 my-2"']

  const handlePopularClick = () => {
    dispatch(getCharts(true));
    changePopular(true);
  };

  const handleSelectionClick = () => {
    dispatch(getCharts(false));
    changePopular(false);
  };

  return (
    <div className={"grid grid-cols-12 sm:grid-cols-10"}>
      <span className={"col-span-1 sm:col-span-1"} />
      <Button
        isEnabled={true}
        isPrimary={isPopular}
        onClick={handlePopularClick}
        className={" col-span-4 sm:col-span-3 h-12 my-2"}
      >
        {"Popular"}
      </Button>
      
      <span className={"col-span-2"}></span>
      <Button
        isEnabled={true}
        isPrimary={!isPopular}
        onClick={handleSelectionClick}
        className={"col-span-4 sm:col-span-3 h-12 my-2"}
      >
        {"Selection"}
      </Button>


      
    </div>
  );
};
export default ChartOptions;
