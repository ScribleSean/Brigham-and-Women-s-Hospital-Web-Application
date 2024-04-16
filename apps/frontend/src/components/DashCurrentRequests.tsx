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
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../styles/Dashboard.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
        <TableCell align="right">{row.requestType}</TableCell>
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

export default function DashCurrentRequests({
  expanded,
  onExpandClick,
}: {
  expanded: boolean;
  onExpandClick: () => void;
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
