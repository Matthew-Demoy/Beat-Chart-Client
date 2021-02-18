import React from "react";
import { getCharts } from "./list/chartListSlice";
import { useDispatch} from "react-redux"

const ChartOptions = () => {
    const dispatch = useDispatch()
  return (
    <div className={"grid grid-cols-12 sm:grid-cols-10"}>
      <span className={"col-span-2 sm:col-span-1"} />
      <button className={"col-span-3 h-12 my-2"} onClick={()=>{dispatch(getCharts(true))}}>Popular</button>
      <span className={"col-span-2"} >
          
          </span>
      <button className={"col-span-3  h-12 my-2"} onClick={()=>{dispatch(getCharts(false))}} >Selections</button>
      <span className={"col-span-2 sm:col-span-1"} />
    </div>
  );
};
export default ChartOptions;
