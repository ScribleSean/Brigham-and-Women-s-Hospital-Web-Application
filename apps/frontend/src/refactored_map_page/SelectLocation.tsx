import React from "react";
import { Autocomplete, TextField, Box, InputAdornment } from "@mui/material";
import LocationIcon from "@mui/icons-material/NearMe";
import CancelIcon from "@mui/icons-material/Cancel";
import "../map_page/LocationSelector.css";
import { Node } from "common/src/DataStructures.ts";
import { useMapContext } from "./MapContext.ts";
import { NodesByFloor } from "../../../../packages/common/src/types/map_page_types.ts";

function nodesByFloorsToNodes(nodesByFloor: NodesByFloor | null): Array<Node> {
  const nodes: Array<Node> = new Array<Node>();
  if (!nodesByFloor) return nodes;
  nodesByFloor.L2.forEach((node) => nodes.push(node));
  nodesByFloor.L1.forEach((node) => nodes.push(node));
  nodesByFloor.firstFloor.forEach((node) => nodes.push(node));
  nodesByFloor.secondFloor.forEach((node) => nodes.push(node));
  nodesByFloor.thirdFloor.forEach((node) => nodes.push(node));
  return nodes;
}

function LocationSelector(): React.JSX.Element {
  const {
    nodesByFloor,
    startNode,
    setStartNode,
    endNode,
    setEndNode,
    setCurrentFloor,
  } = useMapContext();

  const handleLocationChange = (newValue: Node | null) => {
    if (newValue) {
      setCurrentFloor(newValue.floor);
    }
    setStartNode(newValue);
  };

  const handleClearClickLocation = () => {
    setStartNode(null);
  };

  const handleDestinationChange = (newValue: Node | null) => {
    setEndNode(newValue);
  };

  const handleClearClickDestination = () => {
    setEndNode(null);
  };

  return (
    <div className="locationSelector">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "absolute",
          width: "16%",
          marginTop: "12vh",
          marginLeft: "7vw",
        }}
      >
        <Autocomplete
          value={startNode}
          onChange={(event, newValue) => handleLocationChange(newValue)}
          options={nodesByFloorsToNodes(nodesByFloor).sort((a, b) =>
            a.longName.localeCompare(b.longName),
          )}
          getOptionLabel={(node) => node.longName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Location"
              sx={{
                backgroundColor: "white",
                width: "20vw",
                color: "black",
                borderRadius: "0.5rem",
                boxShadow: 8,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes the border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes the border on focus
                  },
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {startNode ? (
                      <CancelIcon
                        onClick={() => handleClearClickLocation()}
                        style={{ cursor: "pointer" }}
                      />
                    ) : null}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Autocomplete
          value={endNode}
          onChange={(event, newValue) => handleDestinationChange(newValue)}
          options={nodesByFloorsToNodes(nodesByFloor)}
          getOptionLabel={(node) => node.longName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Destination"
              sx={{
                backgroundColor: "white",
                width: "20vw",
                color: "black",
                borderRadius: "0.5rem",
                boxShadow: 8,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Removes the border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Removes the border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Removes the border on focus
                  },
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {endNode ? (
                      <CancelIcon
                        onClick={() => handleClearClickDestination()}
                        style={{ cursor: "pointer" }}
                      />
                    ) : null}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
    </div>
  );
}
export default LocationSelector;
