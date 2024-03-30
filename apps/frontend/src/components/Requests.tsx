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

function createData(
  deliverytype: string,
  requestnum: number,
  sendername: string,
  patientname: string,
  roomnum: number,
  flowertype: string,
  deliverymessage: string,
) {
  return {
    deliverytype,
    requestnum,
    sendername,
    patientname,
    roomnum,
    flowertype,
    deliverymessage,
  };
}

/**This is in here as a placeholder for the actual data*/
const rows = [
  createData(
    "flower",
    0,
    "John Doe",
    "Jane Doe",
    123,
    "Rose",
    "Get Well Soon!",
  ),
  createData(
    "flower",
    1,
    "Jess Smith",
    "Joseph Smith",
    38,
    "Lilly",
    "Good Luck!",
  ),
];

function Requests() {
  return (
    <div>
      <p>not made yet</p>
      /*mostly copied from https://mui.com/material-ui/react-table/ */
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 5 }} aria-label="FLowers Requests Table">
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
            {rows.map((row) => (
              <TableRow
                key={row.deliverytype}
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell component="th" scope="row">
                  {row.deliverytype}
                </TableCell>
                <TableCell>{row.requestnum}</TableCell>
                <TableCell>{row.sendername}</TableCell>
                <TableCell>{row.patientname}</TableCell>
                <TableCell>{row.roomnum}</TableCell>
                <TableCell>{row.flowertype}</TableCell>
                <TableCell>{row.deliverymessage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Requests;
