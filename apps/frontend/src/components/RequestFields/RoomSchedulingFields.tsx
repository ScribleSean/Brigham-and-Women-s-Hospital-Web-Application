import styles from "../../styles/RequestFields.module.css";
import { TextField } from "@mui/material";

function RoomSchedulingFields() {
  return (
    <>
      <div className={`${styles.doubleInputRow}`}>
        <TextField
          id={"startTime"}
          fullWidth
          variant={"outlined"}
          label={"Start Time"}
          type={"datetime-local"}
          InputLabelProps={{ shrink: true }}
          sx={{
            marginRight: "2%",
          }}
          required
        />
        <TextField
          id={"endTime"}
          fullWidth
          variant={"outlined"}
          label={"End Time"}
          type={"datetime-local"}
          InputLabelProps={{ shrink: true }}
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
      <p className={`${styles.footer}`}>Created by Ethan & Lorenzo</p>
    </>
  );
}

export default RoomSchedulingFields;
