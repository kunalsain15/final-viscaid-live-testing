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
          Finance Manager
        </h2>
        <p className="text-[#63666A] font-light text-base mb-[30px]">
          Arlington VA, United States
        </p>
        <div className="space-y-8">
          <div className="wpb_wrapper  text-[#63666A] font-light text-[14px] space-y-3 text-left">
            <h2 className="text-[#63666A] tracking-wide text-[14px] font-medium">
              About the Company
            </h2>
            <p>
              Viscadia is a consulting firm whose mission is to empower life
              sciences companies with clarity and confidence through
              forecasting. With teams in the United States, Switzerland, and
              India, we are well-equipped to provide the support global
              pharmaceutical and biotechnology companies need to make decisions
              quickly and with confidence. We are deeply committed to a vision
              of shared growth and success for our clients, colleagues and
              communities.
            </p>
            <p>
              We are looking for a Finance Manager to lead this critical support
              function and help drive our next phase of growth. This position
              reports to the Founder and CEO and is based out of the Arlington,
              VA office.
            </p>
          </div>
          <div className="wpb_wrapper  text-[#63666A] font-light text-[14px] space-y-3 text-left">
            <h2 className="text-[#63666A] text-[14px] tracking-wide font-medium">
              Why consider Viscadia as your next career step?
            </h2>
            <p>
              Since our founding in 2010, we have grown from a startup to a
              vibrant and collaborative community of more than 80 professionals.
              We are now looking for a self-starter and innovative finance
              professional who thrives in a collaborative, fast-paced
              environment and wants to grow with us.
            </p>
            <p>
              This role is ideal for someone excited to wear many hats across
              the finance function, drive process improvement, and help our
              consulting team leverage AI and technology to work more
              efficiently, quickly, and accurately. You will be a core business
              partner, supporting strategic decisions and helping scale
              financial operations. This role is ideal for someone who has
              thrived in both small, high-growth environments and larger, more
              structured organizations, and is eager to apply best practices to
              help guide Viscadia through its next stage of growth.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="flex flex-col items-center justify-center mb-10 space-y-4 text-center">
          <img src="/careers/Roles.png" alt="Roles Icon" className="mx-auto" />
          <h2 className="text-[#BD302B] font-bold text-2xl uppercase tracking-wide">
            Roles and Responsibilities
          </h2>
          <p className="text-[#676767] text-left  font-light">
            The Finance Manager will report directly to the Founder and CEO,
            offering a unique opportunity to be mentored, while playing a
            pivotal role in scaling and modernizing Viscadia’s financial
            operations. This individual will serve as a trusted advisor and
            hands-on contributor by leading day-to-day financial management,
            optimizing processes, and supporting strategic growth initiatives.
            This requires working in the Arlington, VA office up to 4 days per
            week, with 1 day per week virtually. The key responsibilities for
            this role include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 text-left text-[#333] RolesandResponsibilities leading-relaxed">
          <div className="space-y-8">
            <div>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y-1 text-base">
                <li>
                  Evaluate the financial impact of strategic initiatives and
                  projects
                </li>
                <li>
                  Prepare and interpret financial models, metrics, and key
                  performance indicators (KPIs)
                </li>
                <li>
                  Deliver actionable insights and recommendations to senior
                  leadership through comprehensive variance analyses and trend
                  reporting
                </li>
                <li>
                  Partner with stakeholders to develop realistic forecasts and
                  budgets aligned with organizational goals
                </li>
                <li>
                  Track and report variances against approved budgets,
                  identifying root causes and recommending corrective actions
                </li>
                <li>
                  Contribute to strategic planning efforts by providing
                  forward-looking financial projections
                </li>
                <li>
                  Oversee and coordinate the closing process to ensure accurate
                  and timely reporting of financial results
                </li>
                <li>
                  Review journal entries, reconciliations, and supporting
                  documentation for accuracy and compliance
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 mt-3">
            <div>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y-1 text-base">
                <li>
                  Manage end-to-end AP/AR processes, including invoicing,
                  billing, and collections to ensure timely revenue capture and
                  cost management
                </li>
                <li>
                  Monitor aging reports and credit terms to mitigate risk and
                  optimize cash flow
                </li>
                <li>
                  Establish and maintain relationships with key vendors and
                  clients, ensuring efficient dispute resolution and compliance
                  with payment terms
                </li>
                <li>
                  Monitor daily cash balances, forecast liquidity needs, and
                  propose strategies to optimize cash usage
                </li>
                <li>
                  Coordinate usage of credit lines and other financing
                  instruments to support operational and strategic objectives
                </li>
                <li>
                  Ensure compliance with covenants and manage banking
                  relationships effectively
                </li>
                <li>
                  Consolidate and review financial data to produce accurate,
                  timely monthly reports
                </li>
                <li>
                  Present insights on key trends, risks, and opportunities to
                  the leadership team
                </li>
                <li>
                  Standardize reporting processes to improve efficiency and
                  consistency across the organization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F0F1]">
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
                <li>
                  Bachelor’s degree in finance, accounting, or a related field
                  is required
                </li>
                <li>
                  Minimum of 5 years of progressive experience in finance,
                  ideally within a professional services environment
                </li>
                <li>
                  Advanced proficiency in Microsoft Excel and other financial
                  analysis and expense management tools
                </li>
                <li>
                  Hands-on experience with ERP and accounting systems (e.g.,
                  NetSuite, QuickBooks, SAP)
                </li>
                <li>
                  Proficiency with data visualization and reporting tools (e.g.,
                  Power BI, Tableau)
                </li>
                <li>
                  Exceptional attention to detail, with a strong focus on
                  accuracy and data integrity
                </li>
                <li>
                  Clear and confident verbal and written communication skills,
                  with the ability to present to senior leadership
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <ul className="list-disc text-[#676767] font-light  space-y-1 text-base">
                <li>
                  Proven ability to work independently while collaborating
                  effectively across teams and functions
                </li>
                <li>
                  High level of integrity, discretion, and sound judgment when
                  managing confidential information
                </li>
                <li>
                  Flexible and adaptable to evolving business needs and shifting
                  priorities
                </li>
                <li>
                  Strong organizational skills with the ability to manage
                  multiple priorities in a fast-paced environment
                </li>
                <li>
                  Servant leadership mindset with a genuine commitment to team
                  support and shared success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
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
                <li>
                  Your voice matters here; you will have direct access to
                  leadership and real influence on business outcomes.
                </li>
                <li>
                  Viscadia embraces a People First philosophy for all its
                  processes and policies. This entails three core principals:
                  empathy, genuine care and shared success. We believe that a
                  positive employee experience spreads outwards.
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <ul className="list-disc text-[#676767] font-light pl-5 text-base space-y-1">
                <li>
                  We understand the power of having a strong vision for a
                  brighter future. We invest our time, energy, and resources in
                  supporting the right causes and making our world a better
                  place.
                </li>
                <li>
                  Quality of life is incredibly important, especially when you
                  work in a highly competitive growth industry. We are dedicated
                  to promoting positive and supportive work environments.
                </li>
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
