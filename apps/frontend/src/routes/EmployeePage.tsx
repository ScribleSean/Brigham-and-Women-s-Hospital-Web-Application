import styles from "../styles/EmployeePage.module.css";
//import Button from "@mui/material";
function EmployeePage() {
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
