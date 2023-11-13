import React, { useState } from "react";

import { Card, Col, Row, Button, Typography, Form, InputNumber } from "antd";

interface Props {
  setOneRepMax: React.Dispatch<
    React.SetStateAction<{
      squat: number;
      bench: number;
      deadlift: number;
    }>
  >;
}

type SizeType = Parameters<typeof Form>[0]["size"];

export function GenerateWorkoutProgramForm({ setOneRepMax }: Props) {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const [squat, setSquat] = useState(0);
  const [bench, setBench] = useState(0);
  const [deadlift, setDeadlift] = useState(0);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleSubmit = (values: any) => {
    setOneRepMax({
      squat: values.squat,
      bench: values.bench,
      deadlift: values.deadlift,
    });
  };
  return (
    <div>
      <Form
        layout="horizontal"
        // initialValues={{ size: componentSize }}
        title={"Generate Workout Program"}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        onFinish={handleSubmit}
      >
        <Row>
          <Col span={8}>
            <Form.Item key={"squat"} name={"squate"}>
              <InputNumber
                style={{
                  width: "100%",
                }}
                placeholder={"squat"}
                size="large"
                value={squat}
                onChange={(value) => setSquat(value!)}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item key={"bench"} name={"bench"}>
              <InputNumber
                style={{
                  width: "100%",
                }}
                placeholder={"bench"}
                size="large"
                value={bench}
                onChange={(value) => setBench(value!)}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item key={"deadlift"} name={"deadlift"}>
              <InputNumber
                placeholder={"deadlift"}
                style={{
                  width: "100%",
                }}
                size="large"
                value={deadlift}
                onChange={(value) => setDeadlift(value!)}
              />
            </Form.Item>
          </Col>
        </Row>

        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
          }}
        >
          Generate Workout Program
        </Button>
      </Form>
    </div>
  );
}
