import { PieChart } from "@mui/x-charts/PieChart";
import styles from "../../styles/Statistics.module.css";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
// import {useState} from "react";
// import { FormControl } from 'react-bootstrap';
// import {InputLabel, MenuItem, Select} from '@mui/material';

type GraphData = {
  label: string;
  value: number;
  color?: string;
};

function PercentageType() {
  const flowerDelivery: GraphData = {
    label: "Flower Delivery",
    value: 10,
  };
  const giftDelivery: GraphData = {
    label: "Gift Delivery",
    value: 15,
  };
  const medicine: GraphData = {
    label: "Medicine",
    value: 12,
  };
  const medicalDevice: GraphData = {
    label: "Medical Device",
    value: 11,
  };
  const roomScheduling: GraphData = {
    label: "Room Scheduling",
    value: 8,
  };
  const religious: GraphData = {
    label: "Religious",
    value: 5,
  };
  const foodDelivery: GraphData = {
    label: "Food Delivery",
    value: 18,
  };

  return (
    <>
      <PieChart
        series={[
          {
            data: [
              flowerDelivery,
              giftDelivery,
              medicine,
              medicalDevice,
              roomScheduling,
              religious,
              foodDelivery,
            ],
          },
        ]}
        height={500}
        margin={{ bottom: 100 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
      />
    </>
  );
}

function PercentageUser() {
  const gus: GraphData = {
    label: "Gus",
    value: 10,
  };
  const christian: GraphData = {
    label: "Christian",
    value: 15,
  };
  const gabe: GraphData = {
    label: "Gabe",
    value: 12,
  };

  return (
    <>
      <PieChart
        series={[
          {
            data: [gus, christian, gabe],
          },
        ]}
        height={500}
        margin={{ bottom: 100 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
      />
    </>
  );
}

function PercentagePriority() {
  const low: GraphData = {
    label: "Low",
    value: 10,
  };
  const medium: GraphData = {
    label: "Medium",
    value: 15,
  };
  const high: GraphData = {
    label: "High",
    value: 12,
  };
  const emergency: GraphData = {
    label: "Emergency",
    value: 11,
  };

  return (
    <>
      <PieChart
        series={[
          {
            data: [low, medium, high, emergency],
          },
        ]}
        height={500}
        margin={{ bottom: 100 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
      />
    </>
  );
}

function PercentageStatus() {
  const unassigned: GraphData = {
    label: "Unassigned",
    value: 10,
  };
  const assigned: GraphData = {
    label: "Assigned",
    value: 15,
  };
  const inProgress: GraphData = {
    label: "In Progress",
    value: 12,
  };
  const closed: GraphData = {
    label: "Closed",
    value: 11,
  };

  return (
    <>
      <PieChart
        series={[
          {
            data: [unassigned, assigned, inProgress, closed],
          },
        ]}
        height={500}
        margin={{ bottom: 100 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
      />
    </>
  );
}

export default function PieCharts() {
  const [selection, setSelection] = useState("Type");

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };

  return (
    <>
      <div className={`${styles.chartHeader}`}>
        <h1 className={`${styles.graphTitle}`}>
          Percentage of Requests by {selection}
        </h1>
        <FormControl>
          <Select
            value={selection}
            onChange={handleChange}
            defaultValue={"Type"}
          >
            <MenuItem value={"Type"}>Type</MenuItem>
            <MenuItem value={"User"}>User</MenuItem>
            <MenuItem value={"Priority"}>Priority</MenuItem>
            <MenuItem value={"Status"}>Status</MenuItem>
          </Select>
        </FormControl>
      </div>
      {selection === "Type" ? (
        <PercentageType />
      ) : selection === "User" ? (
        <PercentageUser />
      ) : selection === "Priority" ? (
        <PercentagePriority />
      ) : (
        <PercentageStatus />
      )}
    </>
  );
}
