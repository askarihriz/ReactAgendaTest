import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

export interface Information {
  meeting: Array<object>;
  createButton: Boolean;
  editButton: Boolean;
  editChat: object;
}

const initialState: Information = {
  meeting: [
    {
      objective: "Meeting to dicuss the annual progress of the Design department.",
      date: "01/07/2003",
      time: "7:00 PM",
      callNo: "0333-246287631",
      calledBy: "Clarie",
      timekeeper: "Michael",
      location: "Room-45",
      meetingType: "Annual",
      callCode: "CS-4048",
      facilitator: "Mr.George",
      noteTaker: "Farid Duyb",
      attendees: "Maria, Elise, Jeniffer, Alex, John, David"
    }
  ],
  createButton: false,
  editButton: false,
  editChat: {},
}

export const agendaInformation = createSlice({
  name: 'Agenda Information',
  initialState,
  reducers: {
    DELETE_INFORMATION: (state, action: PayloadAction<object>) => {
      let salt = current(state.meeting);
      salt = salt.filter((val:any)=>{
        // @ts-ignore
        if(val.objective !== action.payload.objective || val.date !== action.payload.date || val.time !== action.payload.time || val.callNo !== action.payload.callNo || val.calledBy !== action.payload.calledBy || val.timekeeper !== action.payload.timekeeper || val.location !== action.payload.location || val.meetingType !== action.payload.meetingType || val.callCode !== action.payload.callCode || val.facilitator !== action.payload.facilitator || val.noteTaker !== action.payload.noteTaker || val.attendees !== action.payload.attendees) {
          return true;
        }
        else {
          return false;
        }
      })
      state.meeting = salt;
    },
    SET_INFORMATION: (state, action: PayloadAction<Array<object>>) => {
      state.meeting = action.payload;
    },
    SET_EDITOBJECT: (state, action: PayloadAction<object>) => {
      state.editChat = action.payload;
    },
    SET_CREATEBUTTON: (state, action: PayloadAction<Boolean>) =>{
      state.createButton = action.payload;
    },
    SET_EDITBUTTON: (state, action: PayloadAction<Boolean>) =>{
      state.editButton = action.payload;
    },
    ADD_MEETING: (state, action: PayloadAction<object>) => {
      state.meeting.push(action.payload);
    }
  },
})

export const { SET_INFORMATION, DELETE_INFORMATION, SET_CREATEBUTTON, ADD_MEETING, SET_EDITBUTTON, SET_EDITOBJECT } = agendaInformation.actions

export default agendaInformation.reducer