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
import MedicineFields from "./RequestFields/MedicineFields.tsx";
import MedicalDeviceFields from "./RequestFields/MedicalDeviceFields.tsx";
import RoomSchedulingFields from "./RequestFields/RoomSchedulingFields.tsx";
import GiftFields from "./RequestFields/GiftFields.tsx";
import FlowerDeliveryFields from "./RequestFields/FlowerDeliveryFields.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DashMakeARequest() {
    const [locationOptions, setLocationOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('/api/room-name-fetch');
                const locationNames = response.data.map((location: { longName: string }) => location.longName);
                setLocationOptions(locationNames);
            } catch (error) {
                console.error('Failed to fetch locations', error);
            }
        };
        fetchLocations();
    }, []);


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
          <div className={`${styles.formContent}`}>
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
          </div>
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
    </>
  );
}
