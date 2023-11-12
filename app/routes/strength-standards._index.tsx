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
  {
    exercise: "Press",
    description:
      "Not the 'send' kind, but the 'press' kind. Elevate your bar, elevate your standards.",
  },
  {
    exercise: "Snatch",
    description:
      "Not a sneaky robbery but a powerful lift. It's time to snatch that prowess and run with it.",
  },
  {
    exercise: "Clean and Jerk",
    description:
      "Forget the dishes; let's get those lifts sparkling, and by lifts, we mean your technique, not your kitchen.",
  },
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
        <Typography.Title>Strength Standards</Typography.Title>
        <Typography.Paragraph>
          Step into the strength city – where we're serious about lifting, but
          not so serious that we won't crack a joke or two. Our strength
          benchmarks are not your average fitness targets; think of them as
          friendly nudges, urging you to surpass what you thought were your
          limits.
        </Typography.Paragraph>
        <Button onClick={() => navigate("/strength-standards/bench")}>
          SEE BENCH STANDARDS
        </Button>
      </Col>
      <Col span={12}>
        <List
          itemLayout="horizontal"
          dataSource={exerciseDescriptions}
          renderItem={({ exercise, description }, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={exercise}
                description={description}
              />
            </List.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Typography.Paragraph>
          Our performance standards are not here to fuel an ego race but to
          spark the fire within you. We've got a nifty calculator to estimate
          your one-rep max because we believe in science, not sorcery. Age is
          just a number, and weight is just a measure – your journey is uniquely
          yours.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Remember, these standards are not about fitting into a mold; they're
          about breaking it and sculpting your own fitness narrative. So, lace
          up those sneakers, grab your water bottle, and let's turn those
          lifting dreams into reality. You're not just lifting weights; you're
          lifting your own standards. Cheers to the gains, the grins, and the
          glorious journey ahead! 💪✨
        </Typography.Paragraph>
      </Col>
      <Col span={12}>
        <List
          dataSource={trainingLevels}
          renderItem={(item) => {
            return (
              <List.Item
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
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
    </Row>
  );
}
