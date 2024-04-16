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
import React, { useState } from "react";

function FlowerDeliveryFields() {
  const locationOptions = [
    "Placeholder 1",
    "Placeholder 2",
    "Placeholder 3",
    "Placeholder 4",
    "Placeholder 5",
  ];

  const [formData, setFormData] = useState({
    employeeName: "",
    location: "",
    priority: "",
    status: "",
    senderName: "",
    recipientName: "",
    flowerType: "",
    deliveryDate: "",
    description: "",
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
      employeeName: "",
      location: "",
      priority: "",
      status: "",
      senderName: "",
      recipientName: "",
      flowerType: "",
      deliveryDate: "",
      description: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add API call here
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
            id={"recipientName"}
            fullWidth
            variant={"outlined"}
            label={"Recipient Name"}
            sx={{
              marginLeft: "2%",
            }}
            required
            value={formData.recipientName}
            onChange={handleTextFieldChange}
          />
        </div>
        <div className={`${styles.doubleInputRow} ${styles.spaceAbove}`}>
          <FormControl
            fullWidth
            required
            sx={{
              maxWidth: "100%",
              marginRight: "2%",
            }}
          >
            <InputLabel id="flowerTypeLabel">Flower Type</InputLabel>
            <Select
              labelId="flowerTypeLabel"
              id="flowerType"
              label="Flower Type"
              value={formData.flowerType}
              onChange={(e) => handleSelectChange(e, "flowerType")}
            >
              <MenuItem value={"Rose"}>Rose</MenuItem>
              <MenuItem value={"Tulip"}>Tulip</MenuItem>
              <MenuItem value={"Lily"}>Lily</MenuItem>
              <MenuItem value={"Orchid"}>Orchid</MenuItem>
              <MenuItem value={"Sunflower"}>Sunflower</MenuItem>
              <MenuItem value={"Daisy"}>Daisy</MenuItem>
              <MenuItem value={"Carnation"}>Carnation</MenuItem>
              <MenuItem value={"Hydrangea"}>Hydrangea</MenuItem>
              <MenuItem value={"Peony"}>Peony</MenuItem>
              <MenuItem value={"Chrysanthemum"}>Chrysanthemum</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id={"deliveryDate"}
            type={"date"}
            fullWidth
            variant={"outlined"}
            label={"Delivery Date"}
            InputLabelProps={{ shrink: true }}
            sx={{ marginLeft: "2%" }}
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

export default FlowerDeliveryFields;
