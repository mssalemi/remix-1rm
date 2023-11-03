import React from "react";

import { Card, List, Col, Row, Avatar } from "antd";

import { EyeOutlined } from "@ant-design/icons";

interface DailyWorkout {
  title?: string;
  exercises: {
    name: string;
    uniqueSets: {
      reps: number;
      weight: number;
      repeats?: number;
    }[];
  }[];
}

interface Props {
  dailyWorkout?: DailyWorkout;
  oneRepMax?: number;
}

const oneRepMax = 100;

const MOCK_DAILY_WORKOUT: DailyWorkout = {
  title: "Day 1",
  exercises: [
    {
      name: "Bench Press",
      uniqueSets: [
        {
          reps: 5,
          weight: oneRepMax * 0.65,
        },
        {
          reps: 5,
          weight: oneRepMax * 0.75,
        },
        {
          reps: 5,
          weight: oneRepMax * 0.85,
        },
        {
          reps: 10,
          weight: oneRepMax * 0.45,
          repeats: 5,
        },
      ],
    },
    {
      name: "Bench Press",
      uniqueSets: [
        {
          reps: 10,
          weight: oneRepMax * 0.45,
          repeats: 5,
        },
      ],
    },
  ],
};

export function DailyWorkoutDisplay({
  dailyWorkout = MOCK_DAILY_WORKOUT,
  oneRepMax = 0,
}: Props) {
  console.log("dailyWorkout:", dailyWorkout);
  return (
    <>
      <Row>
        <Col sm={24} md={12} lg={8}>
          <Card style={{}} title={dailyWorkout.title}>
            <List
              dataSource={dailyWorkout.exercises}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    style={{
                      alignSelf: "start",
                    }}
                    title={item.name}
                    // avatar={<EyeOutlined />}
                  />

                  <List
                    dataSource={item.uniqueSets}
                    renderItem={(item) => (
                      <List.Item title={"Bench Press"}>
                        {`${item.repeats ? `${item.repeats}x` : "1x"}${
                          item.reps
                        } @ ${item.weight} ${oneRepMax === 0 ? "%" : "lbs"}`}
                      </List.Item>
                    )}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
