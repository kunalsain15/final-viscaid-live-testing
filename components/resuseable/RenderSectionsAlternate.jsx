import Link from "next/link";
import React from "react";

const RenderSectionsAlternate = () => {
  return (
    <div className="md:mb-0">
      {/* <div className="bg-[#EEEEEE] py-10">
        <div className="flex justify-center items-center min-h-auto w-full">
          <div className="max-w-6xl w-full px-4">
            <div className="grid grid-cols-12 gap-20">
              <div className="col-span-6">
                <img
                  className="sm:h-[300px]"
                  src="./homeAssets/CoreValues.png"
                  alt="charity-water"
                />
              </div>
              <div className="col-span-6">
                <div className="md:h-full space-y-3 sm:py-3 sm:mt-0 mt-2  flex flex-col justify-center">
                  <h3 className="text-[24px] sm:text-[28px] sm:mt-0 mt-0 font-light">
                    Core Values
                  </h3>
                  <p className="text-[20px] md:text-[22px] font-light">The ideals that drive us</p>
                  <p className="text-[16px] md:text-[18px]  text-[#4E4E4E] font-light">
                    We are deeply committed to a vision of shared growth and success
                    for our clients, colleagues and communities.
                  </p>
                  <Link
                    href="/core-values"
                    className="text-white mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-[#EEEEEE] py-7 md:py-10">
        <div className="flex justify-center items-center min-h-auto w-full">
          <div className="max-w-6xl w-full px-5 md:px-0">
            <div className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-20 about_tab_align">
              <div className="col-span-6">
                <img
                  // className="w-full h-auto sm:h-[300px] object-contain"
                  src="./homeAssets/CoreValues.png"
                  alt="core-values"
                />
              </div>

              <div className="col-span-6">
                <div className="md:h-full space-y-3 flex flex-col justify-center">
                  <h3 className="text-[24px] sm:text-[28px] font-light">Core Values</h3>
                  <p className="text-[20px] md:text-[22px] font-light">The ideals that drive us</p>
                  <p className="text-[16px] md:text-[18px] text-[#4E4E4E] font-light">
                    We are deeply committed to a vision of shared growth and success for our clients, colleagues and communities.
                  </p>
                  <Link href="/core-values" className="text-white mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
                    LEARN MORE
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* <div className="flex justify-center items-center min-h-auto w-full py-10">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-12 gap-20">
            <div className="col-span-6">
              <div className="md:h-full space-y-3 sm:py-3 sm:mt-0 mt-2  flex flex-col justify-center">
                <h3 className="text-[24px] sm:text-[28px] sm:mt-0 mt-0 font-light">
                  Leadership
                </h3>

                <p className="text-[20px] md:text-[22px] font-light">
                  Our dedicated, experienced management team
                </p>
                <p className="text-[16px] md:text-[18px]  text-[#4E4E4E] font-light">
                  We deliver a forward-thinking approach to precision
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  forecasting, guided by deep expertise.
                </p>
                <Link
                  href="/leadership"
                  className="text-white mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="col-span-6">
              <img
                className=""
                src="./homeAssets/Leadership.png"
                alt="viscadia-volunteers"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center min-h-auto w-full py-7 md:py-10">
        <div className="max-w-6xl w-full px-5 md:px-0">
          {/* flex-col-reverse: Mobile par niche wali Image ko utha kar upar kar dega */}
          <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-2 sm:gap-20 about_tab_align">

            {/* Content Div - Mobile par niche chala jayega */}
            <div className="col-span-6">
              <div className="md:h-full space-y-3 flex flex-col justify-center">
                <h3 className="text-[24px] sm:text-[28px] font-light">Leadership</h3>
                <p className="text-[20px] md:text-[22px] font-light">Our dedicated, experienced management team</p>
                <p className="text-[16px] md:text-[18px] text-[#4E4E4E] font-light">
                  We deliver a forward-thinking approach to precision
                  forecasting, guided by deep expertise.
                </p>
                <Link href="/leadership" className="text-white mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Image Div - Mobile par upar aa jayega */}
            <div className="col-span-6">
              <img
                className="w-full h-auto object-contain"
                src="./homeAssets/Leadership.png"
                alt="leadership"
              />
            </div>

          </div>
        </div>
      </div>

      {/* <div className="bg-[#EEEEEE] py-10">
        <div className="flex justify-center items-center min-h-auto w-full">
          <div className="max-w-6xl w-full px-4">
            <div className="grid grid-cols-12 gap-20">
              <div className="col-span-6">
                <img
                  className="sm:h-[300px]"
                  src="./homeAssets/SocialImpact.png"
                  alt="charity-water"
                />
              </div>
              <div className="col-span-6">
                <div className="md:h-full space-y-3 sm:py-3 sm:mt-0 mt-2  flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-[28px] sm:mt-0 mt-4 font-light">
                    Social Impact
                  </h3>
                  <p className="text-[22px] font-light">
                    Making an impact in vulnerable communities
                  </p>
                  <p className="text-[18px] text-[#4E4E4E] font-light">
                    We are dedicated to supporting innovative solutions to deep health
                    and educational disparities in our local communities and around
                    the world.
                  </p>
                  <Link
                    href="/social-impact"
                    className="text-white mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div className="bg-[#EEEEEE] py-7 md:py-10">
        <div className="flex justify-center items-center min-h-auto w-full">
          <div className="max-w-6xl w-full px-5 md:px-0">
            <div className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-20 about_tab_align">

              {/* Image Section - Mobile par automatically Top par rahega */}
              <div className="col-span-6 flex justify-center">
                <img
                  className="w-full h-auto object-contain"
                  src="./homeAssets/SocialImpact.png"
                  alt="charity-water"
                />
              </div>

              {/* Content Section - Mobile par Image ke niche dikhega */}
              <div className="col-span-6">
                <div className="md:h-full space-y-3 sm:py-3 sm:mt-0 mt-2 flex flex-col justify-center">
                  <h3 className="text-[24px] sm:text-[28px] font-light">
                    Social Impact
                  </h3>
                  <p className="text-[20px] md:text-[22px] font-light leading-tight">
                    Making an impact in vulnerable communities
                  </p>
                  <p className="text-[16px] md:text-[18px] text-[#4E4E4E] font-light">
                    We are dedicated to supporting innovative solutions to deep health
                    and educational disparities in our local communities and around
                    the world.
                  </p>
                  <Link
                    href="/social-impact"
                    className="text-white mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RenderSectionsAlternate;