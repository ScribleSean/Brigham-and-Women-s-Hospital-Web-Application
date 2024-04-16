import styles from "../styles/Dashboard.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MedicineFields from "./RequestFields/MedicineFields.tsx";
import MedicalDeviceFields from "./RequestFields/MedicalDeviceFields.tsx";
import RoomSchedulingFields from "./RequestFields/RoomSchedulingFields.tsx";
import GiftFields from "./RequestFields/GiftFields.tsx";
import FlowerDeliveryFields from "./RequestFields/FlowerDeliveryFields.tsx";
import React, { useState } from "react";

export default function DashMakeARequest() {
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
      <div className={`${styles.requestFormContainer}`}>
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
        <div className={`${styles.formContent}`}>
          {currentReqType.type != "div" ? (
            currentReqType
          ) : (
            <p className={`${styles.tooltip}`}>Select a request type.</p>
          )}
        </div>
      </div>
    </>
  );
}
