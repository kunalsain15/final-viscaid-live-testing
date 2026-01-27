import React from "react";

const SectionTwo = () => {
  return (
    <div className=" w-full">
      <div className="bg-[#BD302B] pb-10 sm:pb-0 w-full">
        <div className="md:min-h-[230px] sm:py-0  mx-auto md:max-w-6xl lg:px-0 px-5 flex flex-col justify-start items-center">
          <img src="./homeAssets/qouteIcon2.png" alt="qouteIcon2" className="w-[56px] h-[51px]"/>
          <q className="text-center  text-xl sm:text-[22px] font-light leading-[28px] mt-8 text-white">
            As someone who thrives in team settings, I felt right at home in
            Viscadia’s collaborative culture. Challenging projects, experienced
            mentors, and engaging travel opportunities ensure that you are
            always learning and growing.
          </q>
          <p className="text-center text-[22px] font-light leading-[25px] mt-5 text-white">
            Consultant
          </p>
        </div>
      </div>

      <div className="md:max-w-6xl sm:mt-0 mt-7 mx-auto mb-15 about_tab_align">
        <div className="w-full min-h-[300px] sm:flex gap-10 sm:px-0 px-5 my-6 sm:my-12 flex-row-reverse">
          <div className="sm:w-[50%] flex justify-end">
            <div className="w-[526px]">
            <img
              className="lg:w-[100%] object-cover"
              src="./joinViscadia/Screen-Shot-2021-03-30-at-2.46.44-PM-1-768x431.png"
              alt=""
            />
            </div>
          </div>
          <div className="sm:w-[50%] flex flex-col sm:mt-0 mt-4 justify-center">
            <h2 className="text-[32px] lg:text-[32px] font-light">
              10 Years and Counting
            </h2>
            <p className="sm:text-[24px] text-xl font-light mt-3 md:w-[92%] core_value_tab_text">
              In 2020, Viscadia celebrated an important milestone, our 10th
              anniversary. To celebrate we created a video that reflects on the
              important milestones along the way and the people who helped us
              get there.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EEEEEE] w-full">
        <div className="min-h-[210px] about_tab_align pb-11 mx-auto md:max-w-6xl flex flex-col justify-start items-center">
          <img
            src="./joinViscadia/qouteIcon.png"
            alt=""
            className="w-[56px] h-[55px]"
          />
          <q className="text-center sm:px-0 px-5 text-[18px] sm:text-[22px] font-light leading-[28px] mt-8">
            I started my career at a place where the analytics tasks were always
            highly structured, leaving little room for creativity. I enjoy
            working at Viscadia in a supportive environment that encourages me
            to innovate and solve unstructured business problems. The collegial
            work culture soon instilled in me a sense of responsibility for my
            team — and their constant support helped me excel in my role and
            grow as a professional.
          </q>
          <p className="text-center text-[22px] font-light leading-[25px] mt-5">
            Associate
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
