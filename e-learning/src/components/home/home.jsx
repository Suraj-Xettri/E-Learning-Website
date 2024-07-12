import React from 'react';


const courses = [
  // Add your course objects here
  { id: 1, title: "Course 1", description: "Description for course 1" },
  { id: 2, title: "Course 2", description: "Description for course 2" },
  // Add more courses as needed
];

const Home = () => {
  return (
    <main className="flex-1 relative z-10">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Unlock Your Potential with Our Courses
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore a wide range of educational courses and take the first step towards achieving your goals.
              </p>
              <div className="pt-6">
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Courses
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width="550"
                height="400"
                alt="Hero"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                Featured Courses
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Explore Our Top Courses</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover a wide range of educational courses to help you achieve your goals.
              </p>
            </div>
            <div className="overflow-auto w-full">
              <div className="flex gap-4 [&_img]:shrink-0 [&_img]:max-w-xs">
                {courses.map((course) => (
                  <div key={course.id} className="flex flex-col gap-2 w-64">
                    <img
                      src="/placeholder.svg"
                      alt={course.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
