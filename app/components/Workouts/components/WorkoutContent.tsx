import React from "react";

import { Avatar, Typography } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Section {
  title: string;
  icon: JSX.Element;
  designedBy: string;
  content: string;
}

interface Props {
  title: string;
  sections: Section[];
}

const SECTIONS = [
  {
    title: "Introduction to Wendler 5/3/1",
    icon: <AntDesignOutlined />,
    designedBy: "Jim Wendler",
    content:
      "Meet the Wendler 5/3/1 Routine, the brainchild of Jim Wendler. This workout sensation is like the tortoise of strength training—slow, steady, and starting with weights so light they're practically telling knock-knock jokes. Named after the catchy rep scheme 5, 3, 1, this program is all about working with percentages based on your max and chasing after those sweet rep personal records in each session.\n\nNow, is Jim Wendler’s 5/3/1 the fitness love story for you? Well, it's the versatile Romeo of routines—suitable for all experience levels, but it tends to swipe right on those intermediate athletes. If you're into quick dates (read: short training sessions) and a relationship that progresses at the pace of a sloth on a casual stroll, then 5/3/1 might just be your swolemate. According to Jim, starting light is like giving your lifting journey a VIP pass to the gains party. Get ready to lift and laugh your way to progress!",
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
            {section.content}
          </Text>
        </div>
      ))}
    </div>
  );
}
