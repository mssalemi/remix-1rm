import React from "react";

import { Typography, Button, Form, Input, Switch } from "antd";

import { calculateOneRepMax } from "../../utils/helpers";
import { CompareFormulaDisplay } from "./CompareFormulaDisplay";
import { EPLEY, LOMBARDI } from "../../utils/helpers";

const { Title, Text } = Typography;

const FORMULAS = [
  {
    id: 0,
    key: 0,
    name: "Epley",
    formula: EPLEY,
  },
  {
    id: 1,
    key: 1,
    name: "Lombardi",
    formula: LOMBARDI,
  },
];

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
  const [formula, setFormula] = React.useState("Epley");
  const onFinishFailed = (errorInfo: any) => {
    console.log("[Failed]:", errorInfo);
  };

  type FieldType = {
    weight?: number;
    reps?: number;
    formula?: string;
  };

  const [checked, setChecked] = React.useState(false);

  const handleCustomize = (
    checked: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setChecked(checked);
  };

  const onFinish = ({ weight, reps }: { weight: number; reps: number }) => {
    const currentFormula = FORMULAS.find((f) => f.name === formula);

    const oneRepMax = Math.round(
      calculateOneRepMax(weight, reps, currentFormula?.formula)
    );
    setOneRepMax(oneRepMax);
  };

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        labelAlign="left"
        style={{
          backgroundColor: "#F5F5F5",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
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

        <Form.Item label="Customize RepMax Engine" valuePropName="checked">
          <Switch checked={checked} onChange={handleCustomize} />
        </Form.Item>

        {checked && (
          <CompareFormulaDisplay formula={formula} setFormula={setFormula} />
        )}

        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
          }}
        >
          Calculate
        </Button>
      </Form>
    </div>
  );
}
