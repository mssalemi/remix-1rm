import React from "react";

import { Col, Row, Typography, Card, Avatar, Space } from "antd";

import { UserOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

interface Props {
  oneRepMax: number;
}

const TEXT =
  "Looking to increase your bench press strength? Master proper form, warm up thoroughly, and focus on progressive overload. Include accessory exercises to strengthen supporting muscle groups and maintain a balanced diet. Get adequate rest, vary your rep and set schemes, and use proper breathing techniques. Consider having a spotter for maximal lifts. Stay consistent and make bench press a regular part of your routine. ";

const TITLE = "A note from coach!";

const links = ["1", "2"];

export function TipsDisplay({}: Props) {
  return (
    <Card style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Space wrap size={16}>
            <Avatar size={64} icon={<UserOutlined />} />
            <Title level={4}>{TITLE}</Title>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text>{TEXT}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {links.map((link) => {
            return <Text>Program link {link}</Text>;
          })}
        </Col>
      </Row>
    </Card>
  );
}
