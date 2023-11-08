import React from "react";

import { Card, List, Col, Row, Typography } from "antd";

import type { DailyWorkout } from "../../utils/types/types";

const { Text } = Typography;

interface Props {
  days: DailyWorkout[];
  title: string;
}

export function WeeklyWorkoutDisplay({ days, title }: Props) {
  return (
    <>
      <Card type="inner" title={title} size="small" style={{}}>
        <Row gutter={[12, 12]}>
          {days.map((dailyWorkout: DailyWorkout) => {
            return (
              <Col key={dailyWorkout.title} xs={24} sm={12} md={6}>
                <div
                  style={{
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
                      <Row
                        style={{
                          borderBottom: "1px solid #001628",
                        }}
                      >
                        <Col span={12}>
                          <Text
                            style={{
                              fontSize: "12px",
                            }}
                          >
                            {item.name}
                          </Text>
                        </Col>
                        <Col
                          span={12}
                          style={{
                            textAlign: "right",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "12px",
                            }}
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
                                      {set.repeat}x{set.reps}
                                      {set.weight && set.weight > 0
                                        ? ` @ ${Math.round(set.weight)} lbs`
                                        : ""}
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
                </div>
              </Col>
            );
          })}
        </Row>
      </Card>
    </>
  );
}
