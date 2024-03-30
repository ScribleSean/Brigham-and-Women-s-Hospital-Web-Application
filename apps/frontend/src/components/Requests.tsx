import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

//This is in here as a placeholder for the actual data
/*
const rows = [
  12345,
  "Jim Brown",
  "Jane Brown",
  123,
  "violets",
  "Get well soon! See you after work!",
];
*/

function Requests() {
  return (
    <div>
      <p>not made yet</p>
      /*mostly copied from https://mui.com/material-ui/react-table/ */
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} aria-label="FLowers Requests Table">
          <TableHead>
            <TableRow>
              <TableCell>Delivery Type</TableCell>
              <TableCell>Request Number</TableCell>
              <TableCell>Sender Name</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Room Number</TableCell>
              <TableCell>Flower Type</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            /*gets really messy without the actual data structure*/
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Requests;
