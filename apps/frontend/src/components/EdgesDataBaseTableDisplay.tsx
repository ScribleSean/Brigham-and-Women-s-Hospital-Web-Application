import React, { useState, useEffect } from "react";
import { edge } from "common/src/interfaces.ts";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#012D5A",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  borderRadius: 10, // Adjust the value as per your preference
}));

function GenerateTableRowsEdges(tableData: edge[]): JSX.Element[] {
  return tableData.map((item, index) => (
    <StyledTableRow key={index}>
      <StyledTableCell>{tableData[index].edgeID}</StyledTableCell>
      <StyledTableCell>{tableData[index].startNodeID}</StyledTableCell>
      <StyledTableCell>{tableData[index].endNodeID}</StyledTableCell>
    </StyledTableRow>
  ));
}

const TableEdges: React.FC<{ tableData: edge[] }> = ({ tableData }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Edge ID</StyledTableCell>
            <StyledTableCell>Start Node ID</StyledTableCell>
            <StyledTableCell>End Node ID</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>{GenerateTableRowsEdges(tableData)}</TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export const GetDataEdges = () => {
  const [data, setData] = useState<edge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await fetch("/api/edge-populate");

        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(
            `Please load edge data and ensure that node data is already populated ${response.status}`,
          );
        }

        // Parse the JSON response
        const result = await response.json();

        // Set the data in the state
        setData(result);
      } catch (err) {
        // Handle errors
        console.log(err);
      } finally {
        // Set loading to false, indicating that the request has completed
        setLoading(false);
      }
    };

    fetchData().then();
  }, []); //

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TableEdges tableData={data}></TableEdges>
    </div>
  );
};
