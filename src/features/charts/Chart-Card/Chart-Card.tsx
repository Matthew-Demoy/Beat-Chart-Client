import moment from "moment";
import React from "react";
import { getSignedURLForObject } from "../../../core/aws";

const timeFromDate = (input: string) => {
  const today = moment();
  const date = moment(input);

  const diff = today.diff(date, "days");

  switch (diff) {
    case 0:
      return "Today";
    case 1:
      return diff + " day";
    default:
      return diff + " days";
  }
};
type ChartCardProps = {
  chart: Playlist;
};

const ChartCard = (props: ChartCardProps) => {
  const { chart } = props;
  return (
    <div className={"bg-white overflow-hidden rounded shadow"}>
      <div className={"inline-block "}>
        <img alt="playlist cover" src={getSignedURLForObject(chart.cover)} />
      </div>

      <div className={"bg-white p-2 grid grid-cols-2 gap-2"}>
        <div className={"text-left"}>{chart.name}</div>
        <div className={"text-right"}>{timeFromDate(chart.lastUpdated)}</div>
        <button
          className={"col-span-1 border-t-1 border-black bg-gray-400 p-2 "}
        >
          View
        </button>
        <a
          className={"col-span-1 border-t-1 border-black bg-gray-400 p-2 "}
          href={"https://open.spotify.com/playlist/" + chart.spotifyLink}
        >
          <button>Spotify</button>
        </a>

        <div></div>
      </div>
    </div>
  );
};
export { ChartCard };
