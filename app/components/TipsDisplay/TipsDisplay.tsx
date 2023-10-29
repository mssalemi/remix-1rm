import React from "react";

import { Card } from "antd";

interface Props {
  oneRepMax: number;
}

export function TipsDisplay({}: Props) {
  return (
    <Card style={{ height: "100%" }}>Tips for increaring your bench press</Card>
  );
}
