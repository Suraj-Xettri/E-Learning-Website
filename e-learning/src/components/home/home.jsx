import React from "react";

import Second from "./Second";
import CourseOverview from "./CourseOverview";
import LearningJourney from "./LearningJourney";
const Home = () => {
  return (
    <main className="w-screen box-border relative z-10 flex-col justify-center items-center">
      <section className="pt-14 ">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col gap-4 justify-items-center">
            <div className="rounded-xl bg-white border border-[#CCCCCC] h-[85vh] w-screen">
              <img
                src="./cover.jpg"
                alt="Hero"
                className="mx-auto aspect-[4/3] overflow-hidden w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-6 p-10">
              <h1 className="flex-1 lg:leading-tighter text-[#333333] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Unlock Your Potential with Our Courses
              </h1>
              <div className="flex-1">
                <p className="mx-auto text-[#666666] max-w-[700px] text-muted-foreground md:text-xl">
                  Explore a wide range of educational courses and take the first
                  step towards achieving your goals. With expert instructors and
                  flexible learning options, you can enhance your skills and
                  advance your career at your own pace.
                </p>
                <div className="mt-10 flex gap-4">
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800"
                  >
                    Sign Up
                  </a>

                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-gray-100"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CourseOverview />
      <LearningJourney/>
      <Second />
    </main>
  );
};

export default Home;
