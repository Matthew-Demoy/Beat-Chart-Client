import React, { useState } from "react";
import { getCharts } from "./list/chartListSlice";
import { useDispatch} from "react-redux"

const ChartOptions = () => {
    const dispatch = useDispatch()

    const [isPopular, changePopular] = useState<boolean>(true)
    //let popularBtnClasses = ['col-span-3 h-12 my-2']
    //let selectionBtnClasses = ['col-span-3  h-12 my-2"']

    const handlePopularClick = () => {
      dispatch(getCharts(true))
      changePopular(true)
    }

    const handleSelectionClick = () => {
      dispatch(getCharts(false))
      changePopular(false)
    }
    
  return (
    <div className={"grid grid-cols-12 sm:grid-cols-10"}>
      <span className={"col-span-2 sm:col-span-1"} />
      <button className={"col-span-3 h-12 my-2" + (isPopular ? ' bg-gray-400' : '')} onClick={handlePopularClick}>Popular</button>
      <span className={"col-span-2"} >
          
          </span>
      <button className={"col-span-3  h-12 my-2" + (!isPopular && ' bg-gray-400')} onClick={handleSelectionClick} >Selections</button>
      <span className={"col-span-2 sm:col-span-1"} />
    </div>
  );
};
export default ChartOptions;
