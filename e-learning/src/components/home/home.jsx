import React from "react";

import Second from "./Second";

const Home = () => {
  return (
    <main className="w-screen box-border relative z-10 flex flex-col justify-center items-center">
      <section className=" pt-[100px] md:pt-24 lg:pt-[200px]">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="ml-6 grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 justify-items-center">
            <div className="flex flex-col gap-6">
              <h1 className="lg:leading-tighter text-[#333333] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Unlock Your Potential with Our Courses
              </h1>
              <p className="mx-auto text-[#666666] max-w-[700px] text-muted-foreground md:text-xl">
                Explore a wide range of educational courses and take the first
                step towards achieving your goals.
              </p>
              <div className="pt-6">
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#F39C12] px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#E67E22]"
                
                >
                  Explore Courses
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-white border border-[#CCCCCC] h-[35vh] w-[35vw] md:h-[300px] md:w-[450] lg:w-[550px] lg:h-[400px]">
              <img
                src="/"
                alt="Hero"
                className="mx-auto aspect-[4/3] overflow-hidden w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Second/>
    </main>
  );
};

export default Home;
