import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_INFORMATION } from "../reducers";

const ImportButton = () => {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      // @ts-ignore
      const text = e.target.result;
      // @ts-ignore
      const json = JSON.parse(text);
      // @ts-ignore
      console.log(json.meeting[1]);
      let array: Array<object> = [];
      json.meeting.map((val: any, key: any) => {
        array.push(val);
      });
      console.log(array);
      dispatch(SET_INFORMATION(array));
    };
    reader.readAsText(e.target.files[0]);
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
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default ImportButton;
