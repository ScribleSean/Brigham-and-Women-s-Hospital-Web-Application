import styles from "../../styles/RequestFields.module.css";
import { Autocomplete, TextField } from "@mui/material";

function MedicalDeviceFields() {
  const deviceOptions = [
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

  return (
    <>
      <div className={`${styles.doubleInputRow}`}>
        <Autocomplete
          id={"deviceName"}
          disablePortal
          options={deviceOptions}
          renderInput={(params) => (
            <TextField {...params} label="Device" required />
          )}
          sx={{
            width: "225%",
            marginRight: "2%",
          }}
        />
        <TextField
          id={"deviceQuantity"}
          type={"number"}
          fullWidth
          variant={"outlined"}
          label={"Quantity"}
          InputProps={{
            endAdornment: <div>units</div>,
          }}
          sx={{
            marginLeft: "2%",
          }}
          required
        />
      </div>
      <div className={`${styles.inputRow}`}>
        <TextField
          id={"description"}
          fullWidth
          variant={"outlined"}
          label={"Description (optional)"}
          multiline
          rows={5}
        />
      </div>
      <p className={`${styles.footer}`}>Created by Peter & Sofia</p>
    </>
  );
}

export default MedicalDeviceFields;
