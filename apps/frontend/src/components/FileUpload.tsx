import React, { useEffect } from "react";

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

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <input id="csv-upload" type="file" onChange={handleUpload} />
      </div>
      <br />
    </div>
  );
};

export default FileDropBox;
