export interface Exercise {
  id: string;
  name: string;
  uniqueSets: {
    reps: number;
    weight: number;
    repeat: number;
    desc: string;
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
  oneRepMax: OneRepMax;
  weeklyWorkouts: WeeklyWorkout[];
}

export interface OneRepMax {
  bench: number;
  squat: number;
  deadlift: number;
}
