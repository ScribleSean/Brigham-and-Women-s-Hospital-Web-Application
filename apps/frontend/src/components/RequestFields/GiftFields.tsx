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
import axios from "axios";
import { giftDeliveryRequest } from "common/src/backend_interfaces/giftDeliveryRequest.ts";

function GiftFields() {
  const [locationOptions, setLocationOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("/api/room-name-fetch");
        const locationNames = response.data.map(
          (location: { longName: string }) => location.longName,
        );
        setLocationOptions(locationNames);
      } catch (error) {
        console.error("Failed to fetch locations", error);
      }
    };
    fetchLocations();
  }, []);

  const [formData, setFormData] = useState<giftDeliveryRequest>({
    SRID: 0,
    employeeName: "",
    location: "",
    priority: "",
    status: "",
    senderName: "",
    receiverName: "",
    giftType: "",
    deliveryDate: "",
    description: "",
    serviceType: "Gift Delivery",
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

  const resetForm = () => {
    setFormData({
      SRID: 0,
      employeeName: "",
      location: "",
      priority: "",
      status: "",
      senderName: "",
      receiverName: "",
      giftType: "",
      deliveryDate: "",
      description: "",
      serviceType: "Gift Delivery",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/gift-service-request", formData);
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
            <TextField
              id={"employeeName"}
              fullWidth
              variant={"outlined"}
              label={"Employee Name"}
              sx={{ marginRight: "2%" }}
              required
              value={formData.employeeName}
              onChange={handleTextFieldChange}
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
            id={"senderName"}
            fullWidth
            variant={"outlined"}
            label={"Sender Name"}
            sx={{
              marginRight: "2%",
            }}
            required
            value={formData.senderName}
            onChange={handleTextFieldChange}
          />
          <TextField
            id={"receiverName"}
            fullWidth
            variant={"outlined"}
            label={"Recipient Name"}
            sx={{
              marginLeft: "2%",
            }}
            required
            value={formData.receiverName}
            onChange={handleTextFieldChange}
          />
        </div>
        <div className={`${styles.doubleInputRow} ${styles.spaceAbove}`}>
          <FormControl
            variant={"outlined"}
            sx={{
              width: "100%",
              marginRight: "2%",
            }}
            required
          >
            <InputLabel id={"giftTypeLabel"}>Gift Type</InputLabel>
            <Select
              labelId={"giftTypeLabel"}
              id={"giftType"}
              label={"Gift Type"}
              value={formData.giftType}
              onChange={(e) => handleSelectChange(e, "giftType")}
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
            id={"deliveryDate"}
            type={"date"}
            fullWidth
            variant={"outlined"}
            label={"Delivery Date"}
            InputLabelProps={{ shrink: true }}
            sx={{
              marginLeft: "2%",
            }}
            required
            value={formData.deliveryDate}
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
        <p className={`${styles.footer}`}>Created by Christian & Gabe</p>
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

export default GiftFields;
