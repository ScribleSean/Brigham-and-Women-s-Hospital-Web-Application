import styles from "../styles/EmployeePage.module.css";
import { SetStateAction, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function EmployeePage() {
  const [permission, setPermissionTerm] = useState("");

  const [open, setOpen] = useState(false);

  const handleEmployeeButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePermissionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPermissionTerm(event.target.value);
  };

  const columns = [
    {
      field: "employeeID",
      headerName: "Employee ID",
      width: 130,
    },
    {
      field: "employeeLastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "employeeFirstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "position",
      headerName: "Position",
      flex: 1,
    },
    {
      field: "employeeEmail",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "permission",
      headerName: "Permission Level",
      flex: 1,
    },
  ];

  return (
    <>
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.employeeDashboardBox}`}>
          <div className={`${styles.employeePageHeader}`}>
            <div className={`${styles.employeePageTitle}`}>
              <h1>Employee Page</h1>
            </div>
            <div className={`${styles.employeePageButtonsBox}`}>
              <Button
                variant="contained"
                onClick={handleEmployeeButtonClick}
                sx={{
                  backgroundColor: "#012D5A",
                }}
                startIcon={<PersonAddIcon />}
              >
                Add Employee
              </Button>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiDialog-container": {
                  "& .MuiPaper-root": {
                    borderRadius: 2,
                    borderColor: "#012D5A",
                    minWidth: "400px",
                    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
                    padding: "3px",
                  },
                },
              }}
            >
              <DialogTitle> Add New Employee </DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin={"dense"}
                  id={"employeeLastName"}
                  label={"Last Name"}
                  type={"text"}
                  fullWidth
                  required
                  variant={"standard"}
                />
                <TextField
                  autoFocus
                  margin={"dense"}
                  id={"employeeFirstName"}
                  label={"First Name"}
                  type={"text"}
                  fullWidth
                  required
                  variant={"standard"}
                />
                <TextField
                  autoFocus
                  margin={"dense"}
                  id={"position"}
                  label={"Position"}
                  type={"text"}
                  fullWidth
                  required
                  variant={"standard"}
                />
                <TextField
                  autoFocus
                  margin={"dense"}
                  id={"employeeEmail"}
                  label={"Email Address"}
                  type={"text"}
                  fullWidth
                  required
                  variant={"standard"}
                />
                <FormControl fullWidth margin={"dense"} required>
                  <InputLabel id={"permissions"}>Permission Level</InputLabel>
                  <Select
                    labelId="permission-label"
                    id={"permission"}
                    value={permission}
                    label={"Permission"}
                    onChange={handlePermissionChange}
                    variant={"standard"}
                  >
                    <MenuItem value={""}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Staff"}>Staff</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                  </Select>
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>

          <hr />

          <div className={`${styles.tableSection}`}>
            <DataGrid
              columns={columns}
              rows={[]}
              slots={{
                toolbar: CustomToolbar,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeePage;
