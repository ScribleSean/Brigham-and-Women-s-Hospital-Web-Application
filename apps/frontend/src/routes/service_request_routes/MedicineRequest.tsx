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
import "../../styles/MedicineRequest.css";
import { useEffect, useState } from "react";
import styles from "../../styles/GiftRequest.module.css";
import { medicineDeliveryRequest } from "common/src/backend_interfaces/medicineDeliveryRequest.ts";
import axios from "axios";

function MedicineRequest() {
  const medicineList: string[] = [
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
  ];

  const [formData, setFormData] = useState<medicineDeliveryRequest>({
    SRID: 0,
    employeeName: "",
    location: "",
    medicineType: "",
    dosageAmount: 0,
    dosageType: "",
    priority: "",
    status: "",
    serviceType: "Medicine Delivery",
    description: "",
  });

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleMedicineNameChange = (value: string | null) => {
    setFormData({
      ...formData,
      medicineType: value as string,
    });
  };

  const handleSelectChange = (
    e: SelectChangeEvent<string>,
    field: keyof medicineDeliveryRequest,
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value as string,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/medicine-delivery-service-request",
        formData,
      );
      console.log("Form data sent successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
    setFormData({
      SRID: 0,
      employeeName: "",
      location: "",
      medicineType: "",
      dosageAmount: 0,
      dosageType: "",
      priority: "",
      status: "",
      serviceType: "Medicine Delivery",
      description: "",
    });
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
      <div className={"san-div col-10"}>
        <form className={"request-form"} onSubmit={handleSubmit}>
          <h1>Medicine Request</h1>
          <h5>Gus and Sean</h5>
          <br />
          <div className={`${styles.twoInputRow}`}>
            <TextField
              label={"Employee Name"}
              variant={"filled"}
              id={"employeeName"}
              sx={{
                my: "1%",
                width: "49.5%",
                marginRight: "1%",
              }}
              onChange={handleTextFieldChange}
              value={formData.employeeName}
              required
            />
            <TextField
              label={"Location"}
              variant={"filled"}
              id={"location"}
              sx={{
                my: "1%",
                width: "49.5%",
              }}
              onChange={handleTextFieldChange}
              value={formData.location}
              required
            />
          </div>
          <br />
          <Autocomplete
            id={"medicineName"}
            sx={{ my: "1%" }}
            disablePortal
            options={medicineList}
            onChange={(_event, value) => handleMedicineNameChange(value)}
            value={formData.medicineType}
            renderInput={(params) => (
              <TextField
                variant={"filled"}
                {...params}
                label="Medicine"
                required
              />
            )}
          />
          <div className={"two-input-row-container"}>
            <FormControl
              variant={"filled"}
              sx={{ width: "49%", marginRight: "1%", my: "1%" }}
              required
            >
              <InputLabel id={"dosageType"}>Dosage Form</InputLabel>
              <Select
                id={"dosageType"}
                onChange={(e) => handleSelectChange(e, "dosageType")}
                value={formData.dosageType}
              >
                <MenuItem value={"Tablet"}>Tablet</MenuItem>
                <MenuItem value={"Capsule"}>Capsule</MenuItem>
                <MenuItem value={"Liquid"}>Liquid</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id={"dosageAmount"}
              label={"Dosage Amount"}
              variant={"filled"}
              sx={{ width: "49%", marginLeft: "1%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position={"end"}>mg</InputAdornment>
                ),
              }}
              onChange={handleTextFieldChange}
              type={"number"}
              value={formData.dosageAmount}
              required
            />
          </div>
          {/*<br />*/}
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
                  SRID: 0,
                  employeeName: "",
                  location: "",
                  medicineType: "",
                  dosageAmount: 0,
                  dosageType: "",
                  priority: "",
                  status: "",
                  serviceType: "Medicine Delivery",
                  description: "",
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

export default MedicineRequest;
