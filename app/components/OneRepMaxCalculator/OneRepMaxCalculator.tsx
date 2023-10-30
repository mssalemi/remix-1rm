import React from "react";

import { Typography, Button, Form, Input, Switch, Select, Table } from "antd";

import {
  calculateOneRepMax,
  STANDARD,
  EPLEY,
  LOMBARDI,
} from "../../utils/helpers";

const formulasData = {
  standard: STANDARD,
  epley: EPLEY,
  lombardi: LOMBARDI,
};

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
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    weight?: number;
    reps?: number;
  };

  const [checked, setChecked] = React.useState(false);

  const handleCustomize = (
    checked: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("Customize RepMax Engine");
    console.log("checked", checked);
    setChecked(checked);
  };

  const data = STANDARD.map((row, index) => {
    return {
      key: `${index}rep`,
      reps: index + 1,
      percentage: row,
    };
  });

  const columns = [
    {
      title: "Reps",
      dataIndex: "reps",
      key: "reps",
    },
    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
    },
  ];

  const [formula, setFormula] = React.useState("standard");

  const onFinish = ({ weight, reps }: { weight: number; reps: number }) => {
    console.log("[Success]", weight, "x", reps);

    const oneRepMax = Math.round(
      calculateOneRepMax(
        weight,
        reps,
        formulasData[formula as keyof typeof formulasData]
      )
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
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Form.Item
                label="Formula"
                name="formula"
                style={{
                  marginRight: "1rem",
                }}
              >
                <Select defaultValue={formula} onChange={setFormula}>
                  <Select.Option value="standard">Standard</Select.Option>
                  <Select.Option value="epley">Epley</Select.Option>
                  <Select.Option value="lombardi">Lombardi</Select.Option>
                </Select>
                <Typography
                  style={{
                    marginTop: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  <Text type="secondary">
                    The standard formula is the most accurate for most people.
                    It is based on the Epley formula, but modified to make it
                    easier to use for multiple reps.
                  </Text>
                </Typography>
              </Form.Item>
              <div>
                {" "}
                <Table
                  columns={columns}
                  dataSource={data}
                  bordered
                  title={() => "Percentages of 1RM"}
                  pagination={{ pageSize: 4 }}
                />
              </div>
            </div>
          </>
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
