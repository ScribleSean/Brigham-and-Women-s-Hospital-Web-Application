import styles from "../styles/Dashboard.module.css";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import FlowerDeliveryFields from "../components/RequestFields/FlowerDeliveryFields";
import MedicineFields from "../components/RequestFields/MedicineFields";
import MedicalDeviceFields from "../components/RequestFields/MedicalDeviceFields";
import RoomSchedulingFields from "../components/RequestFields/RoomSchedulingFields";
import GiftFields from "../components/RequestFields/GiftFields";
import { Collapse } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";

function createData(
  SRID: number,
  requestType: string,
  employeeName: string,
  location: string,
  priority: string,
  status: string,
) {
  return {
    SRID,
    requestType,
    employeeName,
    location,
    priority,
    status,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.SRID}
        </TableCell>
        <TableCell align="right">{row.requestType}</TableCell>
        <TableCell align="right">{row.employeeName}</TableCell>
        <TableCell align="right">{row.location}</TableCell>
        <TableCell align="right">{row.priority}</TableCell>
        <TableCell align="right">
          <FormControl fullWidth size={"small"}>
            <Select id="filterStatus" defaultValue={row.status}>
              <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
              <MenuItem value={"Assigned"}>Assigned</MenuItem>
              <MenuItem value={"In Progress"}>In Progress</MenuItem>
              <MenuItem value={"Closed"}>Closed</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <p>more info about the request goes here</p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(1, "Medicine", "John Doe", "Room 101", "Emergency", "Unassigned"),
  createData(2, "Gift", "Jane Doe", "Room 102", "High", "Assigned"),
  createData(
    3,
    "Med. Device",
    "John Smith",
    "Room 103",
    "Medium",
    "In Progress",
  ),
  createData(4, "Room", "Jane Smith", "Room 104", "Low", "Closed"),
  createData(5, "Flower", "John Doe", "Room 105", "Emergency", "Unassigned"),
  createData(6, "Medicine", "Jane Doe", "Room 106", "High", "Assigned"),
  createData(7, "Gift", "John Smith", "Room 107", "Medium", "In Progress"),
  createData(8, "Med. Device", "Jane Smith", "Room 108", "Low", "Closed"),
  createData(9, "Room", "John Doe", "Room 109", "Emergency", "Unassigned"),
  createData(10, "Flower", "Jane Doe", "Room 110", "High", "Assigned"),
  createData(11, "Medicine", "John Smith", "Room 111", "Medium", "In Progress"),
  createData(12, "Gift", "Jane Smith", "Room 112", "Low", "Closed"),
  createData(
    13,
    "Med. Device",
    "John Doe",
    "Room 113",
    "Emergency",
    "Unassigned",
  ),
  createData(14, "Room", "Jane Doe", "Room 114", "High", "Assigned"),
  createData(15, "Flower", "John Smith", "Room 115", "Medium", "In Progress"),
  createData(16, "Medicine", "Jane Smith", "Room 116", "Low", "Closed"),
  createData(17, "Gift", "John Doe", "Room 117", "Emergency", "Unassigned"),
  createData(18, "Med. Device", "Jane Doe", "Room 118", "High", "Assigned"),
  createData(19, "Room", "John Smith", "Room 119", "Medium", "In Progress"),
  createData(20, "Flower", "Jane Smith", "Room 120", "Low", "Closed"),
];

function Dashboard() {
  // these will get fetched from the backend
  const locationOptions = [
    "Placeholder 1",
    "Placeholder 2",
    "Placeholder 3",
    "Placeholder 4",
    "Placeholder 5",
  ];

  const [currentReqType, setCurrentReqType] = useState(<div></div>);

  const handleRequestTypeChange = (e: SelectChangeEvent<unknown>) => {
    switch (e.target.value) {
      case "Medicine":
        setCurrentReqType(<MedicineFields />);
        break;
      case "Med. Device":
        setCurrentReqType(<MedicalDeviceFields />);
        break;
      case "Room":
        setCurrentReqType(<RoomSchedulingFields />);
        break;
      case "Gift":
        setCurrentReqType(<GiftFields />);
        break;
      case "Flower":
        setCurrentReqType(<FlowerDeliveryFields />);
        break;
      default:
        setCurrentReqType(<div></div>);
        break;
    }
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className={`${styles.placeholderNavbar}`} />
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.currentRequestsContainer}`}>
          <h1
            className={`${styles.sectionHeader} ${styles.currentRequestsHeader}`}
          >
            Current Requests
          </h1>
          <hr className={`${styles.divider}`} />
          <div className={`${styles.tableMutators}`}>
            <div className={`${styles.filterMenu}`}>
              <label htmlFor="searchBar" className={`${styles.filterMenuText}`}>
                Search
              </label>
              <TextField
                id={"searchBar"}
                variant={"outlined"}
                size={"small"}
                sx={{
                  width: "80%",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={`${styles.filterMenu}`}>
              <label
                htmlFor={"filterType"}
                className={`${styles.filterMenuText}`}
              >
                Filter by:
              </label>
              <div className={`${styles.filterSelectors}`}>
                <FormControl fullWidth size={"small"}>
                  <InputLabel id="filterTypeLabel">Type</InputLabel>
                  <Select
                    labelId="filterTypeLabel"
                    id="filterType"
                    label="Type"
                    defaultValue={"Any"}
                  >
                    <MenuItem value={"Any"}>
                      <em>Any</em>
                    </MenuItem>
                    <MenuItem value={"Flower"}>Flower Delivery</MenuItem>
                    <MenuItem value={"Gift"}>Gift</MenuItem>
                    <MenuItem value={"Medicine"}>Medicine</MenuItem>
                    <MenuItem value={"Med. Device"}>Medical Device</MenuItem>
                    <MenuItem value={"Room"}>Room Scheduling</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size={"small"} sx={{ px: "2%" }}>
                  <InputLabel id="filterPriorityLabel">Priority</InputLabel>
                  <Select
                    labelId="filterPriorityLabel"
                    id="filterPriority"
                    label="Priority"
                    defaultValue={"Any"}
                  >
                    <MenuItem value={"Any"}>
                      <em>Any</em>
                    </MenuItem>
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                    <MenuItem value={"Emergency"}>Emergency</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size={"small"}>
                  <InputLabel id="filterStatusLabel">Status</InputLabel>
                  <Select
                    labelId="filterStatusLabel"
                    id="filterStatus"
                    label="Status"
                    defaultValue={"Any"}
                  >
                    <MenuItem value={"Any"}>
                      <em>Any</em>
                    </MenuItem>
                    <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                    <MenuItem value={"Assigned"}>Assigned</MenuItem>
                    <MenuItem value={"In Progress"}>In Progress</MenuItem>
                    <MenuItem value={"Closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <TableContainer sx={{ maxHeight: "60%", px: "4%" }}>
            <Table size={"small"} stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>
                    <b>ID</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Type</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Employee</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Location</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Priority</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Status</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <Row key={row.SRID} row={row} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
        <div className={`${styles.requestFormContainer}`}>
          <form>
            <div className={`${styles.requestFormHeader}`}>
              <h1 className={`${styles.sectionHeader}`}>Make a Request</h1>
              <FormControl fullWidth sx={{ maxWidth: "48%" }} required>
                <InputLabel id="requestTypeLabel">Request Type</InputLabel>
                <Select
                  labelId="requestTypeLabel"
                  id="requestType"
                  label="Request Type"
                  onChange={(e) => {
                    handleRequestTypeChange(e);
                  }}
                >
                  <MenuItem value={"Flower"}>Flower Delivery</MenuItem>
                  <MenuItem value={"Gift"}>Gift</MenuItem>
                  <MenuItem value={"Medicine"}>Medicine</MenuItem>
                  <MenuItem value={"Med. Device"}>Medical Device</MenuItem>
                  <MenuItem value={"Room"}>Room Scheduling</MenuItem>
                </Select>
              </FormControl>
            </div>
            <hr className={`${styles.divider}`} />
            <div className={`${styles.commonInputsContainer}`}>
              <div className={`${styles.doubleInputRow}`}>
                <TextField
                  fullWidth
                  variant={"outlined"}
                  label={"Employee Name"}
                  sx={{ marginRight: "2%" }}
                  required
                />
                <Autocomplete
                  disablePortal
                  id="location"
                  options={locationOptions}
                  sx={{
                    marginLeft: "2%",
                    width: "100%",
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Location" required />
                  )}
                />
              </div>
              <div
                className={`${styles.doubleInputRow} ${styles.priorityStatus}`}
              >
                <FormControl
                  fullWidth
                  required
                  sx={{
                    maxWidth: "100%",
                    marginRight: "2%",
                  }}
                >
                  <InputLabel id="priorityLabel">Priority</InputLabel>
                  <Select
                    labelId="priorityLabel"
                    id="priority"
                    label="Priority"
                  >
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                    <MenuItem value={"Emergency"}>Emergency</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  required
                  sx={{
                    maxWidth: "100%",
                    marginLeft: "2%",
                  }}
                >
                  <InputLabel id="statusLabel">Status</InputLabel>
                  <Select labelId="statusLabel" id="status" label="Status">
                    <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                    <MenuItem value={"Assigned"}>Assigned</MenuItem>
                    <MenuItem value={"In Progress"}>In Progress</MenuItem>
                    <MenuItem value={"Closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <hr className={`${styles.divider}`} />
            {currentReqType}
            {currentReqType.type != "div" ? (
              <>
                <div className={`${styles.formButtons}`}>
                  <Button
                    id={"clearButton"}
                    variant={"outlined"}
                    color={"error"}
                    sx={{
                      width: "30%",
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    id={"submitButton"}
                    variant={"contained"}
                    sx={{
                      backgroundColor: "#012d5a",
                      color: "white",
                      width: "30%",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </>
            ) : (
              <div>
                <p className={`${styles.tooltip}`}>Select a request type</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
