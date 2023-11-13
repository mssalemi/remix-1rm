import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "@remix-run/react";

import { Row, Col, Typography, Tag, Table, Tabs } from "antd";

import type { TabsProps } from "antd";

import type { ColumnsType } from "antd/es/table";

import { trainingLevels } from "./strength-standards._index";

interface BenchPressDataRow {
  bodyWeight: number;
  untrained: number;
  novice: number;
  intermediate: number;
  advanced: number;
  elite: number;
  godlyStrength: number;
}

const columns: ColumnsType<BenchPressDataRow> = [
  {
    title: "Body Weight",
    dataIndex: "bodyWeight",
    key: "bodyWeight",
  },
  {
    title: "Untrained",
    dataIndex: "untrained",
    key: "untrained",
    render: (text) => <Tag color="#8bbb11">{text} lbs</Tag>,
  },
  {
    title: "Novice",
    dataIndex: "novice",
    key: "novice",
    render: (text) => <Tag color="#a8c1f8">{text} lbs</Tag>,
  },
  {
    title: "Intermediate",
    dataIndex: "intermediate",
    key: "intermediate",
    render: (text) => <Tag color="#7f9ef3">{text} lbs</Tag>,
  },
  {
    title: "Advanced",
    dataIndex: "advanced",
    key: "advanced",
    render: (text) => <Tag color="#5273e0">{text} lbs</Tag>,
  },
  {
    title: "Elite",
    dataIndex: "elite",
    key: "elite",
    render: (text) => <Tag color="#2b4acb">{text} lbs</Tag>,
  },
  {
    title: "Godly Strength",
    dataIndex: "godlyStrength",
    key: "godlyStrength",
    render: (text) => <Tag color="#d89614">{text} lbs</Tag>,
  },
];

const startWeight = 130;
const endWeight = 250;
const increment = 5;

const weightArray = Array.from(
  { length: Math.ceil((endWeight - startWeight) / increment) + 1 },
  (_, index) => startWeight + index * increment
);

console.log(weightArray);

const data: BenchPressDataRow[] = weightArray.map((bodyWeight) => {
  const calculateOneRepMax = (trainingLevelIndex: number) => {
    const result = calculateOneRepMaxRequired(
      30,
      bodyWeight,
      trainingLevels[trainingLevelIndex]
    );
    return Math.round(result.weight);
  };

  return {
    bodyWeight,
    untrained: calculateOneRepMax(0),
    novice: calculateOneRepMax(1),
    intermediate: calculateOneRepMax(2),
    advanced: calculateOneRepMax(3),
    elite: calculateOneRepMax(4),
    godlyStrength: calculateOneRepMax(5),
  };
});

const dataFemale: BenchPressDataRow[] = weightArray.map((bodyWeight) => {
  const calculateOneRepMax = (trainingLevelIndex: number) => {
    const result = calculateOneRepMaxRequired(
      30,
      bodyWeight,
      trainingLevels[trainingLevelIndex],
      "female"
    );
    return Math.round(result.weight);
  };

  return {
    bodyWeight,
    untrained: calculateOneRepMax(0),
    novice: calculateOneRepMax(1),
    intermediate: calculateOneRepMax(2),
    advanced: calculateOneRepMax(3),
    elite: calculateOneRepMax(4),
    godlyStrength: calculateOneRepMax(5),
  };
});

export default function StrengthStandardByExercise() {
  console.log(data);

  const { exercise } = useParams();

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Men",
      children: (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 6, defaultCurrent: 2 }}
        />
      ),
    },
    {
      key: "2",
      label: "Women",
      children: (
        <Table
          columns={columns}
          dataSource={dataFemale}
          pagination={{ pageSize: 6, defaultCurrent: 2 }}
        />
      ),
    },
  ];

  return (
    <Row
      style={{
        padding: "1rem",
      }}
    >
      <Col span={24}>
        <Typography.Title level={2}>{exercise?.toUpperCase()}</Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Text>
          Embark on a journey to redefine your bench press prowess with our
          meticulously curated strength standards table for males. Whether
          you're a seasoned lifter or just stepping into the world of weight
          training, this table provides a comprehensive guide to elevate your
          bench press game. Each category, from "Untrained" to "World-Class," is
          tailored to showcase achievable targets based on body weight
          multiples. It's not just about lifting weights; it's about setting
          personalized benchmarks for success. Indulge in the details, discover
          where you stand, and let the numbers be your motivation. Our table is
          designed to inspire and guide you through your bench press milestones.
          It's not a competition against others; it's a celebration of your
          individual strength journey. So, grasp that barbell, aim for your
          category, and witness the transformation of your bench press from a
          movement to a statement of strength. Happy lifting! 🏋️‍♂️💪
        </Typography.Text>
      </Col>
      <Col
        span={24}
        style={{
          overflow: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          indicatorSize={(origin) => origin - 16}
        />
      </Col>
    </Row>
  );
}

interface OneRepMaxResult {
  name: string;
  weight: number;
}

interface TrainingLevel {
  name: string;
  description: string;
  color: string;
  gender?: string;
}

function calculateOneRepMaxRequired(
  age: number,
  bodyweight: number,
  trainingLevel: TrainingLevel,
  gender: string = "male"
): OneRepMaxResult {
  // Adjust bodyweight for age (15% less for 45+)
  let adjustedBodyweight = age >= 45 ? bodyweight * 0.85 : bodyweight;

  if (gender == "female") {
    adjustedBodyweight = adjustedBodyweight * 0.75;
  }

  // Powerlifting WILK standards for males in the 18-45 age category
  const standards = {
    Untrained: 0.75,
    Novice: 1,
    Intermediate: 1.25,
    Advanced: 1.5,
    Elite: 1.75,
    "Godly Strength": 2.25,
  };

  // Get the one-rep max based on the provided training level
  const oneRepMax = standards[trainingLevel.name] * adjustedBodyweight;

  return {
    name: trainingLevel.name,
    weight: oneRepMax,
  };
}
