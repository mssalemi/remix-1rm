import { useEffect, useState } from "react";

import type { MetaFunction } from "@remix-run/node";
import { Button, DatePicker, Row, Col } from "antd";

import { OneRepMaxCalculator } from "../components/";

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
      {oneRepMax > 0 && (
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      )}

      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </div>
  );
}
