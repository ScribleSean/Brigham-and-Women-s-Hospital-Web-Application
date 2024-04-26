import styles from "../../styles/Statistics.module.css";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

type GraphData = {
  label: string;
  data: number[];
};

export default function RequestsByUser() {
  const gus: GraphData = {
    label: "Gus",
    data: [2, 4, 1, 4, 3, 1, 8],
  };

  const christian: GraphData = {
    label: "Christian",
    data: [1, 3, 3, 2, 5, 2, 1],
  };

  const gabe: GraphData = {
    label: "Gabe",
    data: [5, 1, 1, 6, 2, 3, 2],
  };

  return (
    <>
      <h1 className={`${styles.graphTitle}`}>Requests by Type by User</h1>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [
              "Flower Delivery",
              "Gift Delivery",
              "Medicine",
              "Medical Device",
              "Room Sched.",
              "Religious",
              "Food Delivery",
            ],
          },
        ]}
        series={[
          { ...gus, stack: "total" },
          { ...christian, stack: "total" },
          { ...gabe, stack: "total" },
        ]}
        // width={500}
        height={250}
      />
    </>
  );
}
