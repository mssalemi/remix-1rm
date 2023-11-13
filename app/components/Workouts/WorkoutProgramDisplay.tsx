import React, { useState } from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

import { Row, Col, Typography } from "antd";

import type { WorkoutProgram } from "app/utils/types/types";

import {
  GenerateWorkoutProgramForm,
  WorkoutContent,
  WorkoutProgramHero,
  ContentSectionWithImage,
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

export function WorkoutProgramDisplay({ workoutProgram, setOneRepMax }: Props) {
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
          <Row>
            <Col span={24} style={{}}>
              <ContentSectionWithImage
                title={"BACKGROUND"}
                content={
                  "5/3/1 is a program designed and published by competitive powerlifter Jim Wendler in his book ‘5/3/1:The Simplest and Most Effective Training System to Increase Raw Strength.’Pretty bold claims – and we’ll see how they stack up later. Since the initial release, Wendler has also written ‘Beyond 5/3/1′ and ‘5/3/1 Forever‘ which build on the original programme.It’s actually quite tricky to describe THE 5/3/1 program, mainly because there are numerous variations. It’s also worth noting that there’s the original 5/3/1 programme as described by Jim Wendler, as well as the updated version described in the book Beyond 5/3/1, and some of the newest variations described in the book Forever 5/3/1. To keep things simple here, I’m going to list the Beyond 5/3/1 version, as I feel these are the versions and workouts that most people will be doing, as well as the versions most commonly found around the internet. Moreover, this is the BASE programme, we’ll discuss some common variations and assistance templates down below."
                }
                imageSrc={
                  "https://images.unsplash.com/photo-1652363722833-509b3aac287b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            </Col>
            <Col span={24} style={{}}>
              <ContentSectionWithImage
                title={"EXPLANATION"}
                content={
                  "You can think of each workout as having an A, B and C section.The programme above is the prescribed progression for main lifts (section A) So if you were squatting in week 1, your workout would have you doing 65% for set 1, 75% for set 2, and then 85% for set 3. You would then follow this up with what Wendler calls ‘Joker’ sets (Section B) which are essentially additional heavy sets designed to let lifters hit some heavier loads on the days they feel good. So if your 3rd working set felt great and moved fast, you might add on 1 or 2 extra sets at 5-10% above your top set weight. After that, you’d go on to finish off your 5/3/1 workout with an assistance template (Section C) such as Boring But Big or First Set Last (I’ll explain those in a minute)"
                }
              />
              <ContentSectionWithImage
                title={"PROGRESSION"}
                content={
                  "This works on a 3-week cycle. Each week, you lift a heavier weight for fewer reps in your main lifts. So in week 1, you use sets of 5 reps, in week 2 you lift sets of 3 reps, and in week 3 you use 5’s and 3’s to build towards a heavy single. All of which combined give the programme its name – 5/3/1. At the end of that 3-week cycle, you can then start a new cycle with 5-10lb higher training maxes, or take a deload, which is highly recommended after 2 consecutive cycles. 5/3/1 WORKOUT DAYS AND FREQUENCY In most cases, the ideal 5/3/1 workout format is going to be 4 days per week, so that each day can have a main lift focus. For example:"
                }
              />
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Paragraph>
                  <Typography.Text strong>Day 1:</Typography.Text> Squat Day
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <Typography.Text strong>Day 2:</Typography.Text> Bench Day{" "}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <Typography.Text strong>Day 3:</Typography.Text> Deadlift
                </Typography.Paragraph>
              </div>

              <Typography.Title level={4}>
                Now, its up to you to decide if 5/3/1 is the right programme.
                Try it out with out easy to use program creator below!
              </Typography.Title>
            </Col>
          </Row>

          <Row
            style={{
              justifyContent: "center",
              padding: "1rem 0",
            }}
          >
            <Col span={12}>
              <GenerateWorkoutProgramForm setOneRepMax={setOneRepMax} />
            </Col>
          </Row>
          {workoutProgram.weeklyWorkouts.map((workoutWeek, index) => {
            return (
              <div
                style={{
                  padding: "0.5rem 0",
                }}
                key={index}
              >
                <WeeklyWorkoutDisplay
                  key={index}
                  days={workoutWeek.days}
                  title={workoutWeek.title}
                />
              </div>
            );
          })}
        </>
      }
      <div>
        <Typography.Title level={4} code>
          Conclusion
        </Typography.Title>
        <Typography.Paragraph ellipsis>
          In conclusion, the 5/3/1 program, with its proven versatility and
          adaptability, stands as a reliable choice for intermediate lifters
          seeking continued strength development. As we've explored the
          intricacies of the program, from its main lift progressions to popular
          assistance templates, it's evident that 5/3/1 offers a balanced blend
          of intensity and volume.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Remember, whether you choose additional volume for muscle growth or
          opt for added intensity, the beauty of 5/3/1 lies in its status as a
          template. It allows you to tailor your training experience to meet
          your specific needs, be it for powerlifting or Olympic weightlifting.
          As you embark on your 5/3/1 journey, consider not only the variations
          that suit your goals, schedule, and personal preferences but also pay
          careful attention to rest and recovery. Adequate sleep, proper
          nutrition, and smart recovery strategies are integral to maximizing
          the benefits of the 5/3/1 program. Like any program, success with
          5/3/1 requires commitment, consistency, and a holistic approach that
          extends beyond the gym. Happy lifting, and may your strength journey
          be both challenging and rewarding!
        </Typography.Paragraph>
        <br />
        <Typography.Paragraph>
          As you embark on your 5/3/1 journey, consider the variations that suit
          your goals, schedule, and personal preferences. Like any program,
          success with 5/3/1 requires commitment, consistency, and the
          flexibility to make it your own. Happy lifting, and may your strength
          journey be both challenging and rewarding!
        </Typography.Paragraph>
      </div>
    </div>
  );
}
