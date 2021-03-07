import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartCard } from "../Chart-Card/Chart-Card";
import { getCharts, selectCharts } from "./chartListSlice";


export const Top100List = () => {
  
  const playlists = useSelector(selectCharts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharts(true))
  },[dispatch]);

  
  const listItems = playlists.map((chart) => {
    return (
      <ChartCard chart={chart} />
    );
  });

  return <div className={"grid grid-cols-1 sm:grid-cols-2 gap-8"}>{listItems}</div>;
};
