import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "@remix-run/react";

import { Row, Col, Typography, Tag, Table } from "antd";

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

export default function StrengthStandardByExercise() {
  console.log(data);

  const { exercise } = useParams();
  trainingLevels.forEach((trainingLevel) => {
    console.log(
      trainingLevel.name,
      calculateOneRepMaxRequired(30, 180, trainingLevel).weight
    );
  });

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
          Welcome to the realm of the Iron Giants, where mere mortals look up to
          you with a mix of awe and confusion. You've transcended the ordinary,
          turning the gym into your personal playground. As an elite lifter,
          you're not just lifting weights; you're orchestrating a symphony of
          strength that leaves everyone else wondering if they accidentally
          stumbled into a superhero convention.
        </Typography.Text>
        <br />
        <Typography.Title level={4}>Bench Press - Adult Men</Typography.Title>
      </Col>
      <Col span={12}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 6, defaultCurrent: 2 }}
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
}

function calculateOneRepMaxRequired(
  age: number,
  bodyweight: number,
  trainingLevel: TrainingLevel
): OneRepMaxResult {
  // Adjust bodyweight for age (15% less for 45+)
  const adjustedBodyweight = age >= 45 ? bodyweight * 0.85 : bodyweight;

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
