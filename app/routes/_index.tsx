import { useEffect, useState } from "react";

import type { MetaFunction } from "@remix-run/node";
import { Row, Col } from "antd";

import {
  OneRepMaxCalculator,
  DisplayTable,
  TipsDisplay,
  OneRepMaxDisplay,
} from "../components/";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [oneRepMax, setOneRepMax] = useState<number>(0);

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
            <OneRepMaxDisplay oneRepMax={oneRepMax} />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={12}>
            <DisplayTable oneRepMax={oneRepMax} />
          </Col>
          <Col
            xs={24}
            sm={24}
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
