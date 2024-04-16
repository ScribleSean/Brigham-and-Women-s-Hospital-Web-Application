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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../styles/Dashboard.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { ServiceRequest } from "common/src/backend_interfaces/ServiceRequest.ts";
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
  "&:nth-of-type(odd)": {
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
        <TableCell align="right">
          <span
            style={{
              backgroundColor: getPriorityColor(row.priority),
              borderRadius: "10px",
              padding: "4px 8px",
              color: "white",
            }}
          >
            {row.priority}
          </span>
        </TableCell>
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
        className={`${styles.currentRequestsContainer} ${expanded ? styles.expanded : styles.collapsed}`}
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
                  onChange={(event) =>
                    setFilterType(event.target.value as string)
                  }
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
            maxHeight: 440,
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
          }}
        />
      </div>
    </>
  );
}
