import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
} from "@mui/material";
import "../../styles/RoomScheduling.css";
import React, { useEffect, useState } from "react";

//import { useNumberInput } from '@mui/base';

interface FormData {
  employeeName: string; //text box
  priority: string; //radio buttons
  location: string; //text box
  startTime: string; //datetime local
  duration: number; //numbers only
  status: string; //radio buttons
}

function RoomScheduling() {
  const [formData, setFormData] = useState<FormData>({
    employeeName: "", //text box
    priority: "", //radio buttons
    location: "", //text box
    startTime: "", //datetime local
    duration: 0, //numbers only
    status: "", //radio buttons
  });

  const [submittedRequests, setSubmittedRequests] = useState<FormData[]>([]);

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  useEffect(() => {
    console.log(submittedRequests);
  }, [submittedRequests]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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

  //const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //    setFormData({});
  //};

  const addSubmittedRequest = (newRequest: FormData) => {
    setSubmittedRequests([...submittedRequests, newRequest]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmittedRequest(formData);
    setFormData({
      employeeName: "", //text box
      priority: "", //radio buttons
      location: "", //text box
      startTime: "", //datetime local
      duration: 0, //numbers only
      status: "", //radio buttons
    });
  };

  //const RoomScheduling: React.FC = () => {

  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormState({
  //         ...formState,
  //         [event.target.name]: event.target.value,
  //     });
  // };

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

      <div className={"san-div col-10"}>
        <form className={"request-form"} onSubmit={handleSubmit}>
          <h1>Make a Room Request</h1>
          <br />
          <TextField
            label={"Employee Name"}
            variant={"filled"}
            id={"employeeName"}
            sx={{ my: "1%" }}
            onChange={handleTextFieldChange}
            value={formData.employeeName}
            required
          />
          <br />
          <TextField
            label={"Location"}
            variant={"filled"}
            id={"location"}
            sx={{ my: "1%" }}
            onChange={handleTextFieldChange}
            value={formData.location}
            required
          />
          <br />

          <div className={"two-input-row-container"}>
            <FormControl
              variant={"filled"}
              sx={{ width: "49%", marginRight: "1%", my: "1%" }}
              required
            >
              <TextField
                label={"Start Time"}
                variant={"filled"}
                id={"startTime"}
                sx={{ my: "1%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position={"start"}></InputAdornment>
                  ),
                }}
                type={"datetime-local"}
                onChange={handleTextFieldChange}
                value={formData.startTime}
                InputLabelProps={{ shrink: true }}
                required
              />
            </FormControl>
            <FormControl
              variant={"filled"}
              sx={{ width: "49%", marginRight: "1%", my: "1%" }}
              required
            >
              <TextField
                label={"Duration"}
                variant={"filled"}
                id={"duration"}
                type={"number"}
                sx={{ my: "1%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position={"end"}>hrs</InputAdornment>
                  ),
                }}
                onChange={handleTextFieldChange}
                value={formData.duration}
                required
              />
            </FormControl>
          </div>
          <br />

          <div className={"two-input-row-container"}>
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
          <div className={"button-container"}>
            <Button
              variant={"outlined"}
              color={"error"}
              sx={{
                width: "25%",
              }}
              onClick={() => {
                setFormData({
                  employeeName: "", //text box
                  priority: "", //radio buttons
                  location: "", //text box
                  startTime: "", //datetime local
                  duration: 0, //numbers only
                  status: "", //radio buttons
                });
              }}
            >
              Clear
            </Button>
            <Button
              variant={"contained"}
              type={"submit"}
              sx={{
                width: "25%",
                backgroundColor: "#012d5a",
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RoomScheduling;
