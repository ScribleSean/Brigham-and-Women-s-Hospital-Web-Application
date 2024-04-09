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
import styles from "../../styles/FlowerDelivery.module.css";
import React, { useEffect, useState } from "react";

interface FormData {
  employeeName: string;
  receiverName: string;
  location: string;
  flowerType: string | null;
  deliveryDate: string;
  priority: string;
  status: string;
}

function FlowerDelivery() {
  const flowerTypes = [
    "Rose",
    "Tulip",
    "Lily",
    "Orchid",
    "Sunflower",
    "Daisy",
    "Carnation",
    "Hydrangea",
    "Peony",
    "Chrysanthemum",
  ];

  const [formData, setFormData] = useState<FormData>({
    employeeName: "",
    receiverName: "",
    location: "",
    flowerType: null,
    deliveryDate: "",
    priority: "",
    status: "",
  });

  const [submittedRequests, setSubmittedRequests] = useState<FormData[]>([]);

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  const addSubmittedRequest = (newRequest: FormData) => {
    setSubmittedRequests([...submittedRequests, newRequest]);
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAutocompleteChange = (value: string | null) => {
    setFormData({
      ...formData,
      flowerType: value || null,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmittedRequest(formData);
    setFormData({
      employeeName: "",
      receiverName: "",
      location: "",
      flowerType: null,
      deliveryDate: "",
      priority: "",
      status: "",
    });
  };

  useEffect(() => {
    console.log(submittedRequests);
  }, [submittedRequests]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
      <div className={`${styles.sanDiv} col-10`}>
        <form className={`${styles.requestForm}`} onSubmit={handleSubmit}>
          <h1>Flower Delivery Request</h1>
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
          <TextField
            label={"Receiver Name"}
            variant={"filled"}
            id={"receiverName"}
            sx={{ my: "1%" }}
            onChange={handleTextFieldChange}
            value={formData.receiverName}
            required
          />
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
          <div className={`${styles.twoInputRow}`}>
            <Autocomplete
              id={"flowerType"}
              sx={{
                my: "1%",
                width: "49%",
                marginRight: "1%",
              }}
              disablePortal
              options={flowerTypes}
              onChange={(_event, value) => handleAutocompleteChange(value)}
              value={formData.flowerType}
              renderInput={(params) => (
                <TextField
                  variant={"filled"}
                  {...params}
                  label="Flower Type"
                  required
                />
              )}
            />
            <FormControl
              variant={"filled"}
              sx={{
                my: "1%",
                width: "49%",
                marginLeft: "1%",
              }}
              required
            >
              <TextField
                label={"Delivery Date"}
                variant={"filled"}
                id={"deliveryDate"}
                sx={{ width: "99%", marginLeft: "1%", my: "1%" }}
                type={"date"}
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>
          </div>
          {/*<br />*/}
          <div>
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
                  employeeName: "",
                  receiverName: "",
                  location: "",
                  flowerType: null,
                  deliveryDate: "",
                  priority: "",
                  status: "",
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

export default FlowerDelivery;
