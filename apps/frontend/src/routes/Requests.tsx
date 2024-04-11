import {
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ServiceRequest } from "common/src/serviceRequestTemp.ts";
import axios from "axios";
import "../styles/Requests.css";

function Requests() {
  const [requestData, setRequestData] = useState<ServiceRequest[]>();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/service-request");
      setRequestData(res.data);
      console.log("successfully got data from get request");
    }
    fetchData().then();
  }, []);

    const handlePriorityChange = async (row: ServiceRequest, event: React.ChangeEvent<{ value: unknown }>) => {
        // Update the priority of the ServiceRequest object
        row.status = event.target.value as string;

        try {
            // Send a POST request to the server with the updated ServiceRequest object
            const response = await axios.post("/api/service-request", row);
            console.log("Form data sent successfully:", response.data);
        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    };

  return (
    <div>
      <div className={"requests-page-container"}>
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
          <label htmlFor="Flower" className="filterOption">
            <input type="checkbox" id="soon" name="soon" />
            Flower
          </label>
          <label htmlFor="soon" className="filterOption">
            <input type="checkbox" id="soon" name="soon" />
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
                    <b>Service ID</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Request Type</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Employee Name</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Location</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Priority</b>
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <b>Status</b>
                  </TableCell>
                  {/*<TableCell sx={{ border: 2 }}>*/}
                  {/*  <b>Receiver Name</b>*/}
                  {/*</TableCell>*/}
                  {/*  <TableCell sx={{ border: 2 }}>*/}
                  {/*      <b>Delivery Date</b>*/}
                  {/*  </TableCell>*/}
                </TableRow>
              </TableHead>
              <TableBody sx={{ border: 2 }}>
                {requestData != undefined ? (
                  requestData.map((row) => (
                    <TableRow>
                      <TableCell sx={{ border: 2 }}>{row.SRID}</TableCell>
                      <TableCell sx={{ border: 2 }}>
                        {row.serviceType}
                      </TableCell>
                      <TableCell sx={{ border: 2 }}>
                        {row.employeeName}
                      </TableCell>
                      <TableCell sx={{ border: 2 }}>{row.location}</TableCell>
                      <TableCell sx={{ border: 2 }}>{row.priority}</TableCell>
                      <TableCell sx={{ border: 2 }}>
                        <FormControl size={"small"}>
                          <Select
                            id={"status-selector"}
                            defaultValue={row.status}
                            onChange={(event) => handlePriorityChange(row, event)}
                          >
                            <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                            <MenuItem value={"Assigned"}>Assigned</MenuItem>
                            <MenuItem value={"In Progress"}>
                              In Progress
                            </MenuItem>
                            <MenuItem value={"Closed"}>Closed</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      {/*<TableCell sx={{ border: 2 }}>{row.receiverName}</TableCell>*/}
                      {/*<TableCell sx={{ border: 2 }}>{row.date}</TableCell>*/}
                    </TableRow>
                  ))
                ) : (
                  <></>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Requests;
