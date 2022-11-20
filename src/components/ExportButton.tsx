import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ExportButton = () => {
  const data = useSelector((state: RootState) => state.agendaInformation);
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data.meeting)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();
  };
  return (
    <div
      onClick={exportData}
      className="border-black px-4 py-2 border-2 rounded-[4px] text-white bg-black cursor-pointer h-[41px]"
    >
      Export
    </div>
  );
};

export default ExportButton;
