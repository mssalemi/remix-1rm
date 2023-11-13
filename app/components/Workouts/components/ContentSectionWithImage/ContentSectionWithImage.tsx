import React from "react";

import { Row, Col, Typography, Image } from "antd";

interface Props {
  title: string;
  content: string;
  imageSrc?: string;
}

export function ContentSectionWithImage({ title, content, imageSrc }: Props) {
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Typography.Title level={4} code>
          {title}
        </Typography.Title>
      </Col>
      <Col md={imageSrc ? 12 : 24} xs={24} sm={24}>
        <Typography.Text>{content}</Typography.Text>
      </Col>
      {imageSrc && (
        <Col md={12} xs={24} sm={24}>
          <Image
            style={{
              height: "300px",
            }}
            src={imageSrc}
          />
        </Col>
      )}
    </Row>
  );
}
