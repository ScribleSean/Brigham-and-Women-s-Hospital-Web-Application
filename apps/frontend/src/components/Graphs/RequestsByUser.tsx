import styles from "../../styles/Statistics.module.css";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";

type GraphData = {
  label: string;
  data: number[];
};

type DataItem = {
  employeeEmail: string;
  serviceType: string;
  _count: {
    SRID: number;
  };
};

export default function RequestsByUser() {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/request-by-user")
      .then((response) => response.json())
      .then((data: DataItem[]) => {
        const serviceTypes = [...new Set(data.map((item) => item.serviceType))];

        const formattedData = data.reduce(
          (acc: GraphData[], item: DataItem) => {
            const existingItem = acc.find(
              (i: GraphData) => i.label === item.employeeEmail,
            );
            if (existingItem) {
              const index = serviceTypes.indexOf(item.serviceType);
              existingItem.data[index] = item._count.SRID;
            } else {
              const counts = new Array(serviceTypes.length).fill(0);
              counts[serviceTypes.indexOf(item.serviceType)] = item._count.SRID;
              acc.push({
                label: item.employeeEmail,
                data: counts,
              });
            }
            return acc;
          },
          [],
        );
        setGraphData(formattedData);
        setServiceTypes(serviceTypes);
      });
  }, []); // Empty array added here

  return (
    <>
      <h1 className={`${styles.graphTitle}`}>Requests by Type by User</h1>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: serviceTypes,
          },
        ]}
        series={graphData.map((item: GraphData) => ({
          ...item,
          stack: "total",
        }))}
        height={250}
      />
    </>
  );
}
