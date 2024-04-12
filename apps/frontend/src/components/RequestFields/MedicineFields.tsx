import { Autocomplete, InputAdornment, TextField } from "@mui/material";
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
      <div className={`${styles.doubleInputRow}`}>
        <Autocomplete
          disablePortal
          id="medicineType"
          options={medicineOptions}
          sx={{
            width: "100%",
            marginRight: "2%",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Medicine Type" required />
          )}
        />
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
      <p className={`${styles.footer}`}>Created by Gus & Sean</p>
    </>
  );
}

export default MedicineFields;
