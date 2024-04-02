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

  // eslint-disable-next-line no-empty-function
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
