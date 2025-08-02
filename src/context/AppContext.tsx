import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Doctor, Appointment } from '../types';
import { mockDoctors } from '../data/mockData';

interface AppState {
  doctors: Doctor[];
  appointments: Appointment[];
  searchTerm: string;
}

type AppAction =
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'ADD_APPOINTMENT'; payload: Appointment }
  | { type: 'SET_DOCTORS'; payload: Doctor[] };

const initialState: AppState = {
  doctors: mockDoctors,
  appointments: [],
  searchTerm: '',
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'ADD_APPOINTMENT':
      return { ...state, appointments: [...state.appointments, action.payload] };
    case 'SET_DOCTORS':
      return { ...state, doctors: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
