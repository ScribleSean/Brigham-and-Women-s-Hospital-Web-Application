import { PieChart } from "@mui/x-charts/PieChart";
import styles from "../../styles/Statistics.module.css";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
// import {useState} from "react";
// import { FormControl } from 'react-bootstrap';
// import {InputLabel, MenuItem, Select} from '@mui/material';

type GraphData = {
  label: string;
  value: number;
  color?: string;
};

export default function PieCharts() {
  const [selection, setSelection] = useState("User");
  const [graphData, setGraphData] = useState<GraphData[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };

  useEffect(() => {
    fetch(`/api/pie-request-by-${selection.toLowerCase()}`)
      .then((response) => response.json())
      .then((data: Record<string, number>) => {
        const formattedData = Object.entries(data).map(([label, value]) => ({
          label,
          value,
        }));
        setGraphData(formattedData);
      });
  }, [selection]);

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
            <MenuItem value={"User"}>User</MenuItem>
            <MenuItem value={"Priority"}>Priority</MenuItem>
            <MenuItem value={"Status"}>Status</MenuItem>
          </Select>
        </FormControl>
      </div>
      <PieChart
        series={[
          {
            data: graphData,
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
