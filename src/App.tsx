import React from "react";
import { useSelector } from "react-redux";
import AgendaObject from "./components/AgendaObject";
import Heading from "./components/Heading";
import { RootState } from "./store";

function App() {
  const state = useSelector((state: RootState) => state.agendaInformation);
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <Heading text={" Agenda Object List "} />
      {state.meeting.map((val: any, key: number) => {
        return (
          <AgendaObject
            objective={val.objective}
            date={val.date}
            time={val.time}
            calledBy={val.calledBy}
            callNo={val.callNo}
            callCode={val.callCode}
            timekeeper={val.timekeeper}
            attendees={val.attendees}
            location={val.location}
            meetingType={val.meetingType}
            facilitator={val.facilitator}
            noteTaker={val.noteTaker}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default App;
