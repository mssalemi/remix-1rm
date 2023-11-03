import { useState, useMemo } from "react";

import type { MetaFunction } from "@remix-run/node";
import { Row, Col } from "antd";

import {
  OneRepMaxCalculator,
  DisplayTable,
  TipsDisplay,
  OneRepMaxDisplay,
} from "../components/";

import { useNavigate } from "@remix-run/react";
import { EPLEY, LOMBARDI, MOSHID } from "~/utils/helpers";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const FORMULAS_DATA = [
  {
    id: 0,
    key: 0,
    name: "epley",
    formula: EPLEY,
  },
  {
    id: 1,
    key: 1,
    name: "lombardi",
    formula: LOMBARDI,
  },
  {
    id: 2,
    key: 2,
    name: "moshid",
    formula: MOSHID,
  },
];

export default function Index() {
  const [oneRepMax, setOneRepMax] = useState<number>(0);
  const navigate = useNavigate();

  const [formula, setFormula] = useState("Epley");

  const percentages = useMemo(() => {
    console.log("formula", formula);

    return FORMULAS_DATA.find((f) => f.name === formula)?.formula || EPLEY;
  }, [formula]);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: "1rem",
      }}
    >
      <Row>
        <Col span={24}>
          <OneRepMaxCalculator
            formula={formula}
            setFormula={setFormula}
            setOneRepMax={setOneRepMax}
          />
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
            <DisplayTable oneRepMax={oneRepMax} percentages={percentages} />
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
            <TipsDisplay navigate={navigate} oneRepMax={oneRepMax} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
