"use client";
import React, { useState } from "react";
import { Upload } from "lucide-react";

const Page = () => {
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
          <p className="text-white font-light tracking-wide max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            Working together toward shared success
          </p>
        </div>
      </div>

      <div className="text-center bg-[#f1f0f1] px-6 sm:px-24 pt-15 pb-15">
        <h2 className="text-[#BD302B] text-[38px] font-bold">Associate</h2>
        <p className="text-[#63666A] font-light text-base mb-[30px]">
          United States
        </p>
        <div className="wpb_wrapper text-[#63666A] font-light text-[14px] space-y-3 text-left">
          <p>
            We are seeking a technically driven Associate to join our India team
            in Gurgaon. This role provides an exceptional opportunity to build a
            career at the intersection of healthcare, technology, and business
            analytics. You’ll receive mentorship and hands-on experience to
            develop core consulting and technical skills, including data
            modeling, cloud-based development, forecasting, and executive-level
            communication.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <img
            src="/careers/Roles.png"
            alt="Roles Icon"
            className="mx-auto mb-4"
          />
          <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
            Roles and Responsibilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 text-left text-[#333] leading-relaxed">
          <div className="space-y-8">
            <div>
              <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
                Technical Responsibilities
              </h3>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
                <li>
                  Assist in the development and maintenance of cloud-based
                  forecasting tools and simulation platforms, leveraging modern
                  tech stacks.
                </li>
                <li>
                  Work with Python for data transformation, statistical modeling
                  (e.g., ARIMA, exponential smoothing), and automation tasks.
                </li>
                <li>
                  Write SQL queries to extract, transform, and load large
                  datasets for analytics and forecasting workflows.
                </li>
                <li>
                  Support the creations of interactive dashboards using tools
                  such as Power BI, Tableau, or basic web frontend to visualize
                  insights.
                </li>
                <li>
                  Apply basic cloud services knowledge (e.g., AWS S3, Lambda,
                  EC2) to support technical delivery of forecasting solutions.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 mt-3">
            <div>
              <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
                Business Responsibilities
              </h3>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
                <li>
                  Conduct secondary research to understand therapeutic areas,
                  disease states and pharmaceutical products as relevant to the
                  project.
                </li>
                <li>
                  Develop expertise in various time series forecasting methods
                  and apply this knowledge towards building forecasting models
                  across multiple therapeutic areas.
                </li>
                <li>
                  Contribute proactively to business development and
                  capability-building initiatives.
                </li>
                <li>
                  Translate real-world pharmaceutical problems into structured
                  analytical approaches and modeling strategies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F0F1]">
        <div className="max-w-[1200px] mx-auto py-12 px-9">
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

          <div className="grid md:grid-cols-1 gap-9 text-left RolesandResponsibilities leading-relaxed">
            <div className="space-y-3">
              <p className="text-[18px] font-medium tracking-wide text-[#444444]">
                Education & Experience
              </p>
              <ul className="list-disc list-inside text-[#676767] font-light space-y-2 text-base pl-0">
                <li>B.Tech/B.E. from a premier engineering college.</li>
                <li>
                  0–2 years of technical/analytics experience is preferred,
                  particularly with exposure to pharma analytics, forecasting,
                  or cloud-based application development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <img
            src="/careers/Technical-Expertise.png"
            alt="Roles Icon"
            className="mx-auto mb-7"
          />
          <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
            <p>Skills & Technical Proficiencies</p>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 text-left text-[#333] leading-relaxed">
          {/* Left Column */}
          <div>
            <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
              Technical Skills
            </p>
            <ul className="list-disc text-[#676767] font-light pl-5 text-base space-y-1">
              <li>
                Intermediate proficiency in Python, especially libraries like
                pandas, NumPy, matplotlib/seaborn, and introductory statsmodels.
              </li>
              <li>
                Working knowledge of SQL for data querying and transformation.
              </li>
              <li>
                Exposure to web development concepts, cloud tools (AWS
                preferred), and creating or maintaining simple data pipelines is
                a plus
              </li>
              <li>
                Familiarity with dashboarding tools (Power BI, Tableau) and
                Excel automation (VBA/macros) is preferred
              </li>
              <li>
                Comfort with Microsoft Excel and PowerPoint for presenting
                data-driven insights.
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-[18px] font-medium tracking-wide text-[#444444] mb-2">
              Pharmaceutical Knowledge
            </p>
            <ul className="list-disc text-[#676767] font-light pl-5 text-base space-y-1">
              <li>
                Strong interest in life sciences/pharmaceutical consulting.
              </li>
              <li>
                Exposure to pharmaceutical commercial models and patient
                journeys is a plus.
              </li>
            </ul>
            <p className="text-[18px]  font-medium tracking-wide text-[#444444] mt-10">
              Soft Skills
            </p>
            <ul className="list-disc text-[#676767] font-light pl-5 text-base space-y-1">
              <li>Strong verbal and written communication skills.</li>
              <li>
                Analytical and problem-solving mindset with attention to detail.
              </li>
              <li>
                Ability to work collaboratively in teams as well as
                independently.
              </li>
              <li>
                Willingness to learn and grow in a fast-paced, high-impact
                consulting environment.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F0F1]">
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
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <ul className="list-disc text-[#676767] font-light pl-5 text-base space-y-1">
                <li>Comprehensive health & term insurance packages</li>
                <li>
                  Generous Leave policy including but not limited to: Sick
                  leave, casual leave, earned leave, bereavement leave,
                  maternity & paternity leave
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact Information">
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

                    <div className="flex  items-center space-x-3">
                      <iframe
                        title="reCAPTCHA"
                        width="307"
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

export default Page;
