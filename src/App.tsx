import React from "react";
import { useSelector } from "react-redux";
import AgendaObject from "./components/AgendaObject";
import ExportButton from "./components/ExportButton";
import Heading from "./components/Heading";
import ImportButton from "./components/ImportButton";
import { RootState } from "./store";

function App() {
  const state = useSelector((state: RootState) => state.agendaInformation);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <Heading text={" Agenda Object List "} />
      <div className="flex my-8 justify-center items-center gap-8">
        <ImportButton />
        <ExportButton />
      </div>
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
            index={key}
          />
        );
      })}
    </div>
  );
}

export default App;
