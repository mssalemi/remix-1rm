import React from "react";

import { Card, List, Col, Row, Typography } from "antd";

import type { DailyWorkout } from "../../utils/types/types";

const { Text } = Typography;

interface Props {
  days: DailyWorkout[];
}

export function WeeklyWorkoutDisplay({ days }: Props) {
  console.log("dailyWorkout:", days);

  return (
    <>
      <Row gutter={[12, 12]}>
        {days.map((dailyWorkout: DailyWorkout) => {
          return (
            <Col key={dailyWorkout.title} xs={24} sm={12} md={8}>
              <Card
                style={{
                  border: "1px solid #d9d9d9",
                  height: "100%",
                }}
              >
                <div>
                  <Text
                    style={{
                      fontSize: "12px",
                    }}
                    strong
                  >
                    {dailyWorkout.title}
                  </Text>
                </div>

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
                                    {`${set.repeat ? `${set.repeat}x` : "1x"}${
                                      set.reps
                                    } @ ${set.weight}lbs`}
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
        })}
      </Row>
    </>
  );
}
