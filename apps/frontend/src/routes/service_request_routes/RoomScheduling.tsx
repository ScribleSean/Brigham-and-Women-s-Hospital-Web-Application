import React, { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "frontend/src/styles/RoomScheduling.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import {Link, TextField} from "@mui/material";

//PLEASE NOTE that this is simply a copy-paste. There is a table here that will be moved.

type Form = {
  name: string;
  priority: string;
  roomNumber: string;
  startTime: string;
  duration: number;
  status: string;
};
function RoomScheduling() {
  const [formState, setFormState] = useState<Form>({
    name: "",
    priority: "",
    roomNumber: "",
    startTime: "",
    duration: 0,
    status: "",
  });

  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormState({
  //         ...formState,
  //         [event.target.name]: event.target.value,
  //     });
  // };

  function handleNameInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, name: event.target.value });
  }

  function handlePriorityInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, priority: event.target.value });
  }

  function handleRoomInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, roomNumber: event.target.value });
  }

  function handleStartInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, startTime: event.target.value });
  }

  function handleEndInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, duration: event.target.valueAsNumber });
  }

  function handleStatusInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, status: event.target.value });
  }

  return (
    <>
      <div className={"room-scheduling-page-container"}>
        <div className={"roomScheduling vh-100"}>
          <h1 className={"roomSchedulingTitle text-center mb-5 pt-5"}>
            Make a Room Request
          </h1>
          <form
            id={"roomSchedulingForm"}
            className={"container-fluid"}
            // onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Employee's Name</label>
              <input
                type="text"
                name="employeeName"
                placeholder={"Name"}
                value={formState.name}
                onChange={handleNameInput}
                className="form-control"
                required
              />
            </div>
            <div className="row form-group">
              <div className={"col-7"}>
                <div className={"row"}>
                  <label>Request Priority</label>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestPriority"
                      value="Low"
                      onChange={handlePriorityInput}
                      required
                    />
                    <label className="form-check-label">Rose</label>
                  </div>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestPriority"
                      value="Medium"
                      onChange={handlePriorityInput}
                      required
                    />
                    <label className="form-check-label">Rose</label>
                  </div>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestPriority"
                      value="High"
                      onChange={handlePriorityInput}
                      required
                    />
                    <label className="form-check-label">Rose</label>
                  </div>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestPriority"
                      value="Emergency"
                      onChange={handlePriorityInput}
                      required
                    />
                    <label className="form-check-label">Rose</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Location of Request</label>
              <input
                type="text"
                name="requestLocation"
                placeholder={"Location"}
                value={formState.roomNumber}
                onChange={handleRoomInput}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label>Start Time</label>
              <input
                type="datetime-local"
                id="requestStartTime"
                name="requestStartTime"
                placeholder={"Start Time"}
                value={formState.startTime}
                onChange={handleStartInput}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Duration (hrs)</label>
              <input
                type="number"
                id="timeDuration"
                name="timeDuration"
                placeholder={"Duration (hrs)"}
                min="1"
                max="6"
                value={formState.duration}
                onChange={handleEndInput}
                className="form-control"
                required
              />
            </div>

            <div className="row form-group">
              <div className={"col-7"}>
                <div className={"row"}>
                  <label>Request Status</label>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestStatus"
                      value="Unassigned"
                      onChange={handleStatusInput}
                      required
                    />
                    <label className="form-check-label">Unassigned</label>
                  </div>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestStatus"
                      value="Assigned"
                      onChange={handleStatusInput}
                      required
                    />
                    <label className="form-check-label">Assigned</label>
                  </div>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestStatus"
                      value="In Progress"
                      onChange={handleStatusInput}
                      required
                    />
                    <label className="form-check-label">In Progress</label>
                  </div>
                  <div className="form-check col radio-buttons">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="requestStatus"
                      value="Closed"
                      onChange={handleStatusInput}
                      required
                    />
                    <label className="form-check-label">Closed</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={"text-center"}>
              <button type="submit" className="submit-button py-3 px-5">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <div className="boxBehindTable">
        <TableContainer component={Paper} className="tableAlign">
          <Table sx={{ border: 2 }} aria-label="Room Scheduling Table">
            <TableHead>
              <TableRow sx={{ border: 2 }}>
                <TableCell sx={{ border: 2 }}>
                  <b>Employee Name</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Priority</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Request Location</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Start Time</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Duration (hrs.)</b>
                </TableCell>
                <TableCell sx={{ border: 2 }}>
                  <b>Status</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ border: 2 }}>
              <TableRow>
                <TableCell sx={{ border: 2 }}>{formState.name}</TableCell>
                <TableCell sx={{ border: 2 }}>{formState.priority}</TableCell>
                <TableCell sx={{ border: 2 }}>{formState.roomNumber}</TableCell>
                <TableCell sx={{ border: 2 }}>{formState.startTime}</TableCell>
                <TableCell sx={{ border: 2 }}>{formState.duration}</TableCell>
                <TableCell sx={{ border: 2 }}>{formState.status}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default RoomScheduling;
