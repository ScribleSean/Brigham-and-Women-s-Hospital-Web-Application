import styles from "../styles/EmployeePage.module.css";
import { SetStateAction, useState } from "react";

//import Button from "@mui/material";
function EmployeePage() {
  const [searchTerm, setSearchTerm] = useState(""); // Correctly initialized state
  const [role, setRoleTerm] = useState("");
  const [permission, setPermissionTerm] = useState("");
  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value); // Updates the state based on input
  };

  const handleRoleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setRoleTerm(event.target.value); // Updates the state based on input
  };

  const handlePermissionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPermissionTerm(event.target.value); // Updates the state based on input
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
              <button>Export CSV</button>
              <button>Import CSV</button>
              <button>Add Employee</button>
            </div>
          </div>

          <hr className={`${styles.divider}`} />

          <div className={`${styles.filtersSection}`}>
            {/*Here will go the filters and search bar*/}
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
