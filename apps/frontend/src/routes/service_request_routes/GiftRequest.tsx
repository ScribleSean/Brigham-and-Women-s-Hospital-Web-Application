// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const GiftRequest: React.FC = () => {
  // const [formState, setFormState] = useState({
  //     employeeName: "", // text box
  //     priority: "", // drop down
  //     location: "", // drop down
  //     giftType: "", // drop down
  //     deliveryTime: "", // date picker
  //     status: "" // radio button
  // });

  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormState({
  //         ...formState,
  //         [event.target.name]: event.target.value,
  //     });
  // };
  // const handleSubmit = async (event: React.FormEvent) => {
  //     event.preventDefault();
  //     setIsSubmitted(true);
  // Handle form submission here
  // try {
  //     const response = await axios.post("/api/form", formState);
  //     console.log("Form data sent successfully:", response.data);
  // } catch (error) {
  //     console.error("Error submitting form data:", error);
  // }
  // };

  return (
    <>
      <div
        className={"container text-center bg-secondary justify-content-center"}
      >
        <form className={"text-center"}>
          <div className={"row"}>
            <div className="form-group">
              <label>Employee Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div className={"row"}>
            <div className={"col"}>
              <label>Priority</label>
              <select className="form-select">
                <option>Unassigned</option>
                <option>Assigned</option>
                <option>InProgress</option>
                <option>Closed</option>
              </select>
            </div>
            <div className={"col"}>
              <label>Location</label>
              <select className="form-select">
                <option>Node 1</option>
                <option>Node 2</option> //todo: connect to database Nodes
              </select>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col"}>
              <label>giftType</label>
              <select className="form-select">
                <option>Hat</option>
                <option>Beanie</option>
                <option>Wrist Band</option>
                <option>Sticker</option>
              </select>
            </div>
            <div className={"col"}>
              {/*<LocalizationProvider dateAdapter={AdapterDayjs}> c*/}
              {/*    <DatePicker />*/}
              {/*</LocalizationProvider>*/}
              <label>date </label>
              <select className="form-select">
                <option>Node 1</option>
                <option>Node 2</option>
                //todo: connect to database Nodes
              </select>
              {/* todo: get the date picker to actually work*/}
            </div>
          </div>
          <div className={"row"}>
            <label>Status</label>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option1"
                />
                <label className="form-check-label">1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option2"
                />
                <label className="form-check-label">2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option2"
                />
                <label className="form-check-label">2</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default GiftRequest;
