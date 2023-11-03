import React, { useMemo, useEffect } from "react";
import { STANDARD } from "../../utils/helpers";
import { Card, Table, Tag, Progress } from "antd";

interface TableItem {
  key: string;
  reps: number;
  percentage: number;
}

const repsMaxColumns = [
  {
    title: "Reps",
    dataIndex: "reps",
    key: "reps",
    render: (reps: number) => {
      return <Tag color="geekblue">{reps}</Tag>;
    },
  },
  {
    title: "% of 1RM",
    dataIndex: "percentage",
    key: "percentage",
    render: (percentage: number) => {
      // return <Tag color="geekblue">{percentage} %</Tag>;
      return (
        <Progress
          percent={percentage}
          showInfo={true}
          format={() => `${percentage}%`}
        />
      );
    },
  },
];

export function DisplayTable({
  oneRepMax,
  percentages,
}: {
  oneRepMax: number;
  percentages: number[];
}) {
  const repMaxTableItems: TableItem[] = percentages.map((item, index) => {
    return {
      key: `${index}repMax`,
      reps: index + 1,
      percentage: item,
    };
  });

  const list = useMemo(() => {
    if (oneRepMax === 0) {
      return repMaxTableItems;
    }
    return repMaxTableItems.map((item) => {
      return {
        ...item,
        weight: Math.round((item.percentage / 100) * oneRepMax),
      };
    });
  }, [oneRepMax]);

  const cols = useMemo(() => {
    if (oneRepMax === 0) {
      return repsMaxColumns;
    }

    return [
      repsMaxColumns[0],
      {
        title: "Weight",
        dataIndex: "weight",
        key: "weight",
        render: (weight: number) => {
          return <Tag color="blue">{weight} lbs</Tag>;
        },
      },
      repsMaxColumns[1],
    ];
  }, [oneRepMax]);

  return (
    <Card style={{ height: "100%" }}>
      <Table
        columns={cols}
        dataSource={list}
        pagination={{ pageSize: 6 }}
        size={"small"}
      />
    </Card>
  );
}
