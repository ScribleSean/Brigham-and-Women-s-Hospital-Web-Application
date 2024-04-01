import React, { useState } from "react";
import "frontend/src/style_sheets/FlowerDelivery.css";
// import {Button} from "@mui/material";
// import {Link} from "react-router-dom"; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// interface FlowerDeliveryProps {
//   // Define your props here
// }

const FlowerDelivery: React.FC = () => {
  const [formState, setFormState] = useState({
    senderName: "", //text box
    receiverName: "", //text box
    roomNumber: "", //numbers only
    flowerType: "", //radio buttons
    message: "", //text box
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
    try {
      const response = await axios.post("/api/form", formState);
      console.log("Form data sent successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return isSubmitted ? (
    <div className={"flowerPage submitted-form"}>
      <h2>Order Received</h2>
      <p>Sender Name: {formState.senderName}</p>
      <p>Receiver Name: {formState.receiverName}</p>
      <p>Room Number: {formState.roomNumber}</p>
      <p>Flower Type: {formState.flowerType}</p>
      <p>Message: {formState.message}</p>
      {/*<div>*/}
      {/*    <Link to={"/"} className={"backButton"}>*/}
      {/*        <Button>Back to Homepage</Button>*/}
      {/*    </Link>*/}
      {/*    <Link to={"/Map"} className={"mapButton"}>*/}
      {/*        <Button>To Map</Button>*/}
      {/*    </Link>*/}
      {/*</div>*/}
    </div>
  ) : (
    <div className={"flowerPage container-fluid"}>
      <h1 id={"flowerPageHeader"} className={"mb-3"}>
        Order Flowers For A Loved One
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Sender's Name:
            <input
              type="text"
              name="senderName"
              value={formState.senderName}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Receiver's Name:
            <input
              type="text"
              name="receiverName"
              value={formState.receiverName}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Room Number:
            <input
              type="text"
              name="roomNumber"
              value={formState.roomNumber}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group mx-3">
          <div className={"row"}>
            <label>Flower Type:</label>
            <br />
            <div className="form-check col radio-buttons">
              <input
                className="form-check-input"
                type="radio"
                name="flowerType"
                value="Rose"
                onChange={handleChange}
              />
              <label className="form-check-label">Rose</label>
            </div>
            <div className="form-check col radio-buttons">
              <input
                className="form-check-input"
                type="radio"
                name="flowerType"
                value="Tulip"
                onChange={handleChange}
              />
              <label className="form-check-label">Tulip</label>
            </div>
            <div className="form-check col radio-buttons">
              <input
                className="form-check-input"
                type="radio"
                name="flowerType"
                value="Lily"
                onChange={handleChange}
              />
              <label className="form-check-label">Lily</label>
            </div>
          </div>
          {/* Add more flower types as needed */}
        </div>
        <div className="form-group">
          <label>
            Message:
            <input
              type="text"
              name="message"
              value={formState.message}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className={"text-center"}>
          <button type="submit" className="btn submit-btn px-3">
            Submit
          </button>
        </div>
      </form>
      {/*<div className="row">*/}
      {/*    <div className="col">*/}
      {/*        <Link to={"/"} className={"backButton"}>*/}
      {/*            <Button>Back to Homepage</Button>*/}
      {/*        </Link>*/}
      {/*        <Link to={"/Map"} className={"mapButton"}>*/}
      {/*            <Button>To Map</Button>*/}
      {/*        </Link>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default FlowerDelivery;
