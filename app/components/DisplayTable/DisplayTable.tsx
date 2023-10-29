import React, { useMemo, useEffect } from "react";
import { repMaxPercentages } from "../../utils/helpers";
import { Card, Table, Tag, Progress } from "antd";

interface TableItem {
  key: string;
  reps: number;
  percentage: number;
}

const repMaxTableItems: TableItem[] = repMaxPercentages.map((item, index) => {
  return {
    key: `${index}repMax`,
    reps: index + 1,
    percentage: item,
  };
});

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

export function DisplayTable({ oneRepMax }: { oneRepMax: number }) {
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

  useEffect(() => {
    console.log("[1RM]: ", oneRepMax);
    console.log("[list]: ", list);
    console.log("[cols]: ", cols);
  }, [oneRepMax, cols, list]);

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
