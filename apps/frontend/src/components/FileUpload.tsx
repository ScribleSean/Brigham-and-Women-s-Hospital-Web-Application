import React from "react";
import "../styles/csvPage.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, styled } from "@mui/material";

interface FileDropBoxProps {
  onFileDrop: (file: File) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload: React.FC<FileDropBoxProps> = ({ onFileDrop }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    location.reload();

    const files = e.target.files;
    if (files) {
      const file = files[0];
      onFileDrop(file);
    }
  };

  return (
    <div>
      <div>
        <Button
          component={"label"}
          variant={"contained"}
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "#012d5a",
            height: "40px",
            marginRight: "16px",
          }}
        >
          Upload Data
          <VisuallyHiddenInput
            type={"file"}
            accept={".csv"}
            onChange={handleUpload}
          />
        </Button>
      </div>
      <br />
    </div>
  );
};

export default FileUpload;
