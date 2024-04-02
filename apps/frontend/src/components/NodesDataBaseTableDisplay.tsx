import React, { useState, useEffect } from "react";
import { node } from "common/src/interfaces.ts";
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

function GenerateTableRowsNodes(tableData: node[]): JSX.Element[] {
  return tableData.map((item, index) => (
    <StyledTableRow key={index}>
      <StyledTableCell>{tableData[index].nodeID}</StyledTableCell>
      <StyledTableCell>{tableData[index].xcoord}</StyledTableCell>
      <StyledTableCell>{tableData[index].ycoord}</StyledTableCell>
      <StyledTableCell>{tableData[index].floor}</StyledTableCell>
      <StyledTableCell>{tableData[index].building}</StyledTableCell>
      <StyledTableCell>{tableData[index].nodeType}</StyledTableCell>
      <StyledTableCell>{tableData[index].longName}</StyledTableCell>
      <StyledTableCell>{tableData[index].shortName}</StyledTableCell>
    </StyledTableRow>
  ));
}

const TableNodes: React.FC<{ tableData: node[] }> = ({ tableData }) => {
  return (
    <StyledTableContainer>
      <Table size={"small"}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Node ID</StyledTableCell>
            <StyledTableCell>X-Coordinate</StyledTableCell>
            <StyledTableCell>Y-Coordinate</StyledTableCell>
            <StyledTableCell>Floor</StyledTableCell>
            <StyledTableCell>Building</StyledTableCell>
            <StyledTableCell>Node Type</StyledTableCell>
            <StyledTableCell>Long Name</StyledTableCell>
            <StyledTableCell>Short Name</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>{GenerateTableRowsNodes(tableData)}</TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export const GetDataNodes = () => {
  const [data, setData] = useState<node[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await fetch("/api/node-populate");

        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`Please load node data ${response.status}`);
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
      <TableNodes tableData={data}></TableNodes>
    </div>
  );
};
