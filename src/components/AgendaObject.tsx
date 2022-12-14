import React from "react";
import { Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_INFORMATION,
  SET_EDITBUTTON,
  SET_EDITOBJECT,
} from "../reducers";
import { RootState } from "../store";

interface MeetingObject {
  objective: string;
  date: string;
  time: string;
  callNo: string;
  calledBy: string;
  timekeeper: string;
  location: null | string;
  meetingType: string;
  callCode: string;
  facilitator: string;
  noteTaker: string;
  attendees: string;
  index: number;
}

const AgendaObject = (obj: MeetingObject) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.agendaInformation);
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          dispatch(SET_EDITBUTTON(true));
          dispatch(SET_EDITOBJECT(obj));
        }}
      >
        Edit
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          dispatch(DELETE_INFORMATION(obj));
        }}
      >
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["contextMenu"]}>
      <div className="w-[70%] h-auto bg-slate-200 px-8 py-4 rounded-lg mb-8">
        <h1 className="font-bold text-[24px] border-b-2 border-slate-300 my-4">
          Information of Meeting
        </h1>
        <div>
          <div className="flex my-2">
            <h3 className="w-[150px] font-bold">Objective:</h3>
            <h5 className="w-[100%] h-auto">{obj.objective}</h5>
          </div>
          <div className="flex">
            <div className="w-[50%]">
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Date: </h3>
                <h5 className="w-[100%] h-auto">{obj.date}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Time: </h3>
                <h5 className="w-[100%] h-auto">{obj.time}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Call No.: </h3>
                <h5 className="w-[100%] h-auto">{obj.callNo}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Called by: </h3>
                <h5 className="w-[100%] h-auto">{obj.calledBy}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Timekeeper: </h3>
                <h5 className="w-[100%] h-auto">{obj.timekeeper}</h5>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Location:</h3>
                <h5 className="w-[100%] h-auto">{obj.location}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Meeting Type: </h3>
                <h5 className="w-[100%] h-auto">{obj.meetingType}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Call Code: </h3>
                <h5 className="w-[100%] h-auto">{obj.callCode}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Facilitator: </h3>
                <h5 className="w-[100%] h-auto">{obj.facilitator}</h5>
              </div>
              <div className="flex my-2">
                <h3 className="w-[170px] font-bold">Note Taker: </h3>
                <h5 className="w-[100%] h-auto">{obj.noteTaker}</h5>
              </div>
            </div>
          </div>
          <div>
            <div className="flex my-2">
              <h3 className="w-[150px] font-bold">Attendees:</h3>
              <h5 className="w-[100%] h-auto">{obj.attendees}</h5>
            </div>
          </div>
        </div>
      </div>
    </Dropdown>
  );
};

export default AgendaObject;
