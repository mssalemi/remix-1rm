export function calculateOneRepMax(weight: number, reps: number): number {
  const repMaxPercentages: number[] = [
    100, 97, 94, 92, 89, 86, 83, 81, 78, 75, 73, 71, 70, 68, 67, 65, 64, 63, 61,
    60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,
  ];

  if (reps < 1 || reps > 30) {
    throw new Error("Reps must be between 1 and 30");
  }

  if (weight <= 0) {
    throw new Error("Weight must be greater than 0");
  }

  const index = reps - 1;
  const percentage = repMaxPercentages[index];

  return weight / (percentage / 100);
}

export function calculateWeightForReps(
  oneRepMax: number,
  reps: number
): number {
  const repMaxPercentages: number[] = [
    100, 97, 94, 92, 89, 86, 83, 81, 78, 75, 73, 71, 70, 68, 67, 65, 64, 63, 61,
    60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,
  ];

  if (reps < 1 || reps > 30) {
    throw new Error("Reps must be between 1 and 30");
  }

  if (oneRepMax <= 0) {
    throw new Error("One-rep max must be greater than 0");
  }

  const index = reps - 1;
  const percentage = repMaxPercentages[index];

  return (percentage / 100) * oneRepMax;
}
