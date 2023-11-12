import React, { useState } from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

import type { WorkoutProgram } from "app/utils/types/types";

import {
  GenerateWorkoutProgramForm,
  WorkoutContent,
  WorkoutProgramHero,
} from "./components";

import { Image, Form, Button, InputNumber } from "antd";
interface Props {
  workoutProgram: WorkoutProgram;
  setOneRepMax: React.Dispatch<
    React.SetStateAction<{
      squat: number;
      bench: number;
      deadlift: number;
    }>
  >;
}

const compoundExercises = [
  {
    name: "Bench Press",
    altName: "BP",
    key: "bench",
  },
  {
    name: "Squat",
    altName: "SQ",
    key: "squat",
  },
  {
    name: "Deadlift",
    altName: "DL",
    key: "deadlift",
  },
];

type SizeType = Parameters<typeof Form>[0]["size"];

export function WorkoutProgramDisplay({ workoutProgram, setOneRepMax }: Props) {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleSubmit = (values: any) => {
    setOneRepMax(values);
  };

  const oneRepMaxMarkup = (
    <Form
      // layout="horizontal"
      // initialValues={{ size: componentSize }}
      title={"Generate Workout Program"}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      onFinish={handleSubmit}
    >
      {compoundExercises.map(({ key, name, altName }, index) => (
        <Form.Item key={key} name={key}>
          <InputNumber placeholder={altName} size="large" />
        </Form.Item>
      ))}

      <Button type="primary" htmlType="submit">
        Generate Workout Program
      </Button>
    </Form>
  );

  return (
    <div>
      <div style={{}}>
        <Image
          src={
            "https://www.jimwendler.com/cdn/shop/products/531banner_copy2_1376x704.jpg?v=1631660295"
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <WorkoutContent title={"Meow"} sections={[]} />
      </div>
      {
        <>
          <div
            style={{
              paddingTop: "1rem",
            }}
          >
            <WorkoutProgramHero />
          </div>
          <div
            style={
              {
                // border: "1px dotted red",
              }
            }
          >
            <GenerateWorkoutProgramForm setOneRepMax={setOneRepMax} />
          </div>
          <div
            style={
              {
                // border: "1px dotted red",
              }
            }
          >
            {oneRepMaxMarkup}
          </div>
          {workoutProgram.weeklyWorkouts.map((workoutWeek, index) => {
            return (
              <WeeklyWorkoutDisplay
                key={index}
                days={workoutWeek.days}
                title={workoutWeek.title}
              />
            );
          })}
        </>
      }
      <div
        style={{
          height: 400,
          border: "1px solid dotted",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Workout Tips - Content
      </div>
    </div>
  );
}
