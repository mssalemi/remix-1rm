import {
  Exercise,
  DailyWorkout,
  WeeklyWorkout,
  WorkoutProgram,
  OneRepMax,
} from "../types/types";

export function WENDLER_DAILY_WORKOUT__BENCH(oneRepMax: number): DailyWorkout {
  return {
    title: "Day 1",
    exercises: [
      {
        id: "bench",
        name: "Bench Press",
        uniqueSets: [
          {
            reps: 5,
            weight: oneRepMax * 0.65,
          },
          {
            reps: 5,
            weight: oneRepMax * 0.75,
          },
          {
            reps: 5,
            weight: oneRepMax * 0.85,
          },
        ],
      },
      {
        name: "Bench Press (Accessory)",
        id: "bench-accessory",
        uniqueSets: [
          {
            reps: 10,
            weight: oneRepMax * 0.45,
            repeat: 5,
          },
        ],
      },
      {
        name: "Tricep Extension",
        id: "tricep-extension",
        uniqueSets: [
          {
            reps: 10,
            weight: oneRepMax * 0.7,
            repeat: 3,
          },
        ],
      },
      {
        name: "Abs",
        id: "abs-yolo",
        uniqueSets: [
          {
            reps: 10,
            weight: 0,
            repeat: 3,
          },
        ],
      },
    ],
  };
}

export function WENDLER_DAILY_WORKOUT_SQUAT(oneRepMax: number): DailyWorkout {
  return {
    title: "Day 2",
    exercises: [
      {
        name: "Squat",
        id: "squat",
        uniqueSets: [
          {
            reps: 5,
            weight: oneRepMax * 0.65,
          },
          {
            reps: 5,
            weight: oneRepMax * 0.75,
          },
          {
            reps: 5,
            weight: oneRepMax * 0.85,
          },
        ],
      },
      {
        name: "Leg Extension",
        id: "leg-extension",
        uniqueSets: [
          {
            reps: 10,
            weight: oneRepMax * 0.7,
            repeat: 3,
          },
        ],
      },
    ],
  };
}

export function WENDLER_DAILY_WORKOUT_DEADLIFT(
  oneRepMax: number
): DailyWorkout {
  return {
    title: "Day 3",
    exercises: [
      {
        name: "Deadlift",
        id: "deadlift",
        uniqueSets: [
          {
            reps: 5,
            weight: oneRepMax * 0.65,
          },
          {
            reps: 5,
            weight: oneRepMax * 0.75,
          },
          {
            reps: 5,
            weight: oneRepMax * 0.85,
          },
        ],
      },
    ],
  };
}

// Returns week 1
export function weeklyWendlerWorkout({
  bench,
  squat,
  deadlift,
}: {
  bench: number;
  squat: number;
  deadlift: number;
}): WeeklyWorkout {
  return {
    id: 1,
    title: "Week 1",
    days: [
      WENDLER_DAILY_WORKOUT__BENCH(bench),
      WENDLER_DAILY_WORKOUT_SQUAT(squat),
      WENDLER_DAILY_WORKOUT_DEADLIFT(deadlift),
    ],
  };
}

interface WendlerWorkoutProgramCreate {
  oneRepMax: OneRepMax;
  title: string;
  totalWeeks: number;
}

export function wendler531WorkoutProgram({
  oneRepMax,
  title = "Wendler 5/3/1",
  totalWeeks = 4,
}: WendlerWorkoutProgramCreate): WorkoutProgram {
  // const { bench, squat, deadlift } = oneRepMax;
  const weeklyWorkouts: WeeklyWorkout[] = [
    weeklyWendlerWorkout(oneRepMax),
    weeklyWendlerWorkout(oneRepMax),
  ];

  return {
    id: 1234,
    title,
    oneRepMax,
    weeklyWorkouts,
  };
}
