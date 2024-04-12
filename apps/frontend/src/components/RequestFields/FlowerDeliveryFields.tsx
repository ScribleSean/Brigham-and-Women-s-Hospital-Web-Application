import styles from "../../styles/RequestFields.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function FlowerDeliveryFields() {
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
          fullWidth
          required
          sx={{
            maxWidth: "100%",
            marginRight: "2%",
          }}
        >
          <InputLabel id="flowerTypeLabel">Flower Type</InputLabel>
          <Select labelId="flowerTypeLabel" id="flowerType" label="Flower Type">
            <MenuItem value={"Rose"}>Rose</MenuItem>
            <MenuItem value={"Tulip"}>Tulip</MenuItem>
            <MenuItem value={"Lily"}>Lily</MenuItem>
            <MenuItem value={"Orchid"}>Orchid</MenuItem>
            <MenuItem value={"Sunflower"}>Sunflower</MenuItem>
            <MenuItem value={"Daisy"}>Daisy</MenuItem>
            <MenuItem value={"Carnation"}>Carnation</MenuItem>
            <MenuItem value={"Hydrangea"}>Hydrangea</MenuItem>
            <MenuItem value={"Peony"}>Peony</MenuItem>
            <MenuItem value={"Chrysanthemum"}>Chrysanthemum</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type={"date"}
          fullWidth
          variant={"outlined"}
          label={"Delivery Date"}
          InputLabelProps={{ shrink: true }}
          sx={{ marginLeft: "2%" }}
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
    </>
  );
}

export default FlowerDeliveryFields;
