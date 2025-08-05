import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, UserProfile, FitnessGoals, WorkoutData } from '../types';

interface AppContextType {
  state: AppState;
  updateUserProfile: (profile: UserProfile) => void;
  updateFitnessGoals: (goals: FitnessGoals) => void;
  addWorkout: (workout: WorkoutData) => void;
  setLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppAction =
  | { type: 'UPDATE_USER_PROFILE'; payload: UserProfile }
  | { type: 'UPDATE_FITNESS_GOALS'; payload: FitnessGoals }
  | { type: 'ADD_WORKOUT'; payload: WorkoutData }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: AppState = {
  userProfile: null,
  fitnessGoals: null,
  workouts: [],
  isLoading: false,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'UPDATE_USER_PROFILE':
      return { ...state, userProfile: action.payload };
    case 'UPDATE_FITNESS_GOALS':
      return { ...state, fitnessGoals: action.payload };
    case 'ADD_WORKOUT':
      return { ...state, workouts: [...state.workouts, action.payload] };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const updateUserProfile = (profile: UserProfile) => {
    dispatch({ type: 'UPDATE_USER_PROFILE', payload: profile });
  };

  const updateFitnessGoals = (goals: FitnessGoals) => {
    dispatch({ type: 'UPDATE_FITNESS_GOALS', payload: goals });
  };

  const addWorkout = (workout: WorkoutData) => {
    dispatch({ type: 'ADD_WORKOUT', payload: workout });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  return (
    <AppContext.Provider value={{
      state,
      updateUserProfile,
      updateFitnessGoals,
      addWorkout,
      setLoading,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}