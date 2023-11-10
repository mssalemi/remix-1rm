import React, { useState } from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

import type { WorkoutProgram } from "app/utils/types/types";

import { WorkoutContent } from "./components/WorkoutContent";

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
    <div>
      <Form
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
        {compoundExercises.map(({ key, name, altName }, index) => (
          <Form.Item key={key} name={key}>
            <InputNumber placeholder={altName} size="middle" />
          </Form.Item>
        ))}

        <Button type="primary" htmlType="submit">
          Generate Workout Program
        </Button>
      </Form>
    </div>
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
        }}
      >
        <WorkoutContent />
      </div>
      {
        <>
          <div
            style={{
              height: 100,
              border: "1px solid red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Full Program - Header
          </div>
          <div
            style={{
              border: "1px solid red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
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
          border: "1px solid black",
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
