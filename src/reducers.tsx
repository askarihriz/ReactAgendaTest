import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Information {
  value: object
}

const initialState: Information = {
  value: {},
}

export const agendaInformation = createSlice({
  name: 'Agenda Information',
  initialState,
  reducers: {
    SET_INFORMATION: (state, action: PayloadAction<object>) => {
      state.value = action.payload
    },
  },
})

export const { SET_INFORMATION } = agendaInformation.actions

export default agendaInformation.reducer