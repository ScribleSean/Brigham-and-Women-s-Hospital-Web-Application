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
  deliveryType: string,
  requestNum: number,
  senderName: string,
  patientName: string,
  roomNum: number,
  flowerType: string,
  deliveryMessage: string,
) {
  return {
    deliveryType,
    requestNum,
    senderName,
    patientName,
    roomNum,
    flowerType,
    deliveryMessage,
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
                key={row.deliveryType}
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell component="th" scope="row">
                  {row.deliveryType}
                </TableCell>
                <TableCell>{row.requestNum}</TableCell>
                <TableCell>{row.senderName}</TableCell>
                <TableCell>{row.patientName}</TableCell>
                <TableCell>{row.roomNum}</TableCell>
                <TableCell>{row.flowerType}</TableCell>
                <TableCell>{row.deliveryMessage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Requests;
