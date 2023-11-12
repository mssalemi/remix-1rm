import React from "react";

import { Card, Col, Row, Button, Typography } from "antd";

import { CalculatorOutlined } from "@ant-design/icons";

interface Props {
  setOneRepMax: React.Dispatch<
    React.SetStateAction<{
      squat: number;
      bench: number;
      deadlift: number;
    }>
  >;
}

export function GenerateWorkoutProgramForm({ setOneRepMax }: Props) {
  return (
    <div>
      <Form />
    </div>
  );
}

const Form = () => {
  return (
    <Row
      gutter={16}
      style={{
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <Card
        title="Deadlift"
        bordered={false}
        size="small"
        style={{
          width: "100%",
        }}
        extra={<Button icon={<CalculatorOutlined />} />}
      >
        <Col span={8}>Card Content</Col>
        <Col span={8}>Card content</Col>
        <Col span={8}>Card content</Col>
      </Card>
    </Row>
  );
};
