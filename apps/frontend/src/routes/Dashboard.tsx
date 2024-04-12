import styles from "../styles/Dashboard.module.css";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import FlowerDeliveryFields from "../components/RequestFields/FlowerDeliveryFields";
import MedicineFields from "../components/RequestFields/MedicineFields";
import MedicalDeviceFields from "../components/RequestFields/MedicalDeviceFields";
import RoomSchedulingFields from "../components/RequestFields/RoomSchedulingFields";
import GiftFields from "../components/RequestFields/GiftFields";

function Dashboard() {
  // these will get fetched from the backend
  const locationOptions = [
    "Placeholder 1",
    "Placeholder 2",
    "Placeholder 3",
    "Placeholder 4",
    "Placeholder 5",
  ];

  const [currentReqType, setCurrentReqType] = useState(<div></div>);

  const handleRequestTypeChange = (e: SelectChangeEvent<unknown>) => {
    switch (e.target.value) {
      case "Medicine":
        setCurrentReqType(<MedicineFields />);
        break;
      case "Med. Device":
        setCurrentReqType(<MedicalDeviceFields />);
        break;
      case "Room":
        setCurrentReqType(<RoomSchedulingFields />);
        break;
      case "Gift":
        setCurrentReqType(<GiftFields />);
        break;
      case "Flower":
        setCurrentReqType(<FlowerDeliveryFields />);
        break;
      default:
        setCurrentReqType(<div></div>);
        break;
    }
  };

  return (
    <>
      <div className={`${styles.placeholderNavbar}`} />
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.currentRequestsContainer}`}>
          <h1 className={`${styles.sectionHeader}`}>Current Requests</h1>
        </div>
        <div className={`${styles.requestFormContainer}`}>
          <form>
            <div className={`${styles.requestFormHeader}`}>
              <h1 className={`${styles.sectionHeader}`}>Make a Request</h1>
              <FormControl fullWidth sx={{ maxWidth: "48%" }} required>
                <InputLabel id="requestTypeLabel">Request Type</InputLabel>
                <Select
                  labelId="requestTypeLabel"
                  id="requestType"
                  label="Request Type"
                  onChange={(e) => {
                    handleRequestTypeChange(e);
                  }}
                >
                  <MenuItem value={"Flower"}>Flower Delivery</MenuItem>
                  <MenuItem value={"Gift"}>Gift</MenuItem>
                  <MenuItem value={"Medicine"}>Medicine</MenuItem>
                  <MenuItem value={"Med. Device"}>Medical Device</MenuItem>
                  <MenuItem value={"Room"}>Room Scheduling</MenuItem>
                </Select>
              </FormControl>
            </div>
            <hr className={`${styles.divider}`} />
            <div className={`${styles.commonInputsContainer}`}>
              <div className={`${styles.doubleInputRow}`}>
                <TextField
                  fullWidth
                  variant={"outlined"}
                  label={"Employee Name"}
                  sx={{ marginRight: "2%" }}
                  required
                />
                <Autocomplete
                  disablePortal
                  id="location"
                  options={locationOptions}
                  sx={{
                    marginLeft: "2%",
                    width: "100%",
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Location" required />
                  )}
                />
              </div>
              <div
                className={`${styles.doubleInputRow} ${styles.priorityStatus}`}
              >
                <FormControl
                  fullWidth
                  required
                  sx={{
                    maxWidth: "100%",
                    marginRight: "2%",
                  }}
                >
                  <InputLabel id="priorityLabel">Priority</InputLabel>
                  <Select
                    labelId="priorityLabel"
                    id="priority"
                    label="Priority"
                  >
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                    <MenuItem value={"Emergency"}>Emergency</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  required
                  sx={{
                    maxWidth: "100%",
                    marginLeft: "2%",
                  }}
                >
                  <InputLabel id="statusLabel">Status</InputLabel>
                  <Select labelId="statusLabel" id="status" label="Status">
                    <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                    <MenuItem value={"Assigned"}>Assigned</MenuItem>
                    <MenuItem value={"In Progress"}>In Progress</MenuItem>
                    <MenuItem value={"Closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <hr className={`${styles.divider}`} />
            {currentReqType}
            {currentReqType.type != "div" ? (
              <>
                <div className={`${styles.formButtons}`}>
                  <Button
                    id={"clearButton"}
                    variant={"outlined"}
                    color={"error"}
                    sx={{
                      width: "30%",
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    id={"submitButton"}
                    variant={"contained"}
                    sx={{
                      backgroundColor: "#012d5a",
                      color: "white",
                      width: "30%",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </>
            ) : (
              <div>
                <p className={`${styles.tooltip}`}>Select a request type</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
