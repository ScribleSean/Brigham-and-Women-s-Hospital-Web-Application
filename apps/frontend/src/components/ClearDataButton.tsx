import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function ClearDataButton() {
  const [dialogueOpen, setDialogueOpen] = useState(false);

  const handleConfirm = () => {
    setDialogueOpen(false);
    alert("This will delete all data from the database, not yet implemented.");
    setSnackbarOpen(true);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <>
      <Button
        variant={"contained"}
        color={"error"}
        startIcon={<DeleteIcon />}
        sx={{
          height: "40px",
        }}
        onClick={() => setDialogueOpen(true)}
      >
        Delete Data
      </Button>
      <Dialog open={dialogueOpen} onClose={() => setDialogueOpen(false)}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will delete all map node and edge data from the database. This
            action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDialogueOpen(false)}
            sx={{
              color: "black",
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="error" variant={"contained"}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        message={"Data deleted successfully. (not really)"}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
}

export default ClearDataButton;
