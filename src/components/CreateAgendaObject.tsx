import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_MEETING, SET_CREATEBUTTON } from "../reducers";
import { RootState } from "../store";

const CreateAgendaObject = () => {
  const [objective, setObjective] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [callNo, setCallNo] = useState("");
  const [calledBy, setCalledBy] = useState("");
  const [timeKeeper, setTimeKeeper] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [location, setLocation] = useState("");
  const [callCode, setCallCode] = useState("");
  const [facilitator, setFacilitator] = useState("");
  const [noteTaker, setNoteTaker] = useState("");
  const [attendees, setAttendees] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.agendaInformation);

  return (
    <div className="w-[70%] h-auto bg-slate-200 px-8 py-4 rounded-lg mb-8">
      <h1 className="font-bold text-[24px] border-b-2 border-slate-300 my-4">
        Create A New Meeting
      </h1>
      <div>
        <div className="flex my-2">
          <h3 className="w-[150px] font-bold">Objective:</h3>
          <input
            type={"text"}
            required
            onChange={(e) => setObjective(e.target.value)}
            className="w-[100%] h-auto"
          ></input>
        </div>
        <div className="flex">
          <div className="w-[50%]">
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Date: </h3>
              <input
                required
                onChange={(e) => setDate(e.target.value)}
                type={"date"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Time: </h3>
              <input
                required
                onChange={(e) => setTime(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Call No.: </h3>
              <input
                required
                onChange={(e) => setCallNo(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Called by: </h3>
              <input
                required
                onChange={(e) => setCalledBy(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Timekeeper: </h3>
              <input
                required
                onChange={(e) => setTimeKeeper(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Location:</h3>
              <input
                required
                type={"text"}
                onChange={(e) => setLocation(e.target.value)}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Meeting Type: </h3>
              <input
                required
                onChange={(e) => setMeetingType(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Call Code: </h3>
              <input
                required
                onChange={(e) => setCallCode(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Facilitator: </h3>
              <input
                required
                onChange={(e) => setFacilitator(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Note Taker: </h3>
              <input
                required
                onChange={(e) => setNoteTaker(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
          </div>
        </div>
        <div>
          <div className="flex my-2">
            <h3 className="w-[150px] font-bold">Attendees:</h3>
            <input
              required
              onChange={(e) => setAttendees(e.target.value)}
              type={"text"}
              className="w-[100%] h-auto"
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() => {
              dispatch(SET_CREATEBUTTON(false));
              dispatch(
                ADD_MEETING({
                  objective: objective,
                  date: date,
                  time: time,
                  callNo: callNo,
                  calledBy: calledBy,
                  timekeeper: timeKeeper,
                  location: location,
                  meetingType: meetingType,
                  callCode: callCode,
                  facilitator: facilitator,
                  noteTaker: noteTaker,
                  attendees: attendees,
                })
              );
            }}
            className="border-black px-4 py-2 border-2 rounded-[4px] text-white bg-black cursor-pointer h-[41px]"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(SET_CREATEBUTTON(false))}
            className="border-black px-4 py-2 border-2 rounded-[4px] text-white bg-black cursor-pointer h-[41px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAgendaObject;
