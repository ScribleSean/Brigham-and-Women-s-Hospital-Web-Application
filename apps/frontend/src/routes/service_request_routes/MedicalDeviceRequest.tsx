import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import styles from "../../styles/MedicalDeviceRequest.module.css";
import { useEffect, useState } from "react";

interface FormData {
  employeeName: string;
  location: string;
  deviceName: string | null;
  deviceQuantity: string;
  priority: string;
  status: string;
}

function MedicalDeviceRequest() {
  const deviceOptions: string[] = [
    "Stethoscope",
    "Blood Pressure Monitor",
    "Thermometer",
    "MRI Machine",
    "X-ray Machine",
    "Ultrasound Machine",
    "Defibrillator",
    "Electrocardiogram (ECG) Machine",
    "Pulse Oximeter",
    "Sphygmomanometer",
    "Glucose Meter",
    "Infusion Pump",
    "Ventilator",
    "Nebulizer",
    "Ophthalmoscope",
    "Otoscope",
    "Doppler",
    "Endoscope",
    "Laryngoscope",
    "Colonoscope",
    "Bronchoscope",
    "Anesthesia Machine",
    "Blood Gas Analyzer",
    "Fetal Monitor",
    "Spirometer",
    "Catheter",
    "Pacemaker",
    "Implantable Cardioverter Defibrillator (ICD)",
    "Cardiac Catheterization Lab Equipment",
    "Hemodialysis Machine",
    "Surgical Laser",
    "Surgical Robot",
    "CT Scanner",
    "PET Scanner",
    "EEG Machine",
    "EMG Machine",
    "EKG Machine",
    "Holter Monitor",
    "Oxygen Concentrator",
    "Apnea Monitor",
    "Continuous Glucose Monitor (CGM)",
    "Insulin Pump",
    "Wheelchair",
    "Crutches",
    "Walker",
    "Hospital Bed",
    "Suction Machine",
    "Feeding Pump",
    "Orthopedic Implants",
    "Orthosis",
    "Prosthesis",
  ];

  const [formData, setFormData] = useState<FormData>({
    employeeName: "",
    location: "",
    deviceName: null,
    deviceQuantity: "",
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
      deviceName: value || null,
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
      location: "",
      deviceName: null,
      deviceQuantity: "",
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
          <h1>Medical Device Request</h1>
          <h5>Peter and Sofia</h5>
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
          <div className={`${styles.twoInputRow}`}>
            <Autocomplete
              id={"deviceName"}
              sx={{
                my: "1%",
                width: "79%",
                marginRight: "1%",
              }}
              disablePortal
              options={deviceOptions}
              onChange={(_event, value) => handleAutocompleteChange(value)}
              value={formData.deviceName}
              renderInput={(params) => (
                <TextField
                  variant={"filled"}
                  {...params}
                  label="Device"
                  required
                />
              )}
            />
            <FormControl
              variant={"filled"}
              sx={{
                my: "1%",
                width: "19%",
                marginLeft: "1%",
              }}
              required
            >
              <InputLabel id={"deviceQuantity"}>Quantity</InputLabel>
              <Select
                id={"deviceQuantity"}
                onChange={(e) => handleSelectChange(e, "deviceQuantity")}
                value={formData.deviceQuantity}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
              </Select>
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
                  location: "",
                  deviceName: null,
                  deviceQuantity: "",
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
        <br />
        <div>
          <h2>Active Requests</h2>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employee Name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Device</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {submittedRequests.map((request, index) => (
                  <TableRow key={index}>
                    <TableCell>{request.employeeName}</TableCell>
                    <TableCell>{request.location}</TableCell>
                    <TableCell>{request.deviceName}</TableCell>
                    <TableCell>{request.deviceQuantity}</TableCell>
                    <TableCell>{request.priority}</TableCell>
                    <TableCell>{request.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default MedicalDeviceRequest;
