// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import ticketReducer from '../features/ticket/TicketSlice'
import noteReducer from '../features/note/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer
  },
});
