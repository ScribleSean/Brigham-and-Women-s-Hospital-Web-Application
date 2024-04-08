import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Box, InputAdornment } from "@mui/material";
import LocationIcon from "@mui/icons-material/NearMe";
import CancelIcon from "@mui/icons-material/Cancel";
import "./LocationSelector.css";
import {
  NodesOptionsRequest,
  Location,
  LocationSelectorProps,
} from "./types/map_page_types";
import axios from "axios";
import { Node } from "../../../backend/src/algorithms/DataStructures";

export function LocationSelector(
  props: LocationSelectorProps,
): React.JSX.Element {
  const [locations, setLocations] = useState<Array<Location>>([]);
  const [location, setLocation] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);

  useEffect(() => {
    async function getLocations(): Promise<void> {
      try {
        const nodesOptionsRequest: NodesOptionsRequest = {
          includeHallways: false,
          byFloors: false,
        };
        const response = await axios.post<Array<Node>>(
          "/api/nodes",
          nodesOptionsRequest,
        );
        const fetchedLocations = response.data.map((node) => ({
          ID: node.ID,
          longName: node.longName,
        }));
        setLocations(fetchedLocations);
      } catch (error) {
        console.error("Failed to fetch nodes data:", error);
      }
    }
    getLocations();

    if (location && location.ID) {
      props.updateStartNodeID(location.ID);
    }

    if (destination && destination.ID) {
      props.updateEndNodeID(destination.ID);
    }
  }, [destination, location, props]);

  const handleLocationChange = (newValue: Location | null) => {
    setLocation(newValue);
  };

  const handleDestinationChange = (newValue: Location | null) => {
    setDestination(newValue);
  };

  const handleClearClick = () => {
    setLocation(null);
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
          marginTop: "3vh",
          marginLeft: "2vw",
        }}
      >
        <Autocomplete
          value={location}
          onChange={(event, newValue) => handleLocationChange(newValue)}
          options={locations}
          getOptionLabel={(option) => option.longName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Location"
              sx={{
                backgroundColor: "white",
                width: "15vw",
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
                    {location ? (
                      <CancelIcon
                        onClick={() => handleClearClick()}
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
          value={destination}
          onChange={(event, newValue) => handleDestinationChange(newValue)}
          options={locations}
          getOptionLabel={(option) => option.longName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Destination"
              sx={{
                backgroundColor: "white",
                width: "15vw",
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
                    {destination ? (
                      <CancelIcon
                        onClick={() => handleClearClick()}
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
