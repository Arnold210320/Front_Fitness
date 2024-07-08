import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 5240, 2103, 9816, 4658, 8461,
];
const xLabels = [
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
  "Apr 2024",
  "May 2024",
  "Jun 2024",
  "Jui 2024",
  "Aou 2024",
  "Sep 2024",
  "Oct 2024",
  "Nov 2024",
  "Dec 2024",
];

export default function Line() {
  return (
    <>
      <div className="bar-chart-container">
        <BarChart
          width={950}
          height={300}
          series={[{ data: pData, label: "Presence", id: "pvId" }]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          .bar-chart-container {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </>
  );
}
