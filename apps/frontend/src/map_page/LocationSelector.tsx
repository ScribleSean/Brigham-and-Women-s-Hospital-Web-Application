import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Box, InputAdornment } from "@mui/material";
import LocationIcon from "@mui/icons-material/NearMe";
import CancelIcon from "@mui/icons-material/Cancel";
import "./LocationSelector.css";
import { NodesOptionsRequest, Location } from "./types/map_page_types";
import axios from "axios";
import { Node } from "../../../backend/src/algorithms/DataStructures";

export function LocationSelector(): React.JSX.Element {
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
  }, []);

  const handleLocationChange = (newValue: Location | null) => {
    setLocation(newValue);
  };

  const handleDestinationChange = (newValue: Location | null) => {
    setDestination(newValue);
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
        }}
      >
        <Autocomplete
          sx={{ boxShadow: "0px 18px 11px -7px rgba(0,0,0,0.44)" }}
          value={location}
          onChange={(event, newValue) => handleLocationChange(newValue)}
          options={locations}
          getOptionLabel={(option) => option.longName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Location"
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
                        onClick={() => setLocation(null)}
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
          sx={{ boxShadow: "0px 18px 18px -10px rgba(0,0,0,0.77)" }}
          value={destination}
          onChange={(event, newValue) => handleDestinationChange(newValue)}
          options={locations}
          getOptionLabel={(option) => option.longName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Destination"
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
                        onClick={() => setDestination(null)}
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
