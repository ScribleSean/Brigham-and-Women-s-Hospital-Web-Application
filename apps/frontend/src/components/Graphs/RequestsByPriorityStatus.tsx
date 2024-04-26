import styles from "../../styles/Statistics.module.css";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

type GraphData = {
  label: string;
  data: number[];
  color?: string;
};

function RequestsByPriority() {
  const low: GraphData = {
    label: "Low",
    data: [2, 4, 1, 4, 3, 1, 8],
    color: "#00b300",
  };

  const medium: GraphData = {
    label: "Medium",
    data: [1, 3, 3, 2, 5, 2, 1],
    color: "#ffcc00",
  };

  const high: GraphData = {
    label: "High",
    data: [5, 1, 1, 6, 2, 3, 2],
    color: "#ff6600",
  };

  const emergency: GraphData = {
    label: "Emergency",
    data: [3, 2, 5, 4, 1, 1, 4],
    color: "#ff0000",
  };

  return (
    <>
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
          { ...low, stack: "total" },
          { ...medium, stack: "total" },
          { ...high, stack: "total" },
          {
            ...emergency,
            stack: "total",
          },
        ]}
        // width={500}
        height={250}
      />
    </>
  );
}

function RequestsByStatus() {
  const unassigned: GraphData = {
    label: "Unassigned",
    data: [2, 4, 1, 4, 3, 1, 8],
  };

  const assigned: GraphData = {
    label: "Assigned",
    data: [1, 3, 3, 2, 5, 2, 1],
  };

  const inProgress: GraphData = {
    label: "In Progress",
    data: [5, 1, 1, 6, 2, 3, 2],
  };

  const closed: GraphData = {
    label: "Closed",
    data: [3, 2, 5, 4, 1, 1, 4],
  };

  return (
    <>
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
          { ...unassigned, stack: "total" },
          { ...assigned, stack: "total" },
          {
            ...inProgress,
            stack: "total",
          },
          { ...closed, stack: "total" },
        ]}
        // width={500}
        height={250}
      />
    </>
  );
}

export default function RequestsByPriorityStatus() {
  const [selection, setSelection] = useState("Priority");
  return (
    <>
      <div className={`${styles.chartHeader}`}>
        <h1 className={`${styles.graphTitle}`}>
          Requests by Type by {selection}
        </h1>
        <ToggleButtonGroup
          value={selection}
          exclusive
          onChange={(event, newSelection) => {
            if (newSelection) {
              setSelection(newSelection);
            }
          }}
          size={"small"}
        >
          <ToggleButton value={"Priority"}>Priority</ToggleButton>
          <ToggleButton value={"Status"}>Status</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {selection === "Priority" ? <RequestsByPriority /> : <RequestsByStatus />}
    </>
  );
}
