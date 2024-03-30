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
import "./Requests.css";

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
    "Flower",
    0,
    "John Doe",
    "Jane Doe",
    123,
    "Rose",
    "Get Well Soon!",
  ),
  createData(
    "Flower",
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
      <div>
        <h1 className="requestsHeader">
          <b>Active Service Requests</b>
        </h1>
      </div>
      <div>
        <TableContainer component={Paper} className="tableAlign">
          <Table sx={{ border: 1 }} aria-label="Flowers Requests Table">
            <TableHead>
              <TableRow sx={{ border: 1 }}>
                <TableCell sx={{ border: 1 }}>Delivery Type</TableCell>
                <TableCell sx={{ border: 1 }}>Request Number</TableCell>
                <TableCell sx={{ border: 1 }}>Sender Name</TableCell>
                <TableCell sx={{ border: 1 }}>Patient Name</TableCell>
                <TableCell sx={{ border: 1 }}>Room Number</TableCell>
                <TableCell sx={{ border: 1 }}>Flower Type</TableCell>
                <TableCell sx={{ border: 1 }}>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ border: 1 }}>
              {rows.map((row) => (
                <TableRow key={row.deliveryType}>
                  <TableCell component="th" scope="row" sx={{ border: 1 }}>
                    {row.deliveryType}
                  </TableCell>
                  <TableCell sx={{ border: 1 }}>{row.requestNum}</TableCell>
                  <TableCell sx={{ border: 1 }}>{row.senderName}</TableCell>
                  <TableCell sx={{ border: 1 }}>{row.patientName}</TableCell>
                  <TableCell sx={{ border: 1 }}>{row.roomNum}</TableCell>
                  <TableCell sx={{ border: 1 }}>{row.flowerType}</TableCell>
                  <TableCell sx={{ border: 1 }}>
                    {row.deliveryMessage}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Requests;
