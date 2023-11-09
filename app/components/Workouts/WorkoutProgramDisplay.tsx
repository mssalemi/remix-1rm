import React, { useState } from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

import type { WorkoutProgram } from "app/utils/types/types";

import { Card, Space, Form, Button, InputNumber } from "antd";
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
    <div
      style={{
        alignSelf: "center",
        justifyItems: "center",
      }}
    >
      <Form
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
        <Space.Compact>
          {compoundExercises.map(({ key, name, altName }, index) => (
            <Form.Item key={key} name={key}>
              {/* <Tag color="#2db7f5">{name}</Tag> */}
              <InputNumber placeholder={altName} size="middle" />
            </Form.Item>
          ))}
        </Space.Compact>

        <Button type="primary" htmlType="submit">
          Generate Workout Program
        </Button>
      </Form>
    </div>
  );
  return (
    <Card title={"Full Program"} extra={oneRepMaxMarkup}>
      {
        <>
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
    </Card>
  );
}
