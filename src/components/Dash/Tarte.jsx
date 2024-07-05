import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "Classique", color: "blue" },
  { id: 1, value: 30, label: "Selfworkout", color: "red" },
  { id: 2, value: 30, label: "Build muscle", color: "white" },
  { id: 3, value: 10, label: "Premium", color: "black" },
];

export default function Tarte() {
  return (
    <>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={300}
      />
    </>
  );
}
