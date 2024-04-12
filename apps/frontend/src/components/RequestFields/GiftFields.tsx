import styles from "../../styles/RequestFields.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function GiftFields() {
  return (
    <>
      <div className={`${styles.doubleInputRow}`}>
        <TextField
          fullWidth
          variant={"outlined"}
          label={"Sender Name"}
          sx={{
            marginRight: "2%",
          }}
          required
        />
        <TextField
          fullWidth
          variant={"outlined"}
          label={"Recipient Name"}
          sx={{
            marginLeft: "2%",
          }}
          required
        />
      </div>
      <div className={`${styles.doubleInputRow} ${styles.spaceAbove}`}>
        <FormControl
          variant={"outlined"}
          sx={{
            width: "100%",
            marginRight: "2%",
          }}
          required
        >
          <InputLabel id={"giftTypeLabel"}>Gift Type</InputLabel>
          <Select labelId={"giftTypeLabel"} id={"giftType"} label={"Gift Type"}>
            <MenuItem value={"Hat"}>Hat</MenuItem>
            <MenuItem value={"Beanie"}>Beanie</MenuItem>
            <MenuItem value={"Wrist band"}>Wrist band</MenuItem>
            <MenuItem value={"Sticker"}>Sticker</MenuItem>
            <MenuItem value={"T-shirt"}>T-shirt</MenuItem>
            <MenuItem value={"Custom pottery"}>Custom pottery</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id={"deliveryDate"}
          type={"date"}
          fullWidth
          variant={"outlined"}
          label={"Delivery Date"}
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
      <p className={`${styles.footer}`}>Created by Christian & Gabe</p>
    </>
  );
}

export default GiftFields;
