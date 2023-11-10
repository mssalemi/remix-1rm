import React from "react";

import { Avatar, Typography } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Section {
  title: string;
  icon: JSX.Element;
  designedBy: string;
  content: Content;
}

interface Content {
  title?: string;
  catchPhrase?: string;
  body: string;
}

interface Props {
  title: string;
  sections: Section[];
}

const SECTIONS: Section[] = [
  {
    title: "Introduction to Wendler 5/3/1",
    icon: <AntDesignOutlined />,
    designedBy: "Jim Wendler",
    content: {
      body: "Step into the world of 5/3/1 – Jim Wendler's masterplan for gains as reliable as your grandma's secret cookie recipe. Think of it like a well-organized library, with cycles neatly stacked in 4-week chapters. You've got options: be the gym socialite, hitting it 4 days a week, or the introvert with a cool 3-day routine. The sweet spot? Four days, no doubt. Each day is a focused mission, centering around one of the main four: Military Press, Deadlift, Bench Press, and Squat. But, here's the twist – if you're in the three-day club, no repeats allowed. It's like a playlist with no shuffle button. Week by week, you'll be chasing rep-set goals, like a diligent detective on the trail. Week 1: 3 sets of 5 reps – the 'warm-up.' Week 2: 3 sets of 3 reps – where things get real. Week 3: 1 set of 5 reps, 1 set of 3 reps, and 1 set of 1 rep – the 'triple play.' Week 4: Deloading – your chance to lift weights with a laid-back vibe.",
      catchPhrase:
        "Gains are as steady as a tortoise, and every set is a step towards predictable progress.",
    },
  },
];

export function WorkoutContent({ title, sections = SECTIONS }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {SECTIONS.map((section, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar
              style={{ backgroundColor: "#d32029", color: "#fac8c3" }}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={section.icon}
            />
            <h2>{section.title}</h2>
          </div>
          <Text
            style={{
              fontSize: "0.7rem",
            }}
            type="secondary"
          >
            Author: {section.designedBy}
          </Text>

          <Text
            style={{
              padding: "1rem 0",
            }}
          >
            {section.content.body}
          </Text>
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <Text strong>{section.content.catchPhrase}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}
