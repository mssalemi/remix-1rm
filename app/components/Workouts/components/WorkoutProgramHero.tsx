import React from "react";
import { Col, Row, Statistic } from "antd";

import { ArrowUpOutlined } from "@ant-design/icons";

export function WorkoutProgramHero() {
  return (
    <>
      <Row>
        <Col
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyItems: "center",
            textAlign: "center",
            minHeight: "inherit",
            border: "1px solid black",
          }}
          xs={24}
          sm={24}
          md={24}
        >
          <Statistic title="Days" value={"3 - 4"} />
          <Statistic title="Weeks" value={"4"} />
          <Statistic
            title="1RM Gains"
            value={"5"}
            prefix={<ArrowUpOutlined style={{ color: "#49aa19" }} />}
          />
        </Col>
      </Row>
    </>
  );
}
