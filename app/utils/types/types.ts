export interface Exercise {
  id: string;
  name: string;
  uniqueSets: {
    reps: number;
    weight: number;
    repeat?: number;
  }[];
}

export interface DailyWorkout {
  title: string;
  exercises: Exercise[];
}

export interface WeeklyWorkout {
  id?: number;
  title: string;
  days: DailyWorkout[];
}

export interface WorkoutProgram {
  id: number;
  title: string;
  oneRepMax: number;
  weeklyWorkouts: WeeklyWorkout[];
}

export interface OneRepMax {
  [key: string]: number;
}
