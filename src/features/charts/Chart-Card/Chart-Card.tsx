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
    <div className={" overflow-hidden "}>
      <a
        href={"https://open.spotify.com/playlist/" + chart.spotifyLink}
        target="_blank"
        rel="noreferrer"
      >
        <div className={"inline-block "}>
          <img alt="playlist cover" src={getSignedURLForObject(chart.cover)} />
        </div>

        <div className={" p-1 grid grid-cols-4 gap-2"}>
          <div className={"text-left font-semibold col-span-3"}>
            {chart.name}
          </div>
          <div className={"text-right"}>{timeFromDate(chart.lastUpdated)}</div>

          <div></div>
        </div>
      </a>
    </div>
  );
};
export { ChartCard };
