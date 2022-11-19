import React, { useState } from "react";

const ImportButton = () => {
  const [files, setFiles] = useState("");

  const handleChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target?.result);
      // @ts-ignore
      setFiles(e.target.result);
    };
  };

  return (
    <div>
      <label
        className="border-black px-4 py-2 border-2 rounded-[4px] text-white bg-black h-[45px] cursor-pointer"
        htmlFor="myFile"
      >
        Import
      </label>
      <input
        hidden
        type="file"
        id="myFile"
        name="myFile"
        onChange={handleChange}
      />
    </div>
  );
};

export default ImportButton;
