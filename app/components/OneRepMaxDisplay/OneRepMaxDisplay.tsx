import React from "react";

import { Typography, Steps } from "antd";

interface Props {
  oneRepMax: number;
}

const { Text } = Typography;

export function OneRepMaxDisplay({ oneRepMax }: Props) {
  const skeletonORM = (
    <Text
      style={{
        fontSize: "3rem",
      }}
    >
      Estimate 1 Rep Max
    </Text>
  );

  return (
    <div
      style={{
        paddingBottom: "1rem",
      }}
    >
      {oneRepMax > 0 ? (
        <Text
          style={{
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Your 1 Rep Max is{" "}
          <Text
            keyboard
            type="success"
            style={{
              fontSize: "3rem",
            }}
          >
            {" "}
            {oneRepMax}
          </Text>
        </Text>
      ) : (
        skeletonORM
      )}
      <Steps
        style={{
          marginTop: "1rem",
        }}
        current={oneRepMax > 0 ? 1 : 0}
        items={[
          {
            title: "Enter Weight and Reps",
          },
          {
            title: "1 Rep Max Estimate",
          },
        ]}
      />
    </div>
  );
}
