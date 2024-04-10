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

interface FormData {
  employeeName: string;
  location: string;
  medicineName: string | null;
  dosageAmount: string;
  dosageForm: string;
  priority: string;
  status: string;
}

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

  const [formData, setFormData] = useState<FormData>({
    employeeName: "",
    location: "",
    medicineName: null,
    dosageAmount: "",
    dosageForm: "",
    priority: "",
    status: "",
  });

  const [submittedRequests, setSubmittedRequests] = useState<FormData[]>([]);

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  useEffect(() => {
    console.log(submittedRequests);
  }, [submittedRequests]);

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
      medicineName: value || null,
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

  const addSubmittedRequest = (newRequest: FormData) => {
    setSubmittedRequests([...submittedRequests, newRequest]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmittedRequest(formData);
    setFormData({
      employeeName: "",
      location: "",
      medicineName: null,
      dosageForm: "",
      dosageAmount: "",
      priority: "",
      status: "",
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
            value={formData.medicineName}
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
              <InputLabel id={"dosageForm"}>Dosage Form</InputLabel>
              <Select
                id={"dosageForm"}
                onChange={(e) => handleSelectChange(e, "dosageForm")}
                value={formData.dosageForm}
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
                  employeeName: "",
                  location: "",
                  medicineName: null,
                  dosageAmount: "",
                  dosageForm: "",
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

export default MedicineRequest;
