import React from "react";

import { Typography, Button, Form, Input } from "antd";

import { calculateOneRepMax } from "../../utils/helpers";

const { Title, Text } = Typography;

const DESC =
  "Calculate your one-rep max (1RM) for any lift. Your one-rep max is the max weight you can lift for a single repetition for a given exercise";

export function OneRepMaxCalculator({
  setOneRepMax,
}: {
  setOneRepMax: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div>
      <Title>One Rep Max Calculator</Title>
      <Text type="secondary">{DESC}</Text>
      <OneRepMaxForm setOneRepMax={setOneRepMax} />
    </div>
  );
}

function OneRepMaxForm({
  setOneRepMax,
}: {
  setOneRepMax: React.Dispatch<React.SetStateAction<number>>;
}) {
  const onFinish = ({ weight, reps }: { weight: number; reps: number }) => {
    console.log("[Success]", weight, "x", reps);
    const oneRepMax = Math.round(calculateOneRepMax(weight, reps));
    setOneRepMax(oneRepMax);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    weight?: number;
    reps?: number;
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Weight"
        name="weight"
        rules={[{ required: true, message: "Enter weight lifted" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Reps"
        name="reps"
        rules={[{ required: true, message: "Enter repetitions completed" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form.Item>
    </Form>
  );
}
