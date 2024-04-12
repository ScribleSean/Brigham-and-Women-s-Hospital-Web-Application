import {
  Autocomplete,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "../../styles/RequestFields.module.css";

function MedicineFields() {
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
  ];

  return (
    <>
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
        />
      </div>
      <div className={`${styles.doubleInputRow}`}>
        <FormControl fullWidth sx={{ marginTop: "2%" }}>
          <InputLabel id="dosageFormLabel">Dosage Form</InputLabel>
          <Select labelId="dosageFormLabel" id="dosageForm" label="Dosage Form">
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
            endAdornment: <InputAdornment position={"end"}>mg</InputAdornment>,
          }}
          sx={{
            marginLeft: "2%",
            marginTop: "2%",
          }}
          required
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
        />
      </div>
      <p className={`${styles.footer}`}>Created by Gus & Sean</p>
    </>
  );
}

export default MedicineFields;
