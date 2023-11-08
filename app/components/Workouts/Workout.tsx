import React from "react";

import { WorkoutProgramDisplay } from "./WorkoutProgramDisplay";

import { Typography, Col, Row } from "antd";
import type { WorkoutProgram } from "~/utils/types/types";

const { Title } = Typography;

interface Props {
  program: WorkoutProgram;
  setOneRepMax: React.Dispatch<
    React.SetStateAction<{
      squat: number;
      bench: number;
      deadlift: number;
    }>
  >;
}

export function WorkoutDisplay({ program, setOneRepMax }: Props) {
  return (
    <div>
      <Row
        style={{
          padding: "1rem",
        }}
      >
        <Col span={24}>
          <Title keyboard>{program.title}</Title>
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
        }}
        dir="row"
      >
        <Col span={24}>
          <WorkoutProgramDisplay
            workoutProgram={program}
            setOneRepMax={setOneRepMax}
          />
        </Col>
      </Row>
    </div>
  );
}
