import React, { useState } from "react";

import { WorkoutProgramDisplay } from "./WorkoutProgramDisplay";

import { Typography, Col, Row, Form, InputNumber, Button, Space } from "antd";

const { Title } = Typography;

interface Props {
  title: string;
}

const compoundExercises = [
  {
    name: "Bench Press",
    altName: "BP",
    key: "benchPress",
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
  {
    name: "Overhead Press",
    altName: "OHP",
    key: "overheadPress",
  },
];

type SizeType = Parameters<typeof Form>[0]["size"];

export function WorkoutDisplay({ title }: Props) {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const [data, setData] = useState<{
    [key: string]: number;
  }>(null);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    setData(values);
  };

  return (
    <div>
      <Row
        style={{
          padding: "1rem",
        }}
      >
        <Col span={24}>
          <Title keyboard>{title}</Title>
        </Col>
      </Row>
      <Row
        style={{
          padding: "1rem",
        }}
        dir="row"
      >
        <Col span={24}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
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
        </Col>
        <Col span={24}>
          <WorkoutProgramDisplay title={"Wendler 5/3/1"} />
        </Col>
      </Row>
    </div>
  );
}
