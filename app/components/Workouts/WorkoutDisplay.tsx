import React from "react";

import { Card, List, Col, Row, Typography, Divider } from "antd";

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

const { Text } = Typography;

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
      ],
    },
    {
      name: "Bench Press (Accessory)",
      uniqueSets: [
        {
          reps: 10,
          weight: oneRepMax * 0.45,
          repeats: 5,
        },
      ],
    },
    {
      name: "Tricep Extension",
      uniqueSets: [
        {
          reps: 10,
          weight: oneRepMax * 0.7,
          repeats: 3,
        },
      ],
    },
    {
      name: "Abs",
      uniqueSets: [
        {
          reps: 10,
          weight: oneRepMax * 0.7,
          repeats: 3,
        },
      ],
    },
  ],
};

const MOCK_DAILY_WORKOUT_2: DailyWorkout = {
  title: "Day 2",
  exercises: [
    {
      name: "Squat",
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
      ],
    },
    {
      name: "Leg Extension",
      uniqueSets: [
        {
          reps: 10,
          weight: oneRepMax * 0.7,
          repeats: 3,
        },
      ],
    },
  ],
};

const MOCK_DAILY_WORKOUT_3: DailyWorkout = {
  title: "Day 3",
  exercises: [
    {
      name: "Deadlift",
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
      ],
    },
  ],
};

export function WeeklyWorkoutDisplay({
  dailyWorkout = MOCK_DAILY_WORKOUT,
  oneRepMax = 0,
}: Props) {
  console.log("dailyWorkout:", dailyWorkout);
  return (
    <>
      <Row gutter={[12, 12]}>
        {/* <Col sm={24} md={12} lg={8}>
          <Card
            style={{
              border: "1px solid #d9d9d9",
            }}
          >
            <List
              size="small"
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
                    size="small"
                    dataSource={item.uniqueSets}
                    renderItem={(item) => (
                      <List.Item
                        title={"Bench Press"}
                        style={{
                          padding: "2px",
                          height: "auto",
                        }}
                      >
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
        </Col> */}

        {[MOCK_DAILY_WORKOUT, MOCK_DAILY_WORKOUT_2, MOCK_DAILY_WORKOUT_3].map(
          (dailyWorkout) => {
            return (
              <Col key={dailyWorkout.title} xs={24} sm={12} md={8}>
                <Card
                  style={{
                    border: "1px solid #d9d9d9",
                    height: "100%",
                  }}
                  title={dailyWorkout.title}
                >
                  <List
                    size="small"
                    dataSource={dailyWorkout.exercises}
                    renderItem={(item) => (
                      <Row>
                        <Col span={12}>
                          <Text
                            style={{
                              fontSize: "10px",
                            }}
                            keyboard
                          >
                            {item.name}
                          </Text>
                        </Col>
                        <Col
                          span={12}
                          style={{
                            textAlign: "right",
                            borderBottom: "1px solid #d9d9d9",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "8px",
                            }}
                            type="secondary"
                          >
                            {
                              <>
                                {item.uniqueSets.map((set) => {
                                  return (
                                    <span
                                      key={item.name}
                                      style={{
                                        padding: 0,
                                        margin: 0,
                                      }}
                                    >
                                      {`${
                                        set.repeats ? `${set.repeats}x` : "1x"
                                      }${set.reps} @ ${set.weight}lbs`}
                                      <br />
                                    </span>
                                  );
                                })}
                              </>
                            }
                          </Text>
                        </Col>
                      </Row>
                    )}
                  />
                </Card>
              </Col>
            );
          }
        )}
      </Row>
    </>
  );
}
