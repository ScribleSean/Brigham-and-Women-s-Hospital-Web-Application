import {
  createMuiTheme,
  ThemeProvider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form } from "common/src/form.ts";
import axios from "axios";
import "../styles/Requests.css";

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

const tableTheme = createMuiTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
  },
});

/**This is in here as a placeholder for the actual data*/
const rows = [
  createData(
    "Flower",
    0,
    "John Doe",
    "Jane Doe",
    123,
    "Rose",
    "I'm making this message extremely long to see what happens!" +
      " This message will hopefully wrap around downwards so the box expands down and not off the screen in a really ugly way!",
  ),
  createData(
    "Flower",
    1,
    "Jess Smith",
    "Joseph Smith",
    38,
    "Lily",
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
      <div className="boxBehindTable">
        <h1 className="filterHeader">
          <b>
            <u>Filter By Type:</u>
          </b>
        </h1>
        <br />
        <input type="checkbox" id="Flower" name="Flower" />
        <label htmlFor="Flower" className="filterOption">
          Flowers
        </label>
        <input type="checkbox" id="soon" name="soon" />
        <label htmlFor="soon" className="filterOption">
          Coming Soon
        </label>
      </div>
      <br />
      <div className="boxBehindTable">
        <ThemeProvider theme={tableTheme}>
          <TableContainer component={Paper} className="tableAlign">
            <Table sx={{ border: 2 }} aria-label="Flowers Requests Table">
              <TableHead>
                <TableRow sx={{ border: 2 }}>
                  <TableCell sx={{ border: 2 }}>
                    <b>Delivery Type</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Request Number</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Sender Name</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Patient Name</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Room Number</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Flower Type</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Message</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ border: 2 }}>
                {rows.map((row) => (
                  <TableRow key={row.deliveryType}>
                    <TableCell sx={{ border: 2 }}>{row.deliveryType}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.requestNum}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.senderName}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.patientName}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.roomNum}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.flowerType}</TableCell>
                    <TableCell sx={{ border: 2 }}>
                      {row.deliveryMessage}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Requests;

export function Requests1() {
  const [requestData, setRequestData] = useState<Form[]>();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/request");
      setRequestData(res.data);
      console.log("successfully got data from get request");
    }
    fetchData().then();
  }, []);

  return (
    <div>
      <div>
        <h1 className="requestsHeader">
          <b>Active Service Requests</b>
        </h1>
      </div>
      <div className="boxBehindTable">
        <h1 className="filterHeader">
          <b>
            <u>Filter By Type:</u>
          </b>
        </h1>
        <br />
        <input type="checkbox" id="Flower" name="Flower" />
        <label htmlFor="Flower" className="filterOption">
          Flowers
        </label>
        <input type="checkbox" id="soon" name="soon" />
        <label htmlFor="soon" className="filterOption">
          Coming Soon
        </label>
      </div>
      <br />
      <div className="boxBehindTable">
        <TableContainer component={Paper} className="tableAlign">
          <Table sx={{ border: 2 }} aria-label="Flowers Requests Table">
            <TableHead>
              <TableRow sx={{ border: 2 }}>
                <TableCell sx={{ border: 2 }}>
                  <b>Delivery Type</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Sender Name</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Patient Name</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Room Number</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Flower Type</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Message</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ border: 2 }}>
              {requestData != undefined ? (
                requestData.map((row) => (
                  <TableRow>
                    <TableCell sx={{ border: 2 }}>Flower</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.senderName}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.receiverName}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.roomNumber}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.flowerType}</TableCell>
                    <TableCell sx={{ border: 2 }}>{row.message}</TableCell>
                  </TableRow>
                ))
              ) : (
                <></>
              )}
              ;
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
