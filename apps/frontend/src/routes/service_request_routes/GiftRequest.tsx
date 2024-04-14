import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/GiftRequest.module.css";
import React, { useState } from "react";
import axios from "axios";
import {giftRequest} from "common/src/GiftServiceRequest.ts";

interface FormData {
  employeeName: string;
  location: string;
  giftType: string;
  deliveryDate: string;
  priority: string;
  status: string;
}

function GiftRequest() {
  const [formData, setFormData] = useState<giftRequest>({
    employeeName: "",
    location: "",
    giftType: "",
    deliveryDate: "",
    priority: "",
    status: "",
      serviceType: "Gift",
  });

  const [submittedRequests, setSubmittedRequests] = useState<FormData[]>([]);

  const addSubmittedRequest = (newRequest: FormData) => {
    setSubmittedRequests([...submittedRequests, newRequest]);
  };

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (
    e: SelectChangeEvent<string>,
    field: keyof FormData,
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value as string,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addSubmittedRequest(formData);
    const giftRequestPost = await axios.post("/api/giftServiceRequest", formData);
    console.log(giftRequestPost);
    setFormData({
      employeeName: "",
      location: "",
      giftType: "",
      deliveryDate: "",
      priority: "",
      status: "",
        serviceType: "Gift",
    });
    setSnackbarIsOpen(true);
  };

  return (
    <div>
      <Snackbar
        open={snackbarIsOpen}
        autoHideDuration={5000}
        onClose={() => {
          setSnackbarIsOpen(false);
        }}
        message={"Request was submitted successfully!"}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
      <div className={`${styles.sanDiv} col-10`}>
        <form className={`${styles.requestForm}`} onSubmit={handleSubmit}>
          <h1>Gift Request</h1>
          <h5>Christian and Gabe</h5>
          <br />
          <div className={`${styles.twoInputRow}`}>
            <TextField
              label={"Employee Name"}
              variant={"filled"}
              id={"employeeName"}
              sx={{
                my: "1%",
                width: "49.5%",
                marginRight: "1%",
              }}
              onChange={handleTextFieldChange}
              value={formData.employeeName}
              required
            />
            <TextField
              label={"Location"}
              variant={"filled"}
              id={"location"}
              sx={{
                my: "1%",
                width: "49.5%",
              }}
              onChange={handleTextFieldChange}
              value={formData.location}
              required
            />
          </div>
          <br />
          <div className={`${styles.twoInputRow}`}>
            <FormControl
              variant={"filled"}
              sx={{ width: "49%", marginRight: "1%", my: "1%" }}
              required
            >
              <InputLabel id={"giftType"}>Gift Type</InputLabel>
              <Select
                id={"giftType"}
                onChange={(e) => handleSelectChange(e, "giftType")}
                value={formData.giftType}
              >
                <MenuItem value={"Hat"}>Hat</MenuItem>
                <MenuItem value={"Beanie"}>Beanie</MenuItem>
                <MenuItem value={"Wrist band"}>Wrist band</MenuItem>
                <MenuItem value={"Sticker"}>Sticker</MenuItem>
                <MenuItem value={"T-shirt"}>T-shirt</MenuItem>
                <MenuItem value={"Custom pottery"}>Custom pottery</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label={"Delivery Date"}
              variant={"filled"}
              id={"deliveryDate"}
              sx={{ width: "49%", marginLeft: "1%", my: "1%" }}
              type={"date"}
              InputLabelProps={{ shrink: true }}
              onChange={handleTextFieldChange}
              value={formData.deliveryDate}
            />
          </div>
          <div className={`${styles.twoInputRow}`}>
            <FormControl
              variant={"filled"}
              sx={{ width: "49%", marginRight: "1%", my: "1%" }}
              required
            >
              <InputLabel id={"priority"}>Priority</InputLabel>
              <Select
                id={"priority"}
                onChange={(e) => handleSelectChange(e, "priority")}
                value={formData.priority}
              >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Emergency"}>Emergency</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant={"filled"}
              sx={{ width: "49%", marginLeft: "1%", my: "1%" }}
              required
            >
              <InputLabel id={"status"}>Status</InputLabel>
              <Select
                id={"status"}
                onChange={(e) => handleSelectChange(e, "status")}
                value={formData.status}
              >
                <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                <MenuItem value={"Assigned"}>Assigned</MenuItem>
                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                <MenuItem value={"Closed"}>Closed</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <div className={`${styles.buttonContainer}`}>
            <Button
              variant={"outlined"}
              color={"error"}
              sx={{ width: "25%" }}
              onClick={() => {
                setFormData({
                  employeeName: "",
                  location: "",
                  giftType: "",
                  deliveryDate: "",
                  priority: "",
                  status: "",
                    serviceType: "Gift",
                });
              }}
            >
              Clear
            </Button>
            <Button
              variant={"contained"}
              type={"submit"}
              sx={{ width: "25%", backgroundColor: "#012d5a" }}
            >
              Submit
            </Button>
          </div>
        </form>
        <br />
        <div>
          <h2>Active Requests</h2>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Employee Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Location</b>
                  </TableCell>
                  <TableCell>
                    <b>Gift Type</b>
                  </TableCell>
                  <TableCell>
                    <b>Delivery Date</b>
                  </TableCell>
                  <TableCell>
                    <b>Priority</b>
                  </TableCell>
                  <TableCell>
                    <b>Status</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {submittedRequests.map((request) => (
                  <TableRow>
                    <TableCell>{request.employeeName}</TableCell>
                    <TableCell>{request.location}</TableCell>
                    <TableCell>{request.giftType}</TableCell>
                    <TableCell>{request.deliveryDate}</TableCell>
                    <TableCell>{request.priority}</TableCell>
                    <TableCell>{request.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default GiftRequest;
