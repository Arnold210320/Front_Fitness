import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Line() {
  return (
    <>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [0, 50, 110, 150, 100, 200],
            area: true,
          },
        ]}
        width={1020}
        height={300}
      />
    </>
  );
}
