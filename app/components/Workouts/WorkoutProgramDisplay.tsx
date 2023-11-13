import React, { useState } from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

import { Row, Col, Typography } from "antd";

import type { WorkoutProgram } from "app/utils/types/types";

import {
  GenerateWorkoutProgramForm,
  WorkoutContent,
  WorkoutProgramHero,
} from "./components";

import { Image, Form, Button, InputNumber } from "antd";
interface Props {
  workoutProgram: WorkoutProgram;
  setOneRepMax: React.Dispatch<
    React.SetStateAction<{
      squat: number;
      bench: number;
      deadlift: number;
    }>
  >;
}

const compoundExercises = [
  {
    name: "Bench Press",
    altName: "BP",
    key: "bench",
  },
  {
    name: "Squat",
    altName: "SQ",
    key: "squat",
  },
  {
    name: "Deadlift",
    altName: "DL",
    key: "deadlift",
  },
];

type SizeType = Parameters<typeof Form>[0]["size"];

export function WorkoutProgramDisplay({ workoutProgram, setOneRepMax }: Props) {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleSubmit = (values: any) => {
    setOneRepMax(values);
  };

  const oneRepMaxMarkup = (
    <Form
      // layout="horizontal"
      // initialValues={{ size: componentSize }}
      title={"Generate Workout Program"}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      onFinish={handleSubmit}
    >
      {compoundExercises.map(({ key, name, altName }, index) => (
        <Form.Item key={key} name={key}>
          <InputNumber placeholder={altName} size="large" />
        </Form.Item>
      ))}

      <Button type="primary" htmlType="submit">
        Generate Workout Program
      </Button>
    </Form>
  );

  return (
    <div>
      {/* Main Image */}
      <div style={{}}>
        <Image
          src={
            "https://www.jimwendler.com/cdn/shop/products/531banner_copy2_1376x704.jpg?v=1631660295"
          }
        />
      </div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingTop: "1rem",
        }}
      >
        <WorkoutContent title={"Meow"} sections={[]} />
      </div>
      {/* Intro Content */}
      {
        <>
          <div
            style={{
              paddingTop: "1rem",
            }}
          >
            <WorkoutProgramHero />
          </div>
          {/* Background */}
          <Row
            style={{
              paddingTop: "1rem",
            }}
          >
            <Col span={24}>
              <Typography.Text code>
                BACKGROUND ON 5/3/1 JIM WENDLER AND THE PROGRAM
              </Typography.Text>
              <br />
            </Col>
            <Col
              span={24}
              style={{
                padding: "1rem",
              }}
            >
              <Typography.Text>
                5/3/1 is a program designed and published by competitive
                powerlifter Jim Wendler in his book ‘5/3/1:The Simplest and Most
                Effective Training System to Increase Raw Strength.’
              </Typography.Text>
              <Typography.Text>
                Pretty bold claims – and we’ll see how they stack up later.
                Since the initial release, Wendler has also written ‘Beyond
                5/3/1′ and ‘5/3/1 Forever‘ which build on the original
                programme.
              </Typography.Text>
              <Typography.Text>
                {" "}
                It’s actually quite tricky to describe THE 5/3/1 program, mainly
                because there are numerous variations. It’s also worth noting
                that there’s the original 5/3/1 programme as described by Jim
                Wendler, as well as the updated version described in the book
                Beyond 5/3/1, and some of the newest variations described in the
                book Forever 5/3/1. To keep things simple here, I’m going to
                list the Beyond 5/3/1 version, as I feel these are the versions
                and workouts that most people will be doing, as well as the
                versions most commonly found around the internet. Moreover, this
                is the BASE programme, we’ll discuss some common variations and
                assistance templates down below.
              </Typography.Text>
              <Typography.Title level={4}>
                5/3/1 WORKOUT EXPLANATION
              </Typography.Title>
              <Typography.Text>
                You can think of each workout as having an A, B and C section.
                The programme above is the prescribed progression for main lifts
                (section A) So if you were squatting in week 1, your workout
                would have you doing 65% for set 1, 75% for set 2, and then 85%
                for set 3. You would then follow this up with what Wendler calls
                ‘Joker’ sets (Section B) which are essentially additional heavy
                sets designed to let lifters hit some heavier loads on the days
                they feel good. So if your 3rd working set felt great and moved
                fast, you might add on 1 or 2 extra sets at 5-10% above your top
                set weight. After that, you’d go on to finish off your 5/3/1
                workout with an assistance template (Section C) such as Boring
                But Big or First Set Last (I’ll explain those in a minute){" "}
              </Typography.Text>
              <Typography.Title level={4}>
                5/3/1 PROGRESSION 5/3/1
              </Typography.Title>
              <Typography.Text>
                This works on a 3-week cycle. Each week, you lift a heavier
                weight for fewer reps in your main lifts. So in week 1, you use
                sets of 5 reps, in week 2 you lift sets of 3 reps, and in week 3
                you use 5’s and 3’s to build towards a heavy single. All of
                which combined give the programme its name – 5/3/1. At the end
                of that 3-week cycle, you can then start a new cycle with 5-10lb
                higher training maxes, or take a deload, which is highly
                recommended after 2 consecutive cycles. 5/3/1 WORKOUT DAYS AND
                FREQUENCY In most cases, the ideal 5/3/1 workout format is going
                to be 4 days per week, so that each day can have a main lift
                focus. For example:
                <br />
                <br />
                Day 1: Squat Day <br />
                Day 2: Bench Day <br />
                Day 3: Deadlift
              </Typography.Text>
              <Typography.Title level={4}>
                5/3/1 PROGRAM REVIEW
              </Typography.Title>
              <Typography.Text>PROS</Typography.Text>
              <Typography.Text>
                Alright so now that we’ve covered the 5/3/1 base program, how to
                use it, as well as the most popular assistance options, here’s
                what I like about it: 5/3/1 is a versatile template The
                versatility of 5/3/1 let’s you adapt it to suit your specific
                needs, making it a great choice for most true intermediate and
                even early advanced lifters. 5/3/1 is tried and tested As a
                popular programme 5/3/1 has been used by thousands of people,
                which has allowed it to be tweaked and adjusted over the years
                in order to ensure it’s effectiveness. All you need to do is
                head to google and pop something in like… – 5/3/1 reddit – 5/3/1
                results And you’ll get plenty of reviews showing solid progress
                (like this or this) There are also a few 5/3/1 app’s that you
                can use to calculate your working weights and log your training,
                which might be useful to some people. Great blend of intensity
                and volume With intensities ranging from 65 to 95% and an
                average training block intensity of 80%, 5/3/1 is exactly where
                you would expect an effective strength development program to
                be. Plus the addition of joker sets allow for heavier work when
                needed, and the assistance templates offer a big enough dose of
                training volume to keep most intermediates progressing.
              </Typography.Text>
              <Typography.Title level={4}>
                5/3/1 PROGRAM REVIEW – CONS 5/3/1{" "}
              </Typography.Title>
              <Typography.Text>
                {" "}
                can be a bit confusing at the start Wender loves giving things
                cool names: Triumvirate, joker sets, Widowmaker, you get the
                idea. This does however make it a little hard for people new to
                the world of 5/3/1 to get started, because there’s a bunch of
                new language to learn, and that language doesn’t always match up
                with the regular established language used within sports
                science. It’s an easily solved problem, but still something
                worth considering. 5/3/1 may have too much variation in
                intensity for some intermediates Look, you might disagree, but
                most intermediates, especially early intermediates, don’t really
                need 3-week cycling waves of intensity. Intermediates, by
                definition, are people who can no longer progress each session,
                but can still progress each week or every other week. In many
                cases, a simpler approach such as the Texas Method may yield
                better results. Lifts aren’t practised that often Training each
                main lift only once per week isn’t ideal from a technical
                proficiency standpoint. In fact, many powerlifters benefit from
                2 to 3 exposures to the squat each week, and even 3 or 4
                exposures to the bench. With that said, this can easily be
                worked around by performing the squat assistance work on
                deadlift days and vice versa, and by subbing out the overhead
                press for another bench session. 5/3/1 REVIEW: DOES 5/3/1 WORK?
                IS IT GOOD? Absolutely. 5/3/1 is a solid strength programme that
                is well-suited to any intermediate lifter. Its major strength is
                that it serves as a flexible and versatile template for lifters
                to build on. it may have a couple of drawbacks, but these can be
                worked around fairly easily with a bit of reading and smart
                programming choices.
              </Typography.Text>
              <Typography.Title level={4}>
                Now, its up to you to decide if 5/3/1 is the right programme.
                Try it out with out easy to use program creator below!
              </Typography.Title>
            </Col>
          </Row>

          <div
            style={
              {
                // border: "1px dotted red",
              }
            }
          >
            <GenerateWorkoutProgramForm setOneRepMax={setOneRepMax} />
          </div>
          <div
            style={
              {
                // border: "1px dotted red",
              }
            }
          >
            {oneRepMaxMarkup}
          </div>
          {workoutProgram.weeklyWorkouts.map((workoutWeek, index) => {
            return (
              <WeeklyWorkoutDisplay
                key={index}
                days={workoutWeek.days}
                title={workoutWeek.title}
              />
            );
          })}
        </>
      }
      <div
        style={{
          height: 400,
          border: "1px solid dotted",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Workout Tips - Content
      </div>
    </div>
  );
}
