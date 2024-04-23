import {
  Autocomplete,
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
import styles from "../../styles/RequestFields.module.css";
import React, { useEffect, useState } from "react";
import { medicineDeliveryRequest } from "common/src/backend_interfaces/medicineDeliveryRequest.ts";
import axios from "axios";

function MedicineFields() {
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

  const medicineOptions = [
    "Aspirin",
    "Ibuprofen",
    "Paracetamol",
    "Amoxicillin",
    "Omeprazole",
    "Lisinopril",
    "Metformin",
    "Simvastatin",
    "Atorvastatin",
    "Levothyroxine",
    "Prednisone",
    "Gabapentin",
    "Losartan",
    "Azithromycin",
    "Amlodipine",
    "Metoprolol",
    "Albuterol",
    "Sertraline",
    "Citalopram",
    "Fluoxetine",
    "Escitalopram",
    "Cetirizine",
    "Furosemide",
    "Loratadine",
    "Tramadol",
    "Warfarin",
    "Hydrochlorothiazide",
    "Clonazepam",
    "Tamsulosin",
    "Meloxicam",
    "Pregabalin",
    "Diazepam",
    "Zolpidem",
    "Naproxen",
    "Bisoprolol",
    "Cephalexin",
    "Metronidazole",
    "Ciprofloxacin",
    "Doxycycline",
    "Methylprednisolone",
    "Amitriptyline",
    "Venlafaxine",
    "Duloxetine",
    "Risperidone",
    "Quetiapine",
    "Mirtazapine",
    "Carvedilol",
    "Folic Acid",
    "Pantoprazole",
    "Dextromethorphan",
    "Fentanyl",
    "Ketamine",
  ];

  const [formData, setFormData] = useState<medicineDeliveryRequest>({
    SRID: 0,
    employeeEmail: "",
    location: "",
    priority: "",
    status: "",
    medicineType: "",
    dosageType: "",
    dosageAmount: "",
    description: "",
    serviceType: "Medicine",
  });

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

  const handleAutocompleteChange = (field: string, value: string | null) => {
    if (value) {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const resetForm = () => {
    setFormData({
      SRID: 0,
      employeeEmail: "",
      location: "",
      priority: "",
      status: "",
      medicineType: "",
      dosageType: "",
      dosageAmount: "",
      description: "",
      serviceType: "Medicine",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // comment out if this is a gabe issue

    console.log(formData);
    console.log("\n\n\n\nthis is what im looking for");

    try {
      const response = await axios.post(
        "/api/medicine-delivery-service-request",
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
              onChange={(e, value) =>
                handleAutocompleteChange("location", value)
              }
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
        <div className={`${styles.inputRow}`}>
          <Autocomplete
            disablePortal
            id="medicineType"
            options={medicineOptions}
            sx={{
              width: "100%",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Medicine Type" required />
            )}
            value={formData.medicineType}
            onChange={(e, value) =>
              handleAutocompleteChange("medicineType", value)
            }
          />
        </div>
        <div className={`${styles.doubleInputRow}`}>
          <FormControl fullWidth sx={{ marginTop: "2%" }}>
            <InputLabel id="dosageFormLabel">Dosage Form</InputLabel>
            <Select
              labelId="dosageFormLabel"
              id="dosageType"
              label="Dosage Form"
              value={formData.dosageType}
              onChange={(e) => handleSelectChange(e, "dosageType")}
            >
              <MenuItem value={"Capsule"}>Capsule</MenuItem>
              <MenuItem value={"Liquid"}>Liquid</MenuItem>
              <MenuItem value={"Tablet"}>Tablet</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id={"dosageAmount"}
            type={"number"}
            fullWidth
            variant={"outlined"}
            label={"Dosage Amount"}
            InputProps={{
              endAdornment: (
                <InputAdornment position={"end"}>mg</InputAdornment>
              ),
            }}
            sx={{
              marginLeft: "2%",
              marginTop: "2%",
            }}
            required
            value={formData.dosageAmount}
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
        <p className={`${styles.footer}`}>Created by Gus & Sean</p>
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

export default MedicineFields;
