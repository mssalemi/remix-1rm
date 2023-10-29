import { useEffect, useState } from "react";

import type { MetaFunction } from "@remix-run/node";
import { Row, Col } from "antd";

import { OneRepMaxCalculator, DisplayTable, TipsDisplay } from "../components/";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [oneRepMax, setOneRepMax] = useState<number>(0);

  useEffect(() => {
    console.log("[1RM]: ", oneRepMax);
  }, [oneRepMax]);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: "1rem",
      }}
    >
      <Row>
        <Col span={24}>
          <OneRepMaxCalculator setOneRepMax={setOneRepMax} />
        </Col>
      </Row>
      <div>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col>
            <p>One Rep Max: {oneRepMax}</p>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <Col
            md={24}
            lg={12}
            style={{
              padding: "0.5rem",
            }}
          >
            <DisplayTable oneRepMax={oneRepMax} />
          </Col>
          <Col
            md={24}
            lg={12}
            style={{
              padding: "0.5rem",
            }}
          >
            <TipsDisplay oneRepMax={oneRepMax} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
