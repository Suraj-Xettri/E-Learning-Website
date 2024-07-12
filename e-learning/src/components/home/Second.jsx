import React from "react";

const Second = ({ courses }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 font-semibold text-2xl text-muted-foreground">
              Featured Courses
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Explore Our Top Courses
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Discover a wide range of educational courses to help you achieve
              your goals.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Second;
