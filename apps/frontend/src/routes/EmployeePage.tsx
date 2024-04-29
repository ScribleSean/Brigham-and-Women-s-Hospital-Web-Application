import styles from "../styles/EmployeePage.module.css";
import { SetStateAction, useEffect, useState } from "react";
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
import { EmployeeType } from "common/src/backend_interfaces/Employee.ts";
import FileUpload from "../components/FileUpload.tsx";

function CustomToolbar() {
  const handleFileDrop = async (file: File, apiEndpoint: string) => {
    // Create a FileReader
    const reader = new FileReader();

    // Set up a callback for when the file is loaded
    reader.onload = async (event) => {
      if (event.target) {
        // Extract the CSV content as a string
        const csvString = event.target.result as string;

        console.log(csvString);

        try {
          const res = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the appropriate content type
            },
            body: JSON.stringify({ csvString }), // Send the CSV string as JSON
          });

          console.log(res);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarExport />
      <FileUpload
        onFileDrop={(file) => handleFileDrop(file, "/api/employee-populate")}
      />
    </GridToolbarContainer>
  );
}

function EmployeePage() {
  const [permission, setPermissionTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [employeeData, setEmployeeData] = useState<EmployeeType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/employee-populate");
        if (!response.ok) {
          throw new Error(`Please load node data ${response.status}`);
        }
        const result = await response.json();
        setEmployeeData(result);
      } catch (err) {
        console.error("Error fetching employee data");
      }
    };
    fetchData().then();
  }, []);

  console.log(employeeData);

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
      field: "employeePosition",
      headerName: "Position",
      flex: 1,
    },
    {
      field: "employeeEmail",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "employeePermission",
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

          <div className={`${styles.tableSection}`}>
            <DataGrid
              columns={columns}
              rows={employeeData}
              getRowId={(row) => row.employeeID}
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
