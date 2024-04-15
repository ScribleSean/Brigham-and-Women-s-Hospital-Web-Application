import React from "react";

import { Button, Box, FormControl } from "@mui/material";
import { useMapContext } from "./MapContext";

const ClearPathButton: React.FC = () => {
  const { setStartNode, setEndNode } = useMapContext();

  const handleClick = () => {
    setStartNode(null);
    setEndNode(null);
  };

  return (
    <Box mt={2}>
      <Box mb={2} display="flex" justifyContent="flex-start">
        <FormControl>
          <Button variant="contained" color="primary" onClick={handleClick}>
            CLEAR PATH
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ClearPathButton;
