import { PieChart } from "@mui/x-charts/PieChart";
import styles from "../../styles/Statistics.module.css";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

type GraphData = {
  label: string;
  value: number;
  color?: string; // Add color property
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
          // color: getColor(index), // Assign a color based on index or any other logic
        }));
        setGraphData(formattedData);
      });
  }, [selection]);

  // Copilot's function to get color based on index, can remove if u want
  //weird because colors will stay the same across all pie charts but u can figure it out
  // const getColor = (index: number): string => {
  //   const colors = [
  //     "#ff0000",
  //     "#00ff00",
  //     "#0000ff",
  //     "#ffff00",
  //     "#ff00ff",
  //     "#00ffff",
  //   ]; // Add more colors as needed
  //   return colors[index % colors.length];
  // };

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
            size={"small"}
            sx={{
              minWidth: "100px",
            }}
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
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { additionalRadius: -20, color: "gray" },
            cx: 250,
          },
        ]}
        height={500}
        margin={{ right: 20, bottom: 150, left: 20 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            labelStyle: { fontSize: 12 },
          },
        }}
      />
    </>
  );
}
