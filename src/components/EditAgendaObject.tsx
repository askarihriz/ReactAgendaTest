import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_MEETING, DELETE_INFORMATION, SET_EDITBUTTON } from "../reducers";
import { RootState } from "../store";

const EditAgendaObject = () => {
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
        Edit Meeting
      </h1>
      <div>
        <div className="flex my-2">
          <h3 className="w-[150px] font-bold">Objective:</h3>
          <input
            type={"text"}
            required
            // @ts-ignore
            placeholder={state.editChat.objective}
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
                // @ts-ignore
                placeholder={state.editChat.date}
                onChange={(e) => setDate(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Time: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.time}
                onChange={(e) => setTime(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Call No.: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.callNo}
                onChange={(e) => setCallNo(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Called by: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.calledBy}
                onChange={(e) => setCalledBy(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Timekeeper: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.timekeeper}
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
                // @ts-ignore
                placeholder={state.editChat.location}
                type={"text"}
                onChange={(e) => setLocation(e.target.value)}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Meeting Type: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.meetingType}
                onChange={(e) => setMeetingType(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Call Code: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.callCode}
                onChange={(e) => setCallCode(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Facilitator: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.facilitator}
                onChange={(e) => setFacilitator(e.target.value)}
                type={"text"}
                className="w-[90%] h-auto mr-4"
              ></input>
            </div>
            <div className="flex my-2">
              <h3 className="w-[170px] font-bold">Note Taker: </h3>
              <input
                required
                // @ts-ignore
                placeholder={state.editChat.noteTaker}
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
              // @ts-ignore
              placeholder={state.editChat.attendees}
              onChange={(e) => setAttendees(e.target.value)}
              type={"text"}
              className="w-[100%] h-auto"
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() => {
              dispatch(SET_EDITBUTTON(false));
              dispatch(
                ADD_MEETING({
                  objective:
                    // @ts-ignore
                    objective.length > 0 ? objective : state.editChat.objective,
                  // @ts-ignore
                  date: date.length > 0 ? date : state.editChat.date,
                  // @ts-ignore
                  time: time.length > 0 ? time : state.editChat.time,
                  // @ts-ignore
                  callNo: callNo.length > 0 ? callNo : state.editChat.callNo,
                  calledBy:
                    // @ts-ignore
                    calledBy.length > 0 ? calledBy : state.editChat.calledBy,
                  timekeeper:
                    timeKeeper.length > 0
                      ? timeKeeper
                      : // @ts-ignore
                        state.editChat.timekeeper,
                  location:
                    // @ts-ignore
                    location.length > 0 ? location : state.editChat.location,
                  meetingType:
                    meetingType.length > 0
                      ? meetingType
                      : // @ts-ignore
                        state.editChat.meetingType,
                  callCode:
                    // @ts-ignore
                    callCode.length > 0 ? callCode : state.editChat.callCode,
                  facilitator:
                    facilitator.length > 0
                      ? facilitator
                      : // @ts-ignore
                        state.editChat.facilitator,
                  noteTaker:
                    // @ts-ignore
                    noteTaker.length > 0 ? noteTaker : state.editChat.noteTaker,
                  attendees:
                    // @ts-ignore
                    attendees.length > 0 ? attendees : state.editChat.attendees,
                })
              );
              dispatch(DELETE_INFORMATION(state.editChat));
            }}
            className="border-black px-4 py-2 border-2 rounded-[4px] text-white bg-black cursor-pointer h-[41px]"
          >
            Update
          </button>
          <button
            onClick={() => dispatch(SET_EDITBUTTON(false))}
            className="border-black px-4 py-2 border-2 rounded-[4px] text-white bg-black cursor-pointer h-[41px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAgendaObject;
