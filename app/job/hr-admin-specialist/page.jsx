"use client";
import React, { useState } from "react";
import { Upload } from "lucide-react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nameව: null,
    name: "",
    email: "",
    message: "",
    contactNumber: "",
    currentEmployer: "",
    school: "",
    graduationYear: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare form data for API submission
    const submissionData = new FormData();
    submissionData.append("jobId", job.id);
    submissionData.append("jobTitle", job.title);
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);
    submissionData.append("contactNumber", formData.contactNumber);
    submissionData.append("resume", formData.resume);
    submissionData.append("currentEmployer", formData.currentEmployer);
    submissionData.append("school", formData.school);
    submissionData.append("graduationYear", formData.graduationYear);

    try {
      // Simulate API call (replace with actual API endpoint in the future)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-[80px] w-full h-[307px] bg-[#BD3023] flex items-center">
        <div className="text-left px-6 sm:px-24 space-y-4">
          <h2 className="text-[#C9C9C9] sm:text-white text-2xl sm:text-3xl font-normal sm:font-light tracking-wide">
            Careers
          </h2>
          <p className="text-white font-light tracking-wide max-w-3xl text-2xl sm:text-4xl md:text-5xl">
            Working together toward shared success
          </p>
        </div>
      </div>

      <div className="text-center  bg-[#f1f0f1] px-6 sm:px-24 pt-15 pb-15">
        <h2 className="text-[#BD302B] text-[38px] font-bold">
          HR & Admin Specialist
        </h2>
        <p className="text-[#63666A] font-light text-base mb-[30px]">India</p>
        <div className="space-y-2">
          <div className="wpb_wrapper  text-[#63666A] font-light text-[14px]  text-left">
            <h2 className="text-[#63666A] tracking-wide text-base font-medium">
              At Viscadia, we are driving decisions one forecast at a time.
            </h2>
            <p className="text-base">
              In today’s fast-paced business landscape, accurate forecasting is
              crucial. It shapes mergers and acquisitions, guides product demand
              strategies, influences pricing models, and ultimately determines
              the success or failure of organizations. That is where we come in.
            </p>
            <p className="text-base mt-3">
              Viscadia is not just a management consulting firm; we are
              empowering life sciences companies with unparalleled clarity and
              confidence with comprehensive forecasting solutions.
            </p>
          </div>
          <div className="wpb_wrapper  text-[#63666A] font-light text-[14px] text-left">
            <h2 className="text-[#63666A] text-base tracking-wide font-medium">
              Why Choose Viscadia?
            </h2>
            <p className="text-base">
              Our team is stacked with industry-leading experts with decades of
              experience. We excel at not only meeting but anticipating and
              exceeding our clients’ needs. Since our inception in 2010,
              Viscadia has established itself as a trusted partner to some of
              the largest firms in the life sciences sector.
            </p>
          </div>
          <div className="wpb_wrapper  text-[#63666A] font-light text-[14px] text-left">
            <h2 className="text-[#63666A] text-base tracking-wide font-medium">
              Global Presence, Global Impact{" "}
            </h2>
            <p className="text-base">
              Headquartered in Arlington, VA, with additional offices in Boston,
              Lucerne (Switzerland), and Delhi (India), our global footprint
              supports our growing team of 80+ professionals. Our expanding
              client roster and the increasing demand for our expertise signify
              an exciting phase of growth for Viscadia.
            </p>
          </div>
          <div className="wpb_wrapper  text-[#63666A] font-light text-[14px] text-left">
            <h2 className="text-[#63666A] text-base tracking-wide font-medium">
              Join Our Journey{" "}
            </h2>
            <p className="text-base">
              We are seeking talented individuals who are eager to contribute
              and help propel us to new heights. If you are ready to make a
              significant impact and be part of a team that is shaping the
              future of forecasting in life sciences, we invite you to explore
              opportunities with Viscadia.
            </p>
          </div>
          <div className="wpb_wrapper  text-[#63666A] font-light text-[14px] text-left">
            <h2 className="text-[#63666A] text-base tracking-wide font-medium">
              Role Overview
            </h2>
            <p className="text-base">
              As Vendor Management Specialist , you will be instrumental in
              selecting, onboarding, and managing vendors, ensuring alignment
              with our business needs. This role is ideal for someone with
              strong negotiation skills, a solutions-focused mindset, and a keen
              eye for detail, ready to establish strategic partnerships that
              support our organizational goals.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="flex flex-col items-center justify-center mb-10 space-y-4 text-center">
          <img src="/careers/Roles.png" alt="Roles Icon" className="mx-auto" />
          <h2 className="text-[#BD302B] font-bold text-2xl uppercase tracking-wide">
            Responsibilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-2 text-left text-[#333] RolesandResponsibilities leading-relaxed">
          <div className="space-y-5">
            <div>
              <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
                Vendor Selection & Onboarding
              </p>
              <ul className="list-disc mt-2 text-[#676767] font-light pl-5 space-y-1 text-base">
                <li>
                  Identify, source, and empanel vendors to meet organizational
                  needs.
                </li>
                <li>
                  Conduct due diligence, including comprehensive risk
                  assessments, background checks, and reference verifications.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
                Contract Management & Negotiation
              </p>
              <ul className="list-disc mt-2 text-[#676767] font-light pl-5 space-y-1 text-base">
                <li>
                  Identify, source, and empanel vendors to meet organizational
                  needs.
                </li>
                <li>
                  Conduct due diligence, including comprehensive risk
                  assessments, background checks, and reference verifications.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
                Vendor Performance Management
              </p>
              <ul className="list-disc mt-2 text-[#676767] font-light pl-5 space-y-1 text-base">
                <li>
                  Monitor and evaluate vendor performance regularly, focusing on
                  quality, reliability, and alignment with operational goals.
                </li>
                <li>
                  Implement performance improvement plans for underperforming
                  vendors and manage the escalation process as needed.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 ">
            <div>
              <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
                Relationship Management & Strategic Partnerships
              </p>
              <ul className="list-disc text-[#676767] font-light pl-5 space-y-1 mt-2 text-base">
                <li>
                  Build and nurture strong relationships with vendors, fostering
                  collaboration and long-term partnerships.
                </li>
                <li>
                  Collaborate closely with internal teams to understand and
                  align vendor services with business requirements.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
                Contract/Vendor Compliance
              </p>
              <ul className="list-disc mt-2 text-[#676767] font-light pl-5 space-y-1 text-base">
                <li>
                  Ensure vendor adherence to company policies and industry
                  regulations, including legal standards.
                </li>
                <li>
                  Innovate processes to enhance vendor performance and
                  streamline operations for optimal efficiency.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
                Benefits Administration
              </p>
              <ul className="list-disc mt-2 text-[#676767] font-light pl-5 space-y-1 text-base">
                <li>
                  Serve as SPOC for queries on all the Vendor managed programs
                  like Employee health and life insurance, Fitness program,
                  Housekeeping, Office admin vendors etc.
                </li>
                <li>Facilitate Benefits orientation for new hires</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1200px] mx-auto py-12 px-6">
          <div className="text-center mb-10">
            <img
              src="/careers/Qualifcation.png"
              alt="Roles Icon"
              className="mx-auto mb-4"
            />
            <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-2xl uppercase ">
              Qualifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-9 text-left RolesandResponsibilities leading-relaxed">
            <div className="space-y-8">
              <ul className="list-disc text-[#676767] font-light  space-y-1 text-base">
                <li>7+ years of experience in vendor management.</li>
                <li>Bachelor’s degree in any discipline.</li>
                <li>Prior experience in vendor management is a must.</li>
              </ul>
            </div>
            <div className="space-y-8">
              <ul className="list-disc text-[#676767] font-light  space-y-1 text-base">
                <li>
                  Experience with insurance vendors and administrative, legal,
                  facility etc.
                </li>
                <li>
                  Excellent negotiation, contract management, and relationship
                  building skills.
                </li>
                <li>
                  Outcome driven with high attention to detail and
                  problem-solving abilities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1f0f1]">
        <div className="max-w-[1200px] mx-auto py-12 px-6">
          <div className="text-center mb-10">
            <img
              src="/job/Benefits.png"
              alt="Roles Icon"
              className="mx-auto mb-7"
            />
            <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
              <p>Benefits</p>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 text-left text-[#333] leading-relaxed">
            {/* Left Column */}
            <div>
              <ul className="list-disc text-[#676767] font-light pl-5 text-base space-y-1">
                <li>Attractive Relocation & Home Office Set-Up Benefits</li>
                <li>
                  Attractive Long-Term Incentive Bonuses over & above CTC*
                </li>
                <li>
                  Gratuity applicable as per The Gratuity Act, over & above CTC.
                </li>
                <li>Comprehensive health & term insurance packages</li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <ul className="list-disc text-[#676767] font-light pl-5 text-base space-y-1">
                <li>
                  Generous Leave policy including but not limited to: Sick
                  leave, casual leave, earned leave, bereavement leave,
                  maternity & paternity leave
                </li>
                <li>Wellness benefits</li>
                <li>Gym subscriptions</li>
                <li>Attractive health & wellness packages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact mt-11 Information">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                      CONTACT
                      <br />
                      INFORMATION
                    </h1>
                  </div>

                  <div className="text-[#63666A] font-light text-[14px] leading-relaxed">
                    <p>
                      If you think you are the right person for this job please
                      <br /> send us your name, contact information and a copy
                      of
                      <br /> your resumé.
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-2 border-[#717073] px-4 py-[15px] text-[12px] placeholder:font-normal focus:outline-none focus:ring focus:ring-[#D68D8D] focus:border-[#717073] focus:shadow-[0_0_0_2px_rgba(214,141,141,0.4)] focus:rounded-[2px]"
                          required
                        />
                        <div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-2 border-[#717073] px-4 py-[15px] text-[12px] placeholder:font-normal focus:outline-none focus:ring focus:ring-[#D68D8D] focus:border-[#717073] focus:shadow-[0_0_0_2px_rgba(214,141,141,0.4)] focus:rounded-[2px]"
                            required
                          />
                        </div>
                      </div>

                      <div className="row-span-2">
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full h-full px-4 py-3 border-2 border-[#717073] text-[12px] placeholder:font-normal focus:outline-none focus:ring focus:ring-[#D68D8D] focus:border-[#717073] focus:shadow-[0_0_0_2px_rgba(214,141,141,0.4)] focus:rounded-[2px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="tel"
                          name="contactNumber"
                          placeholder="Contact Number*"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-[15px] border-2 border-[#717073] text-[12px] placeholder:font-normal focus:outline-none focus:ring focus:ring-[#D68D8D] focus:border-[#717073] focus:shadow-[0_0_0_2px_rgba(214,141,141,0.4)] focus:rounded-[2px]"
                          required
                        />
                      </div>
                      <div className="w-full max-w-md mx-auto">
                        <div className="relative z-20">
                          <input
                            type="file"
                            id="resume-upload"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            required
                          />
                          <label
                            htmlFor="resume-upload"
                            className="w-full h-16 border-2 border-dashed border-[#717073] rounded-[3px] flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:shadow-sm transition-all duration-200 bg-white"
                          >
                            <div className="px-4 w-full">
                              <div className="flex flex-col pt-[6px] pb-[29px] pr-[19px] pl-[19px] bg-white mt-9 border border-dashed border-[#717073] w-full items-center space-y-1">
                                <span className="text-[10px] text-gray-300">
                                  Upload Résumé{" "}
                                  <span className="text-blue-500 text-[10px]">
                                    *
                                  </span>
                                </span>
                                <Upload size={20} className="text-gray-500" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="currentEmployer"
                        placeholder="Current Employer"
                        value={formData.currentEmployer}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#717073] text-[12px] placeholder:font-normal focus:outline-none focus:ring focus:ring-[#D68D8D] focus:border-[#717073] focus:shadow-[0_0_0_2px_rgba(214,141,141,0.4)] focus:rounded-[2px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="school"
                          placeholder="Undergraduate / Graduate School*"
                          value={formData.school}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-[#717073] text-[12px] placeholder:font-normal focus:outline-none focus:ring focus:ring-[#D68D8D] focus:border-[#717073] focus:shadow-[0_0_0_2px_rgba(214,141,141,0.4)] focus:rounded-[2px]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="graduationYear"
                          placeholder="Year of Graduation*"
                          value={formData.graduationYear}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-[#717073] text-[12px] placeholder:font-normal focus:outline-none focus:ring focus:ring-[#D68D8D] focus:border-[#717073] focus:shadow-[0_0_0_2px_rgba(214,141,141,0.4)] focus:rounded-[2px]"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <iframe
                        title="reCAPTCHA"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-6pzjew6p77rf"
                        frameBorder="0"
                        scrolling="no"
                        className="font-light"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeVakwpAAAAALk4Ijq6jp0nHMRQdotd2_snrKjS&amp;co=aHR0cHM6Ly92aXNjYWRpYS5jb206NDQz&amp;hl=en&amp;v=_mscDd1KHr60EWWbt2I_ULP0&amp;theme=light&amp;size=normal&amp;anchor-ms=20000&amp;execute-ms=15000&amp;cb=qazxd5eynl4g"
                      />
                    </div>

                    <div className="frm_submit justify-end flex gap-4 md:mt-0 mt-5">
                      <button
                        className="frm_button_submit bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
