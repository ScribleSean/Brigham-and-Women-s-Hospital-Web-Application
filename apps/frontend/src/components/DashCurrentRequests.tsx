import {
  TableCell,
  styled,
  tableCellClasses,
  TableRow,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Collapse,
  Box,
  TextField,
  InputAdornment,
  InputLabel,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TablePagination,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../styles/Dashboard.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { ServiceRequest } from "common/src/backend_interfaces/ServiceRequest.ts";
import { flowerDeliveryRequest } from "common/src/backend_interfaces/flowerServiceRequest.ts";
import { giftDeliveryRequest } from "common/src/backend_interfaces/giftDeliveryRequest.ts";
import { MedicalDevice } from "common/src/backend_interfaces/medicalDeviceRequest.ts";
import { medicineDeliveryRequest } from "common/src/backend_interfaces/medicineDeliveryRequest.ts";
import { roomSchedulingRequest } from "common/src/backend_interfaces/roomSchedulingRequest.ts";
import { religiousServiceRequest } from "common/src/backend_interfaces/religiousServiceRequest.ts";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#012D5A",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(4n), &:nth-of-type(4n-1)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [flowerData, setFlowerData] = useState<flowerDeliveryRequest>({
    SRID: 0,
    deliveryDate: "",
    description: "",
    employeeName: "",
    flowerType: "",
    location: "",
    priority: "",
    receiverName: "",
    senderName: "",
    serviceType: "",
    status: "",
  });
  const [giftData, setGiftData] = useState<giftDeliveryRequest>({
    SRID: 0,
    deliveryDate: "",
    description: "",
    employeeName: "",
    giftType: "",
    location: "",
    priority: "",
    receiverName: "",
    senderName: "",
    serviceType: "",
    status: "",
  });
  const [medicineData, setMedicineData] = useState<medicineDeliveryRequest>({
    SRID: 0,
    dosageType: "",
    description: "",
    employeeName: "",
    dosageAmount: 0,
    location: "",
    medicineType: "",
    priority: "",
    status: "",
    serviceType: "",
  });
  const [medicalDeviceData, setMedicalDeviceData] = useState<MedicalDevice>({
    SRID: 0,
    description: "",
    deviceName: "",
    employeeName: "",
    location: "",
    priority: "",
    deviceQuantity: "",
    status: "",
    serviceType: "",
  });
  const [roomSchedData, setRoomSchedData] = useState<roomSchedulingRequest>({
    SRID: 0,
    description: "",
    employeeName: "",
    endTime: "",
    location: "",
    priority: "",
    startTime: "",
    status: "",
    serviceType: "",
  });
  const [religiousData, setReligiousData] = useState<religiousServiceRequest>({
    SRID: 0,
    description: "",
    employeeName: "",
    location: "",
    objectName: "",
    priority: "",
    religionName: "",
    status: "",
    serviceType: "",
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low":
        return "#00b300";
      case "Medium":
        return "#ffcc00";
      case "High":
        return "#ff6600";
      case "Emergency":
        return "#ff0000";
      default:
        return "#FFFFFF";
    }
  };

  const handleStatusChange = async (
    row: ServiceRequest,
    event: SelectChangeEvent<unknown>,
  ) => {
    // Update the priority of the ServiceRequest object
    row.status = event.target.value as string;

    try {
      // Send a POST request to the server with the updated ServiceRequest object
      const response = await axios.post("/api/service-request", row);
      console.log("Form data sent successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const getFlowerDeliveryData = async (SRID: number) => {
    try {
      const res = await axios.get(`/api/flower-service-request`, {
        params: {
          SRID: SRID,
        },
      });
      console.log(res.data);
      setFlowerData(res.data);
    } catch {
      console.error("Error getting flower delivery data");
    }
  };

  const getGiftDeliveryData = async (SRID: number) => {
    try {
      const res = await axios.get(`/api/gift-service-request`, {
        params: {
          SRID: SRID,
        },
      });
      console.log(res.data);
      setGiftData(res.data);
    } catch {
      console.error("Error getting gift delivery data");
    }
  };

  const getMedicineData = async (SRID: number) => {
    try {
      const res = await axios.get(`/api/medicine-delivery-service-request`, {
        params: {
          SRID: SRID,
        },
      });
      console.log(res.data);
      setMedicineData(res.data);
    } catch {
      console.error("Error getting medicine data");
    }
  };

  const getMedicalDeviceData = async (SRID: number) => {
    try {
      const res = await axios.get(`/api/medical-device-service-request`, {
        params: {
          SRID: SRID,
        },
      });
      console.log(res.data);
      setMedicalDeviceData(res.data);
    } catch {
      console.error("Error getting medical device data");
    }
  };

  const getRoomSchedulingData = async (SRID: number) => {
    try {
      const res = await axios.get(`/api/room-scheduling-request`, {
        params: {
          SRID: SRID,
        },
      });
      console.log(res.data);
      setRoomSchedData(res.data);
    } catch {
      console.error("Error getting room scheduling data");
    }
  };

  const getReligiousData = async (SRID: number) => {
    try {
      const res = await axios.get(`/api/religious-service-request`, {
        params: {
          SRID: SRID,
        },
      });
      console.log(res.data);
      setReligiousData(res.data);
    } catch {
      console.error("Error getting religious data");
    }
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            size="small"
            onClick={() => {
              setOpen(!open);
              if (!open) {
                if (row.serviceType === "Flower Delivery") {
                  getFlowerDeliveryData(row.SRID).then();
                } else if (row.serviceType === "Gift Delivery") {
                  getGiftDeliveryData(row.SRID).then();
                } else if (row.serviceType === "Medical Device") {
                  getMedicalDeviceData(row.SRID).then();
                } else if (row.serviceType === "Medicine") {
                  getMedicineData(row.SRID).then();
                } else if (row.serviceType === "Room Scheduling") {
                  getRoomSchedulingData(row.SRID).then();
                  console.log(roomSchedData);
                } else if (row.serviceType === "Religious") {
                  getReligiousData(row.SRID).then();
                }
              }
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.SRID}
        </TableCell>
        <TableCell align="right">{row.serviceType}</TableCell>
        <TableCell align="right">{row.employeeName}</TableCell>
        <TableCell align="right">{row.location}</TableCell>
        <TableCell align="right" sx={{ textWrap: "nowrap" }}>
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: getPriorityColor(row.priority),
              marginRight: "8px",
            }}
          />
          {row.priority}
        </TableCell>
        <TableCell align="right">
          <FormControl fullWidth size={"small"}>
            <Select
              id="filterStatus"
              defaultValue={row.status}
              onChange={(event) => handleStatusChange(row, event)}
            >
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
              {row.serviceType === "Flower Delivery" ? (
                <>
                  <Table size={"small"}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Sender Name</b>
                        </TableCell>
                        <TableCell>
                          <b>Receiver Name</b>
                        </TableCell>
                        <TableCell>
                          <b>Flower Type</b>
                        </TableCell>
                        <TableCell>
                          <b>Delivery Date</b>
                        </TableCell>
                        <TableCell>
                          <b>Description</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{flowerData.senderName}</TableCell>
                        <TableCell>{flowerData.receiverName}</TableCell>
                        <TableCell>{flowerData.flowerType}</TableCell>
                        <TableCell>{flowerData.deliveryDate}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ) : row.serviceType === "Gift Delivery" ? (
                <>
                  <Table size={"small"}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Sender Name</b>
                        </TableCell>
                        <TableCell>
                          <b>Receiver Name</b>
                        </TableCell>
                        <TableCell>
                          <b>Gift Type</b>
                        </TableCell>
                        <TableCell>
                          <b>Delivery Date</b>
                        </TableCell>
                        <TableCell>
                          <b>Description</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{giftData.senderName}</TableCell>
                        <TableCell>{giftData.receiverName}</TableCell>
                        <TableCell>{giftData.giftType}</TableCell>
                        <TableCell>{giftData.deliveryDate}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ) : row.serviceType === "Medicine" ? (
                <>
                  <Table size={"small"}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Medicine Type</b>
                        </TableCell>
                        <TableCell>
                          <b>Dosage Amount</b>
                        </TableCell>
                        <TableCell>
                          <b>Dosage Form</b>
                        </TableCell>
                        <TableCell>
                          <b>Description</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{medicineData.medicineType}</TableCell>
                        <TableCell>{medicineData.dosageAmount}</TableCell>
                        <TableCell>{medicineData.dosageType}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ) : row.serviceType === "Medical Device" ? (
                <>
                  <Table size={"small"}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Device Type</b>
                        </TableCell>
                        <TableCell>
                          <b>Quantity</b>
                        </TableCell>
                        <TableCell>
                          <b>Description</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{medicalDeviceData.deviceName}</TableCell>
                        <TableCell>
                          {medicalDeviceData.deviceQuantity}
                        </TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ) : row.serviceType === "Room Scheduling" ? (
                <>
                  <Table size={"small"}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Start Time</b>
                        </TableCell>
                        <TableCell>
                          <b>End Time</b>
                        </TableCell>
                        <TableCell>
                          <b>Description</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          {roomSchedData && roomSchedData.startTime
                            ? roomSchedData.startTime
                            : "Loading..."}
                        </TableCell>
                        <TableCell>
                          {roomSchedData && roomSchedData.endTime
                            ? roomSchedData.endTime
                            : "Loading..."}
                        </TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ) : row.serviceType === "Religious" ? (
                <>
                  <Table size={"small"}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Religion</b>
                        </TableCell>
                        <TableCell>
                          <b>Object</b>
                        </TableCell>
                        <TableCell>
                          <b>Description</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          {religiousData && religiousData.religionName
                            ? religiousData.religionName
                            : "Loading..."}
                        </TableCell>
                        <TableCell>
                          {religiousData && religiousData.objectName
                            ? religiousData.objectName
                            : "Loading..."}
                        </TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ) : (
                <></>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function DashCurrentRequests({
  expanded,
  onExpandClick,
}: {
  expanded: boolean;
  onExpandClick: () => void;
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [requestData, setRequestData] = useState<ServiceRequest[]>();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Any");
  const [filterPriority, setFilterPriority] = useState("Any");
  const [filterStatus, setFilterStatus] = useState("Any");

  const filterRows = (rows: ServiceRequest[]) => {
    return rows.filter((row) => {
      const matchesSearchTerm =
        searchTerm === "" ||
        Object.values(row).some((val) =>
          val.toString().toLowerCase().includes(searchTerm.toLowerCase()),
        );
      const matchesFilterType =
        filterType === "Any" || row.serviceType === filterType;
      const matchesFilterPriority =
        filterPriority === "Any" || row.priority === filterPriority;
      const matchesFilterStatus =
        filterStatus === "Any" || row.status === filterStatus;
      return (
        matchesSearchTerm &&
        matchesFilterType &&
        matchesFilterPriority &&
        matchesFilterStatus
      );
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
      <div
        className={`${styles.currentRequestsContainer} ${
          expanded ? styles.expanded : styles.collapsed
        }`}
      >
        <div className={`${styles.currentRequestsHeader}`}>
          <h1 className={`${styles.sectionHeader}`}>Current Requests</h1>
          {expanded ? (
            <IconButton onClick={onExpandClick}>
              <ChevronLeftIcon />
            </IconButton>
          ) : (
            <IconButton onClick={onExpandClick}>
              <ChevronRightIcon />
            </IconButton>
          )}
        </div>
        {/*<hr className={`${styles.divider}`} />*/}
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
                  onChange={(event) =>
                    setFilterType(event.target.value as string)
                  }
                >
                  <MenuItem value={"Any"}>
                    <em>Any</em>
                  </MenuItem>
                  <MenuItem value={"Flower Delivery"}>Flower Delivery</MenuItem>
                  <MenuItem value={"Gift Delivery"}>Gift Delivery</MenuItem>
                  <MenuItem value={"Medicine"}>Medicine</MenuItem>
                  <MenuItem value={"Medical Device"}>Medical Device</MenuItem>
                  <MenuItem value={"Room Scheduling"}>Room Scheduling</MenuItem>
                  <MenuItem value={"Religious"}>Religious</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size={"small"} sx={{ px: "2%" }}>
                <InputLabel id="filterPriorityLabel">Priority</InputLabel>
                <Select
                  labelId="filterPriorityLabel"
                  id="filterPriority"
                  label="Priority"
                  defaultValue={"Any"}
                  onChange={(event) =>
                    setFilterPriority(event.target.value as string)
                  }
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
                  onChange={(event) =>
                    setFilterStatus(event.target.value as string)
                  }
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
        <TableContainer
          style={{
            overflow: "auto",
            padding: "0 4% 0 4%",
          }}
        >
          <Table size={"small"} stickyHeader>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell style={{ borderTopLeftRadius: "5px" }} />
                <StyledTableCell>
                  <b>ID</b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>Type</b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>Employee</b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>Location</b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>Priority</b>
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ borderTopRightRadius: "5px" }}
                >
                  <b>Status</b>
                </StyledTableCell>
              </StyledTableRow>
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
          style={{
            margin: "0 4% 2% 4%",
            border: "1px solid lightgray",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            height: "64px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        />
      </div>
    </>
  );
}
