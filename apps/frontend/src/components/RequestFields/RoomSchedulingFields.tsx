import styles from "../../styles/RequestFields.module.css";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { roomSchedulingRequest } from "common/src/backend_interfaces/roomSchedulingRequest.ts";
import axios from "axios";

function RoomSchedulingFields() {
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [employeeEmailOptions, setemployeeEmailOptions] = useState<string[]>(
    [],
  );

  const fetchEmployeeEmail = async () => {
    try {
      const response = await axios.get("/api/employee-email-fetch");
      const employeeEmails = response.data.map(
        (employeeEmail: { employeeEmail: string }) =>
          employeeEmail.employeeEmail,
      );
      setemployeeEmailOptions(employeeEmails);
    } catch (error) {
      console.error("Failed to fetch employee emails", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await axios.get("/api/room-name-fetch");
      const nodeIDNames = response.data.map(
        (location: { nodeID: string }) => location.nodeID,
      );
      setLocationOptions(nodeIDNames);
    } catch (error) {
      console.error("Failed to fetch locations", error);
    }
  };

  const [formData, setFormData] = useState<roomSchedulingRequest>({
    SRID: 0,
    employeeEmail: "",
    location: "",
    priority: "",
    status: "",
    startTime: "",
    endTime: "",
    description: "",
    serviceType: "Room Scheduling",
  });

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<unknown>, field: string) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleAutocompleteChange = (value: string | null) => {
    if (value) {
      setFormData({
        ...formData,
        location: value,
      });
    }
  };
  const handleEmployeeEmailAutocompleteChange = (value: string | null) => {
    if (value) {
      setFormData({
        ...formData,
        employeeEmail: value,
      });
    }
  };

  useEffect(() => {
    fetchLocations();
    fetchEmployeeEmail();
  }, []);

  const resetForm = () => {
    setFormData({
      SRID: 0,
      employeeEmail: "",
      location: "",
      priority: "",
      status: "",
      startTime: "",
      endTime: "",
      description: "",
      serviceType: "Room Scheduling",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // comment out if this is a gabe issue

    try {
      const response = await axios.post(
        "/api/room-scheduling-request",
        formData,
      );
      console.log(response.data);
    } catch (error) {
      console.error("Unable to create form");
      console.log(error);
    }
    setSnackbarIsOpen(true);
    resetForm();
  };

  return (
    <>
      <Snackbar
        open={snackbarIsOpen}
        autoHideDuration={5000}
        onClose={() => {
          setSnackbarIsOpen(false);
        }}
        message={"Request was submitted successfully!"}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
      <form onSubmit={handleSubmit}>
        <div className={`${styles.commonInputsContainer}`}>
          <div className={`${styles.doubleInputRow}`}>
            <Autocomplete
              id="employeeEmail"
              options={employeeEmailOptions}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Employee Email" required />
              )}
              value={formData.employeeEmail}
              onChange={(e, value) =>
                handleEmployeeEmailAutocompleteChange(value)
              }
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
              value={formData.location}
              onChange={(e, value) => handleAutocompleteChange(value)}
            />
          </div>
          <div className={`${styles.doubleInputRow} ${styles.priorityStatus}`}>
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
                value={formData.priority}
                onChange={(e) => handleSelectChange(e, "priority")}
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
              <Select
                labelId="statusLabel"
                id="status"
                label="Status"
                value={formData.status}
                onChange={(e) => handleSelectChange(e, "status")}
              >
                <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                <MenuItem value={"Assigned"}>Assigned</MenuItem>
                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                <MenuItem value={"Closed"}>Closed</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <hr className={`${styles.divider}`} />
        <div className={`${styles.doubleInputRow}`}>
          <TextField
            id={"startTime"}
            fullWidth
            variant={"outlined"}
            label={"Start Time"}
            type={"datetime-local"}
            InputLabelProps={{ shrink: true }}
            sx={{
              marginRight: "2%",
            }}
            required
            value={formData.startTime}
            onChange={handleTextFieldChange}
          />
          <TextField
            id={"endTime"}
            fullWidth
            variant={"outlined"}
            label={"End Time"}
            type={"datetime-local"}
            InputLabelProps={{ shrink: true }}
            sx={{
              marginLeft: "2%",
            }}
            required
            value={formData.endTime}
            onChange={handleTextFieldChange}
          />
        </div>
        <div className={`${styles.descriptionField}`}>
          <TextField
            id={"description"}
            fullWidth
            variant={"outlined"}
            label={"Description (optional)"}
            multiline
            rows={5}
            value={formData.description}
            onChange={handleTextFieldChange}
          />
        </div>
        <p className={`${styles.footer}`}>Created by Ethan & Lorenzo</p>
        <div className={`${styles.formButtons}`}>
          <Button
            id={"clearButton"}
            variant={"outlined"}
            color={"error"}
            sx={{
              width: "30%",
            }}
            onClick={resetForm}
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
            type={"submit"}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default RoomSchedulingFields;
