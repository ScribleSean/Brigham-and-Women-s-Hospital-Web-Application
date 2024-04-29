import styles from "../styles/EmployeePage.module.css";
import { SetStateAction, useState } from "react";
import {Button,
        Dialog,
        DialogTitle,
        DialogContent,
        DialogActions,
        TextField,
        Select,
        MenuItem,
        InputLabel,
        FormControl} from "@mui/material";

function EmployeePage() {
  const [searchTerm, setSearchTerm] = useState(""); // Correctly initialized state
  const [role, setRoleTerm] = useState("");
  const [permission, setPermissionTerm] = useState("");

    const[open, setOpen] = useState(false);

    const handleEmployeeButtonClick = () => {
        setOpen(true);
    };
   const handleClose = () => {
        setOpen(false);
    };
  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setRoleTerm(event.target.value);
  };

  const handlePermissionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPermissionTerm(event.target.value);
  };

  return (
    <>
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.employeeDashboardBox}`}>
            <div className={`${styles.employeePageHeader}`}>
                <div className={`${styles.employeePageTitle}`}>
                    <h1>Employee Page</h1>
                </div>
                <div className={`${styles.employeePageButtonsBox}`}>
                    <Button variant="contained" color="primary" className={styles.buttons}>
                        Export CSV
                    </Button>
                    <Button variant="contained" color="primary" className={styles.buttons}>
                        Import CSV
                    </Button>
                    <Button variant="contained" color="primary" className={styles.buttons} onClick={handleEmployeeButtonClick}>
                        Add Employee
                    </Button>
                </div>
                <Dialog open={open} onClose={handleClose}
                        sx={{
                            '& .MuiDialog-container': {
                                '& .MuiPaper-root': {
                                    borderRadius: 2,
                                    borderColor: "#012D5A",
                                    minWidth: '400px',
                                    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
                                    padding: '3px',
                                },
                            },
                        }}>
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
                                <MenuItem value={"Staff"}>
                                    Staff
                                </MenuItem>
                                <MenuItem value={"Admin"}>
                                    Admin
                                </MenuItem>
                            </Select>
                        </FormControl>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>

            <hr className={`${styles.divider}`}/>

            <div className={`${styles.filtersSection}`}>
                <input
                    type={"text"}
                    placeholder={"Search Employees"}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={styles.searchBar}
                />
                <div className={`${styles.dropDownFilterBox}`}>
                    <select
                        value={role}
                        onChange={handleRoleChange}
                className={styles.filterDropDown}
              >
                <option value="">Role</option>
                <option value="Nurse">Nurse</option>
                <option value="MRI Technician">MRI Technician</option>
                <option value={"Clerk"}>Clerk</option>
                <option value={"Doctor"}>Doctor</option>
              </select>
              <select
                value={permission}
                onChange={handlePermissionChange}
                className={styles.filterDropDown}
              >
                <option value={""}>Permission</option>
                <option value={"Staff"}>Staff</option>
                <option value={"Admin"}>Admin</option>
              </select>
            </div>
          </div>

          <div className={`${styles.tableSection}`}>
            {/* This div holds where the table will go */}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeePage;
