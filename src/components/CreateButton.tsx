import React from "react";
import { useDispatch } from "react-redux";
import { SET_CREATEBUTTON } from "../reducers";

export const CreateButton = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(SET_CREATEBUTTON(true))}
      className="border-black px-4 py-2 border-2 rounded-[4px] text-white bg-black cursor-pointer h-[41px]"
    >
      Create
    </div>
  );
};
