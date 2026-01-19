import React from "react";
import Link from "next/link";
const page = () => {
  const jobs = [
    {
      title: "Principal, Integrated Insights, United States",
      location: "United States",
      id: 1,
      link: "principal-integrated-insights-united-states",
    },
    {
      title: "Associate, Gurgaon, India",
      location: "Gurgaon, India",
      id: 2,
      link: "associate-gurgaon-india",
    },
    {
      title: "Associate Consultant, Gurgaon, India",
      location: "Gurgaon, India",
      id: 3,
      link: "associate-consultant-gurgaon-india",
    },
    {
      title: "Marketing Director, Arlington, VA, United States",
      location: "Arlington, VA, United States",
      id: 4,
      link: "marketing-director-arlington-va-united-states",
    },
    {
      title: "Finance Manager, Arlington, VA, United States",
      location: "Arlington, VA, United States",
      id: 5,
      link: "finance-manager-arlington-va-united-states",
    },
    {
      title: "HR & Admin Specialist, Gurgaon, India",
      location: "Gurgaon, India",
      id: 6,
      link: "hr-admin-specialist",
    },
  ];
  return (
    <>
      <div className="pt-40">
        <div
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/lifeAtViscadia/vis_hero_interior_JOIN.gif')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 sm:px-28 space-y-4">
            <h2 className="text-white text-sm sm:text-3xl font-light tracking-wide">
              Careers
            </h2>
            <p className="text-white font-light tracking-wide text-2xl sm:text-4xl md:text-5xl ">
              At Viscadia, our people are our brand
            </p>
          </div>
        </div>

        <div className="absolute top-22 right-16 ">
          <img
            src="/careers/GPTW-25-1.png"
            alt="Great Place to Work Certified"
            className="w-24 h-auto sm:w-32"
          />
        </div>
      </div>

      <div className="bg-[#DfDfDf]">
        <div className="w-[1180px] mx-auto">
          <div className="grid grid-cols-1 py-15 lg:grid-cols-2 items-center justify-center mx-auto">
            <div className="space-y-3 text-center lg:text-left">
              <h2 className="text-[18px] text-black font-light">Who We Are</h2>
              <p className="text-[#63666A] text-base font-light">
                At Viscadia, we are passionate about delivering excellence at
                <br /> whatever we do.
              </p>
              <p className="text-[#63666A] text-base font-light">
                We are resolute to work through challenges and create
                opportunities <br /> to learn and grow. As visionary leaders, we
                celebrate our past, <br /> embrace present, and are fueled by
                future.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/lifeAtViscadia/serving_communities/serving_community.webp"
                className="w-[510px] h-[370px] object-cover"
                alt="Serving Community"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="grid grid-cols-1 py-15 lg:grid-cols-2 items-center justify-center mx-auto">
            <div className="flex justify-center ">
              <img
                src="/careers/Sathish_1800x.webp"
                className="w-[510px] h-[370px] object-cover"
                alt="Serving Community"
              />
            </div>
            <div className="space-y-3 px-20 text-center lg:text-left">
              <h2 className="text-[38px] text-black font-light">
                What Drives Us
              </h2>
              <p className="text-[#63666A] text-base font-light">
                At Viscadia, our effectiveness is driven by a clear vision,
                results
                <br /> -oriented management, and highly self-driven employees.
              </p>
              <p className="text-[#63666A] text-base font-light">
                We are committed to building long-lasting relationships with our
                clients by delivering unique solutions to their most complex
                challenges. With our worldwide presence, Viscadia is adept at
                combining state-of-the-art forecasting advances with deep market
                insights to produce consistently superior outcomes.
              </p>
            </div>
          </div>
          <div className="bg-[#EEEEEE]  py-16">
            <div className=" w-[1180px] mx-auto">
              <h2 className="text-[32px] text-black font-light">
                Career Opportunities
              </h2>
              <p className="text-[#63666A] text-[18px] font-light">
                We are looking for smart team workers with go-getter attitude to
                work in an intellectually stimulating <br /> ecosystem. Up for a
                challenge?
              </p>
            </div>
            <div className="bg-[#EEEEEE] w-[1180px] mx-auto py-16">
              <div className="mt-8 space-y-4">
                {jobs?.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between border-b pb-6 border-gray-300 "
                  >
                    <span className="text-[#BD302B] text-[18px] font-light">
                      {job.title}
                    </span>
                    <Link href={`/careers/${job.link}`}>
                      <button className="bg-[#BD302B] hover:bg-red-800 cursor-pointer text-white text-[12px] font-light px-7 py-[10px]">
                        APPLY NOW
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
