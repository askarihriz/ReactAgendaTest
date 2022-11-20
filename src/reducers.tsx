import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Information {
  meeting: Array<object>
}

const initialState: Information = {
  meeting: [
    {
      objective: "",
      date: "",
      time: "",
      callNo: "",
      calledBy: "",
      timekeeper: "",
      location: null,
      meetingType: "",
      callCode: "",
      facilitator: "",
      noteTaker: "",
      attendees: ""
    }
  ]
}

export const agendaInformation = createSlice({
  name: 'Agenda Information',
  initialState,
  reducers: {
    SET_INFORMATION: (state, action: PayloadAction<Array<object>>) => {
      state.meeting = action.payload;
    },
  },
})

export const { SET_INFORMATION } = agendaInformation.actions

export default agendaInformation.reducer