// Global type definitions for RunCoach AI

export interface UserProfile {
  name: string;
  age: number;
  height: number; // in cm
  weight: number; // in kg
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  weeklyAvailability: number; // hours per week
  syncPreferences: {
    garmin: boolean;
    appleWatch: boolean;
    strava: boolean;
  };
}

export interface FitnessGoals {
  primaryGoal: 'marathon' | 'weightLoss' | 'speedImprovement' | 'general';
  targetMetrics: {
    pace?: string; // e.g., "5:30/km"
    weight?: number;
    vo2Max?: number;
  };
  weeklyGoals: {
    distance: number;
    workouts: number;
  };
  longTermGoals: {
    targetDate?: string;
    targetEvent?: string;
  };
}

export interface WorkoutData {
  id: string;
  date: string;
  type: 'run' | 'strength' | 'recovery';
  duration: number; // minutes
  distance?: number; // km
  pace?: string;
  heartRate?: number;
  calories?: number;
}

export interface AppState {
  userProfile: UserProfile | null;
  fitnessGoals: FitnessGoals | null;
  workouts: WorkoutData[];
  isLoading: boolean;
}