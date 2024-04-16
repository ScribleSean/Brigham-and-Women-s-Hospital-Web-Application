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
import React, {useEffect, useState} from "react";
import FlowerDeliveryFields from "../components/RequestFields/FlowerDeliveryFields";
import MedicineFields from "../components/RequestFields/MedicineFields";
import MedicalDeviceFields from "../components/RequestFields/MedicalDeviceFields";
import RoomSchedulingFields from "../components/RequestFields/RoomSchedulingFields";
import GiftFields from "../components/RequestFields/GiftFields";
import { Collapse } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import {ServiceRequest} from "common/src/backend_interfaces/ServiceRequest.ts";
import axios from "axios";

function createData(
  SRID: number,
  serviceType: string,
  employeeName: string,
  location: string,
  priority: string,
  status: string,
  description: string,
) {
  return {
    SRID,
    serviceType,
    employeeName,
    location,
    priority,
    status,
    description,
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
        <TableCell align="right">{row.serviceType}</TableCell>
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


function Dashboard() {
    const [requestData, setRequestData] = useState<ServiceRequest[]>();

    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("Any");
    const [filterPriority, setFilterPriority] = useState("Any");
    const [filterStatus, setFilterStatus] = useState("Any");

    const filterRows = (rows: ServiceRequest[]) => {
        return rows.filter((row) => {
            const matchesSearchTerm = searchTerm === "" || Object.values(row).some(val => val.toString().toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesFilterType = filterType === "Any" || row.serviceType === filterType;
            const matchesFilterPriority = filterPriority === "Any" || row.priority === filterPriority;
            const matchesFilterStatus = filterStatus === "Any" || row.status === filterStatus;
            return matchesSearchTerm && matchesFilterType && matchesFilterPriority && matchesFilterStatus;
        });
    };

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("/api/service-request");
            setRequestData(res.data);
            console.log("successfully got data from get request");
        }
        fetchData().then();
    }, []);

    let rows: ServiceRequest[] = [];
    if (requestData) {
        rows = requestData;
    }
  // these will get fetched from the backend
  const locationOptions = [
    "Placeholder 1",
    "Placeholder 2",
    "Placeholder 3",
    "Placeholder 4",
    "Placeholder 5",
  ];

  const [currentReqType, setCurrentReqType] = useState(<div></div>);

  const handleserviceTypeChange = (e: SelectChangeEvent<unknown>) => {
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
                onChange={(event) => setSearchTerm(event.target.value)}
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
                    onChange={(event) => setFilterType(event.target.value as string)}
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
                    onChange={(event) => setFilterPriority(event.target.value as string)}
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
                    onChange={(event) => setFilterStatus(event.target.value as string)}
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
                  {filterRows(rows)
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
                <InputLabel id="serviceTypeLabel">Request Type</InputLabel>
                <Select
                  labelId="serviceTypeLabel"
                  id="serviceType"
                  label="Request Type"
                  onChange={(e) => {
                    handleserviceTypeChange(e);
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
