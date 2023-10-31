import React, { useMemo } from "react";
import { Typography, Form, Select, Table, Tag } from "antd";

import { EPLEY, LOMBARDI } from "../../../utils/helpers";

const FORMULAS_DATA = [
  {
    id: 0,
    key: 0,
    name: "Epley",
    formula: EPLEY,
  },
  {
    id: 1,
    key: 1,
    name: "Lombardi",
    formula: LOMBARDI,
  },
];

const { Text } = Typography;

type FieldType = {
  weight?: number;
  reps?: number;
  formula?: string;
};

interface Props {
  formula: string;
  setFormula: (value: string) => void;
}

export function CompareFormulaDisplay({ formula, setFormula }: Props) {
  const [compareSelected, setCompareSelected] = React.useState("Lombardi");

  const handleFormulaSelected = (value: string) => {
    setFormula(value);
    if (compareSelected === value) {
      if (value === "epley") {
        setCompareSelected("lombardi");
      } else {
        setCompareSelected("epley");
      }
    }
  };

  const columns = [
    {
      title: "Reps",
      dataIndex: "reps",
      key: "reps",
    },
    {
      title: "Epley",
      dataIndex: "formulaEpley",
      key: "formula-epley",
      render: (value: number) => {
        return <Tag color="magenta">{value}</Tag>;
      },
    },
    {
      title: "Lombardi",
      dataIndex: "formulaLombardi",
      key: "formula-lombardi",
      render: (value: number) => {
        return <Tag color="blue">{value}</Tag>;
      },
    },
  ];

  const rows = useMemo(() => {
    return FORMULAS_DATA[0].formula.map((percentage, index) => {
      return {
        key: index,
        reps: index + 1,
        formulaEpley: percentage,
        formulaLombardi: FORMULAS_DATA[1].formula[index],
      };
    });
  }, [formula, compareSelected]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <Form.Item<FieldType>
        label="Formula"
        name="formula"
        style={{
          marginRight: "1rem",
        }}
      >
        <Select defaultValue={formula} onChange={handleFormulaSelected}>
          <Select.Option value="epley">Epley</Select.Option>
          <Select.Option value="lombardi">Lombardi</Select.Option>
        </Select>
        <Typography
          style={{
            marginTop: "1rem",
            marginRight: "1rem",
          }}
        >
          <Text type="secondary">
            The standard formula is the most accurate for most people. It is
            based on the Epley formula, but modified to make it easier to use
            for multiple reps.
          </Text>
        </Typography>
      </Form.Item>
      <Table
        columns={columns}
        dataSource={rows}
        bordered
        title={() => "Percentages of 1RM"}
        pagination={{ pageSize: 4 }}
      />
    </div>
  );
}
