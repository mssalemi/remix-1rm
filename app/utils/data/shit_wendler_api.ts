import type {
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
  const weeklyWorkouts: WeeklyWorkout[] = [1, 2, 3, 4].map((weekNum) => {
    return createWendlerWorkoutWeek(oneRepMax, weekNum);
  });

  return {
    id: 1,
    title,
    oneRepMax,
    weeklyWorkouts,
  };
}

// This creates a wendler 5/3/1 program, mainly for testing
// This is a crap function, stupidly annoying...
function createWendlerWorkoutWeek(
  oneRepMax: OneRepMax,
  weekNum: number
): WeeklyWorkout {
  const { bench, squat, deadlift } = oneRepMax;

  let repPercentages: number[] = [];
  let reps: number[] = [];

  console.log(bench, squat, deadlift);

  switch (weekNum) {
    case 1:
      reps = [5, 5, 5];
      repPercentages = [0.65, 0.75, 0.85];
      break;
    case 2:
      reps = [3, 3, 3];
      repPercentages = [0.7, 0.8, 0.9];
      break;
    case 3:
      reps = [5, 3, 1];
      repPercentages = [0.75, 0.85, 0.95];
      break;
    case 4:
      reps = [5, 5, 5];
      repPercentages = [0.4, 0.5, 0.6];
      break;
  }

  const benchSets = reps.map((rep, index) => {
    return {
      reps: rep,
      weight: bench * repPercentages[index],
    };
  });

  const benchExercise: Exercise = {
    id: "bench",
    name: "Bench Press",
    uniqueSets: benchSets,
  };

  const benchAccessorySets = reps.map((rep, index) => {
    return {
      reps: rep,
      weight: bench * repPercentages[index],
    };
  });

  const benchAccessoryExercise: Exercise = {
    id: "bench-accessory",
    name: "Bench Press",
    uniqueSets: benchAccessorySets,
  };

  const benchTricepSets = {
    reps: 10,
    weight: 0,
    repeat: 3,
  };

  const benchTricepExercise: Exercise = {
    id: "bench-tricep",
    name: "Tricep Extension",
    uniqueSets: [benchTricepSets],
  };

  const benchAbsSets = {
    reps: 15,
    weight: 0,
    repeat: 4,
  };

  const benchAbsExercise: Exercise = {
    id: "bench-abs",
    name: "Abs",
    uniqueSets: [benchAbsSets],
  };

  const squatSets = reps.map((rep, index) => {
    return {
      reps: rep,
      weight: squat * repPercentages[index],
    };
  });

  const squatExercise: Exercise = {
    id: "squat",
    name: "Squat",
    uniqueSets: squatSets,
  };

  const squatAccessorySets = reps.map((rep, index) => {
    return {
      reps: rep,
      weight: squat * repPercentages[index],
    };
  });

  const squatAccessoryExercise: Exercise = {
    id: "squat-accessory",
    name: "Squat",
    uniqueSets: squatAccessorySets,
  };

  const deadliftSets = reps.map((rep, index) => {
    return {
      reps: rep,
      weight: deadlift * repPercentages[index],
    };
  });

  return {
    id: 1,
    title: `Week ${weekNum}`,
    days: [
      {
        title: "Day 1",
        exercises: [
          benchExercise,
          benchAccessoryExercise,
          benchTricepExercise,
          benchAbsExercise,
        ],
      },
      {
        title: "Day 2",
        exercises: [squatExercise, squatAccessoryExercise],
      },
      {
        title: "Day 3",
        exercises: [
          {
            id: "deadlift",
            name: "Deadlift",
            uniqueSets: deadliftSets,
          },
        ],
      },
    ],
  };
}
