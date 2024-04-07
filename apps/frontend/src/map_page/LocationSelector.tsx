import React, { useState } from "react";
import { Autocomplete, TextField, Box, InputAdornment } from "@mui/material";
import LocationIcon from "@mui/icons-material/NearMe";
import CancelIcon from "@mui/icons-material/Cancel";
import "./LocationSelector.css";

export function LocationSelector(): React.JSX.Element {
  const [location, setLocation] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);

  const locations = [
    { label: "Home", value: "home" },
    { label: "Work", value: "work" },
    { label: "Airport", value: "airport" },
  ];

  const handleLocationChange = (
    newValue: { label: string; value: string } | null,
  ) => {
    setLocation(newValue?.value || null);
  };

  const handleDestinationChange = (
    newValue: { label: string; value: string } | null,
  ) => {
    setDestination(newValue?.value || null);
  };

  return (
    <div className={"locationSelector"}>
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
          value={locations.find((c) => c.value === location)}
          onChange={(event, newValue) => handleLocationChange(newValue)}
          options={locations}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    zIndex: -1,
                    backgroundColor: "white",
                    width: "15vw",
                    borderColor: "black", // Set border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black", // Keep border color black when focused
                  },
                  "& input": {
                    color: "black", // Set input text color
                  },
                },
              }}
              {...params}
              label="Enter Location"
              InputLabelProps={{
                shrink: !!location,
                style: { paddingLeft: 30, color: "grey" },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "black",
                        marginRight: 1,
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {location ? (
                      <CancelIcon
                        sx={{
                          color: "black",
                          cursor: "pointer",
                          marginLeft: 30,
                          marginBottom: 5,
                        }}
                        onClick={() => {
                          setLocation(null);
                          if (
                            params.inputProps.onChange &&
                            typeof params.inputProps.onChange === "function"
                          ) {
                            // params.inputProps.onChange({ target: { value: "" } });
                          }
                        }}
                      />
                    ) : (
                      <LocationIcon
                        sx={{ color: "black", marginLeft: 30, marginBottom: 5 }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Box
          sx={{
            position: "absolute",
            height: "55%",
            width: "0.1em",
            backgroundColor: "black",
            left: 13,
            top: 30,
          }}
        />
        <Autocomplete
          sx={{
            boxShadow: "0px 18px 18px -10px rgba(0,0,0,0.77)",
            borderColor: "black",
          }}
          value={locations.find((c) => c.value === destination)}
          onChange={(event, newValue) => handleDestinationChange(newValue)}
          options={locations}
          getOptionLabel={(option) => option.label}
          popupIcon={null}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    zIndex: -1,
                    backgroundColor: "white",
                    width: "15vw",
                    borderColor: "black", // Set border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black", // Keep border color black when focused
                  },
                  "& input": {
                    color: "black", // Set input text color
                  },
                },
              }}
              label="Enter Destination"
              InputLabelProps={{
                shrink: !!destination,
                style: { paddingLeft: 30, color: "grey" },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: "black",
                        marginRight: 1,
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: destination ? (
                  <InputAdornment position="end">
                    <CancelIcon
                      sx={{
                        color: "black",
                        cursor: "pointer",
                        marginLeft: 30,
                        marginBottom: 5,
                      }}
                      onClick={() => {
                        setDestination(null); // Clear the destination state
                        if (
                          params.inputProps.onChange &&
                          typeof params.inputProps.onChange === "function"
                        ) {
                          // params.inputProps.onChange({ target: { value: "" } }); // Clear the input field safely
                        }
                      }}
                    />
                  </InputAdornment>
                ) : null,
              }}
            />
          )}
        />
      </Box>
    </div>
  );
}
