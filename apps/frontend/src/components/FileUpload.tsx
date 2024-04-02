import React, { useEffect } from "react";
import "../styles/csvPage.css";

interface FileDropBoxProps {
  onFileDrop: (file: File) => void;
}

const FileDropBox: React.FC<FileDropBoxProps> = ({ onFileDrop }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    location.reload();

    const files = e.target.files;
    if (files) {
      const file = files[0];
      onFileDrop(file);
    }
  };

  // eslint-disable-next-line no-empty-function
  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <p className={"upload-descriptor-text"}>Upload a new dataset (.csv)</p>
        <input id="csv-upload" type="file" title={" "} onChange={handleUpload}/>
      </div>
      <br/>
    </div>
  );
};

export default FileDropBox;
