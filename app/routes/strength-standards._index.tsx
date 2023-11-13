import React from "react";

import { useNavigate } from "@remix-run/react";

import { Row, Col, Typography, Tag, Button } from "antd";

import { Avatar, List } from "antd";

const exerciseDescriptions = [
  {
    exercise: "Bench Press",
    description:
      "Feel the burn, not your toast. This is where you show the world that your pecs mean business.",
  },
  {
    exercise: "Deadlift",
    description:
      "Because lifting spirits is just as essential as lifting weights. You'll be the life of the party – literally.",
  },
  {
    exercise: "Squat",
    description:
      "A workout for your legs and a metaphor for life – keep pushing up, even when it feels like everything's coming down.",
  },
  // {
  //   exercise: "Press",
  //   description:
  //     "Not the 'send' kind, but the 'press' kind. Elevate your bar, elevate your standards.",
  // },
  // {
  //   exercise: "Snatch",
  //   description:
  //     "Not a sneaky robbery but a powerful lift. It's time to snatch that prowess and run with it.",
  // },
  // {
  //   exercise: "Clean and Jerk",
  //   description:
  //     "Forget the dishes; let's get those lifts sparkling, and by lifts, we mean your technique, not your kitchen.",
  // },
];

export const trainingLevels = [
  {
    name: "Untrained",
    description:
      "Like a baby giraffe on roller skates – wobbly but full of potential.",
    color: "#d2e0fa",
  },
  {
    name: "Novice",
    description:
      "Moved beyond tripping over your own feet, but Rome wasn't built in a day.",
    color: "#a8c1f8",
  },
  {
    name: "Intermediate",
    description:
      "Not just lifting; you're crafting a masterpiece. Michelangelo would be proud.",
    color: "#7f9ef3",
  },
  {
    name: "Advanced",
    description:
      "Graduated from the school of lifting; the barbell is your diploma.",
    color: "#5273e0",
  },
  {
    name: "Elite",
    description:
      "Not just strong; you're a force to be reckoned with. Other athletes look at you the way we look at pizza – with awe and a hint of jealousy.",
    color: "#2b4acb",
  },
  {
    name: "Godly Strength",
    description:
      "You've transcended mortal limitations. The weights fear you, and Hercules takes notes.",
    color: "#d89614",
  },
];

export default function StrengthStandardsIndex() {
  let navigate = useNavigate();

  return (
    <Row
      justify="center"
      style={{
        padding: "0 24px",
      }}
    >
      <Col span={24}>
        <Typography.Title>
          Exploring Strength Standards: Unveiling the Benchmarks
        </Typography.Title>
        <Typography.Paragraph>
          Ever wondered about the origin of strength standards? Initially
          designed by powerlifting organizations to rank their contenders, these
          benchmarks emerged from the world of powerlifting – a sport centered
          around achieving maximum strength in squats, bench presses, and
          deadlifts. The combined one-repetition max (1RM) in these lifts
          determines your "total" score.
        </Typography.Paragraph>
      </Col>
      <Col xs={24} sm={24} md={24} lg={16}>
        <List
          itemLayout="horizontal"
          dataSource={exerciseDescriptions}
          renderItem={({ exercise, description }, index) => (
            <List.Item>
              {/* <List.Item.Meta title={exercise} description={description} /> */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 4fr 4fr",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
                <div>
                  <Typography.Title level={5}>{exercise}</Typography.Title>
                  <Typography.Text>{description}</Typography.Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="primary"
                    onClick={() => navigate("/strength-standards/bench")}
                  >
                    Bench Standards
                  </Button>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Typography.Paragraph>
          Powerlifting strength standards are calculated by summing up the 1RM
          for squat, bench press, and deadlift. However, many coaches have
          expanded these standards to include additional exercises like the
          overhead press, pull-up, front squat, and barbell row.
        </Typography.Paragraph>
        <Typography.Paragraph>
          For those pursuing health, muscle development, and strength without
          venturing into competitive powerlifting or relying on external aids,
          alternative strength standards come into play. The Best Strength
          Standards for Every Lifter: Among various strength standards, two
          noteworthy recommendations are:
        </Typography.Paragraph>
      </Col>
      <Col xs={16} sm={16} md={16} lg={16}>
        <List
          dataSource={trainingLevels}
          renderItem={(item) => {
            return (
              <List.Item
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                }}
              >
                <Tag
                  color={item.color}
                  style={{
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Tag>
                <Typography.Text
                  type="secondary"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  {item.description}
                </Typography.Text>
              </List.Item>
            );
          }}
        />
      </Col>
      <Col span={24}>
        <Typography.Paragraph>
          These standards offer different perspectives – one based on body
          weight multiples. Whether you choose one or both depends on personal
          preference. The standards, shaped by decades of experience in
          powerlifting, present achievable targets categorized by relative body
          weight or absolute weight. Deciding which to use often depends on
          established standards for specific exercises. In the realm of strength
          standards, these guidelines serve as more realistic benchmarks for
          everyday lifters. They pave the way for a balanced and achievable
          journey to strength. Remember, these numbers are not limits but
          stepping stones on your path to greatness. Happy lifting! 🏋️‍♂️💪
        </Typography.Paragraph>
      </Col>
    </Row>
  );
}
