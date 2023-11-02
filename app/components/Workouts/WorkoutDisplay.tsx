import React from "react";

import { Card, List } from "antd";

interface DailyWorkout {
  title?: string;
  exercises: {
    name: string;
    uniqueSets: {
      reps: number;
      weight: number;
      repeats?: number;
    }[];
  }[];
}

interface Props {
  dailyWorkout?: DailyWorkout;
}

const oneRepMax = 100;

const MOCK_DAILY_WORKOUT: DailyWorkout = {
  title: "Day 1",
  exercises: [
    {
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
        {
          reps: 10,
          weight: oneRepMax * 0.45,
          repeats: 5,
        },
      ],
    },
    {
      name: "Bench Press",
      uniqueSets: [
        {
          reps: 10,
          weight: oneRepMax * 0.45,
          repeats: 5,
        },
      ],
    },
  ],
};

export function DailyWorkoutDisplay({
  dailyWorkout = MOCK_DAILY_WORKOUT,
}: Props) {
  console.log("dailyWorkout:", dailyWorkout);
  return (
    <>
      <Card
        style={{
          width: "20rem",
          height: "20rem",
        }}
        title={"Day 1"}
      >
        <List
          dataSource={dailyWorkout.exercises}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                style={{
                  alignSelf: "start",
                }}
                title={item.name}
              />
              <List
                dataSource={item.uniqueSets}
                renderItem={(item) => (
                  <List.Item>
                    {`${item.repeats ? `${item.repeats}x` : "1x"}${
                      item.reps
                    } @ ${item.weight} lbs`}
                  </List.Item>
                )}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}
