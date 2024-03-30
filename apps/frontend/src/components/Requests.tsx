import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function Requests() {
  return (
    <div>
      <p>not made yet</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} aria-label="Requests Table">
          <TableHead>
            <TableRow>
              <TableCell>Delivery Type</TableCell>
              <TableCell>Request Number</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Requests;
