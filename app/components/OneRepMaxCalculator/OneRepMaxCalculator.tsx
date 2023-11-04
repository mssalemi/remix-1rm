import React from "react";

import { useLocation } from "@remix-run/react";

import { Typography, Button, Form, Input, Switch } from "antd";

import {
  calculateOneRepMax,
  EPLEY,
  LOMBARDI,
  MOSHID,
} from "../../utils/helpers";
import { CompareFormulaDisplay } from "./CompareFormulaDisplay";

const { Title, Text } = Typography;

const FORMULAS = [
  {
    id: 0,
    key: 0,
    name: "epley",
    formula: EPLEY,
  },
  {
    id: 1,
    key: 1,
    name: "lombardi",
    formula: LOMBARDI,
  },
  {
    id: 2,
    key: 2,
    name: "moshid",
    formula: MOSHID,
  },
];

const DESC =
  "Calculate your one-rep max (1RM) for any lift. Your one-rep max is the max weight you can lift for a single repetition for a given exercise";

export function OneRepMaxCalculator({
  setOneRepMax,
  formula,
  setFormula,
}: {
  setOneRepMax: React.Dispatch<React.SetStateAction<number>>;
  formula: string;
  setFormula: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <Title>One Rep Max Calculator</Title>
      <Text type="secondary">{DESC}</Text>
      <OneRepMaxForm
        setOneRepMax={setOneRepMax}
        formula={formula}
        setFormula={setFormula}
      />
    </div>
  );
}

function OneRepMaxForm({
  setOneRepMax,
  formula,
  setFormula,
}: {
  setOneRepMax: React.Dispatch<React.SetStateAction<number>>;
  formula: string;
  setFormula: React.Dispatch<React.SetStateAction<string>>;
}) {
  const onFinishFailed = (errorInfo: any) => {
    console.log("[Failed]:", errorInfo);
  };

  const handleSetFormula = (formula: string) => {
    setFormula(formula);
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

    console.log("currentFormula", currentFormula);
    const oneRepMax = Math.round(
      calculateOneRepMax(weight, reps, currentFormula?.formula)
    );
    setOneRepMax(oneRepMax);
  };

  const location = useLocation();

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <Form
        key={location.key}
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

        <Form.Item label="Customize" valuePropName="checked">
          <Switch checked={checked} onChange={handleCustomize} />
        </Form.Item>

        {checked && (
          <CompareFormulaDisplay
            formula={formula}
            setFormula={handleSetFormula}
          />
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
