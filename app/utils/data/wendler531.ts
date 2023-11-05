import type { WorkoutProgram } from "../types/types";

// Define the sample Wendler 5/3/1 program with a oneRepMax of 100 and percentage values
export const wendler531: WorkoutProgram = {
  id: 1,
  title: "Wendler 5/3/1",
  oneRepMax: 100, // Replace with your actual one-rep max

  weeklyWorkouts: [
    {
      id: 1,
      week: 1,
      workouts: [
        {
          id: 1,
          day: "Day 1",
          sets: [
            {
              id: 1,
              exercise: "Squat",
              reps: 5,
              weight: 0.65,
              completed: true,
            },
            {
              id: 2,
              exercise: "Squat",
              reps: 5,
              weight: 0.75,
              completed: true,
            },
            {
              id: 3,
              exercise: "Squat",
              reps: 5,
              weight: 0.85,
              completed: true,
            },
          ],
        },
        {
          id: 2,
          day: "Day 2",
          sets: [
            {
              id: 4,
              exercise: "Bench Press",
              reps: 5,
              weight: 0.5,
              completed: true,
            },
            {
              id: 5,
              exercise: "Bench Press",
              reps: 5,
              weight: 0.6,
              completed: true,
            },
            {
              id: 6,
              exercise: "Bench Press",
              reps: 5,
              weight: 0.7,
              completed: true,
            },
          ],
        },
        {
          id: 3,
          day: "Day 3",
          sets: [
            {
              id: 7,
              exercise: "Deadlift",
              reps: 5,
              weight: 0.7,
              completed: true,
            },
            {
              id: 8,
              exercise: "Deadlift",
              reps: 5,
              weight: 0.8,
              completed: true,
            },
            {
              id: 9,
              exercise: "Deadlift",
              reps: 5,
              weight: 0.9,
              completed: true,
            },
          ],
        },
        {
          id: 4,
          day: "Day 4",
          sets: [
            {
              id: 10,
              exercise: "Overhead Press",
              reps: 5,
              weight: 0.4,
              completed: true,
            },
            {
              id: 11,
              exercise: "Overhead Press",
              reps: 5,
              weight: 0.5,
              completed: true,
            },
            {
              id: 12,
              exercise: "Overhead Press",
              reps: 5,
              weight: 0.6,
              completed: true,
            },
          ],
        },
      ],
    },
    // Define workouts for additional weeks here
  ],
};
