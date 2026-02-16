// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { Upload } from "lucide-react";
// // import axios from "axios";
// // import { API_ENDPOINTS } from "@/endpoint";
// // import ReCAPTCHA from "react-google-recaptcha";
// // const isFile = (val) => typeof File !== "undefined" && val instanceof File;

// // const page = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [captchaError, setCaptchaError] = useState(false);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");
// //   const [verified, setVerified] = useState(false);
// //   const [errors, setErrors] = useState("");
// //   const [principal, setPrincipal] = useState(null);
// //   const [formData, setFormData] = useState({
// //     resume: "",
// //     name: "",
// //     email: "",
// //     message: "",
// //     contactNumber: "",
// //     currentEmployer: "",
// //     school: "",
// //     graduation_year: "",
// //   });

// //   useEffect(() => {
// //     const principal = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://api.viscadia.com/api/v1/career"
// //         );
// //         setPrincipal(response.data.data);
// //         console.log(response.data.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     principal();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleFileChange = async (e) => {
// //     if (e.target.files.length === 0) return;

// //     const selectedFile = e.target.files[0];
// //     setFormData((prev) => ({ ...prev, resume: selectedFile }));

// //     const data = new FormData();
// //     data.append("file", selectedFile);

// //     try {
// //       const uploadResponse = await axios.post(
// //         "https://api.viscadia.com/api/upload/single",
// //         data,
// //         {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         }
// //       );

// //       const uploadedUrl = uploadResponse.data.data.url;

// //       setFormData((prev) => ({ ...prev, resumeUrl: uploadedUrl }));
// //     } catch (error) {
// //       console.error("File upload failed:", error);
// //       setError("File upload failed. Please try again.");
// //       setFormData((prev) => ({ ...prev, resume: "" }));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     setSuccess("");
// //     setCaptchaError(false);

// //     if (!verified) {
// //       setCaptchaError(true);
// //       setLoading(false);
// //       return;
// //     }

// //     const requiredFields = [
// //       "name",
// //       "email",
// //       "message",
// //       "contactNumber",
// //       "currentEmployer",
// //       "school",
// //       "graduation_year",
// //       "resumeUrl",
// //     ];

// //     const emptyFields = requiredFields.filter(
// //       (field) => !formData[field] || formData[field].toString().trim() === ""
// //     );

// //     if (emptyFields.length > 0) {
// //       setError("Please fill in all required fields before submitting.");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const payload = {
// //         name: formData.name,
// //         email: formData.email,
// //         message: formData.message,
// //         contactNumber: formData.contactNumber,
// //         currentEmployer: formData.currentEmployer,
// //         school: formData.school,
// //         graduation_year: formData.graduation_year,
// //         resume: formData.resumeUrl,
// //       };

// //       console.log("Payload before submit:", payload);

// //       await axios.post(
// //         "https://api.viscadia.com/api/forms/career-application",
// //         payload,
// //         {
// //           headers: { "Content-Type": "application/json" },
// //         }
// //       );

// //       setSuccess("Your responses were successfully submitted. Thank you!");
// //       setFormData({
// //         resume: "",
// //         resumeUrl: "",
// //         name: "",
// //         email: "",
// //         message: "",
// //         contactNumber: "",
// //         currentEmployer: "",
// //         school: "",
// //         graduation_year: "",
// //       });
// //       setVerified(false);
// //       setCaptchaError(false);
// //     } catch (err) {
// //       console.error("Submit failed:", err.response?.data || err.message);

// //       if (err.response?.data?.errors) {
// //         setErrors(err.response.data.errors);
// //       } else if (err.response?.data?.error) {
// //         setError(err.response.data.error);
// //       } else {
// //         setError(
// //           "Please correct any issues noted below and resubmit the form."
// //         );
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Header */}
// //       <div className="relative  w-full h-[390px] bg-[#BD3023] flex items-center">
// //         <div className="text-left pt-[60px] sm:pt-[80px] px-6 sm:px-24 space-y-4">
// //           <h2 className="text-white text-2xl sm:text-3xl font-light tracking-wide">
// //             {/* {data.heading} */}
// //           </h2>
// //           <p className="text-white font-light tracking-wide max-w-3xl text-2xl sm:text-4xl md:text-5xl">
// //             Working together toward shared success
// //           </p>
// //         </div>
// //       </div>
// //       <div className="text-center bg-[#f1f0f1] px-6 sm:px-24 pt-15 pb-15">
// //         <h2 className="text-[#BD302B] text-xl sm:text-[38px] font-bold">
// //           Principal, Integrated Insights
// //         </h2>
// //         <p className="text-[#63666A] font-light text-base mb-[30px]">
// //           United States
// //         </p>
// //         <div className="wpb_wrapper text-[#63666A] font-light text-[14px] space-y-3 text-left">
// //           <p>
// //             Viscadia is a consulting firm whose mission is to empower life
// //             sciences companies with clarity and confidence through forecasting.
// //             With teams in the United States, Switzerland, and India, we are
// //             well- equipped to provide the support global life science companies
// //             need to make decisions quickly and with confidence. We are deeply
// //             committed to a vision of shared growth and success for our clients,
// //             colleagues, and communities.
// //           </p>
// //           <p>
// //             Integrated insights – encompassing qualitative and quantitative
// //             market research as well as secondary analytics – form the foundation
// //             of successful life sciences forecasting. At Viscadia, our insights
// //             are known for being “designed with the end in mind,” tailored to
// //             inform and shape forecast models that deliver clarity and
// //             confidence. We are seeking a Principal to lead, manage, and grow our
// //             Integrated Insights practice, with responsibility for service
// //             delivery, team leadership, and business development.
// //           </p>
// //         </div>
// //       </div>
// //       <div className="max-w-[1200px] mx-auto py-12 px-6">
// //         <div className="text-center mb-10">
// //           <img
// //             src="/careers/Roles.png"
// //             alt="Roles Icon"
// //             className="mx-auto mb-4"
// //           />
// //           <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
// //             Roles and Responsibilities
// //           </h2>
// //         </div>

// //         <div className="grid md:grid-cols-2 text-left text-[#333] leading-relaxed">
// //           <div className="space-y-8">
// //             <div>
// //               <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
// //                 Strategic Leadership
// //               </h3>
// //               <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
// //                 <li>
// //                   Lead and grow the Integrated Insights practice, with a focus
// //                   on business development & licensing, pipeline, and on-market
// //                   product forecasting.
// //                 </li>
// //                 <li>
// //                   Serve as a senior thought partner to clients, providing
// //                   strategic guidance and insight.
// //                 </li>
// //                 <li>
// //                   Drive engagement design, pricing, staffing, and execution
// //                   across multiple projects.
// //                 </li>
// //                 <li>
// //                   Develop and retain top talent; foster a high-performing,
// //                   inclusive team culture.
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>

// //           <div className="space-y-8 mt-3">
// //             <div>
// //               <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
// //                 Revenue Growth
// //               </h3>
// //               <ul className="list-disc text-[#676767] font-light pl-6 space-y-1 text-base">
// //                 <li>
// //                   Proactively identify and pursue growth opportunities within
// //                   existing client accounts by engaging in strategic
// //                   conversations, uncovering emerging needs, and positioning
// //                   Viscadia’s expertise to support new initiatives and add
// //                   continued value.
// //                 </li>
// //                 <li>
// //                   Set clear goals and performance objectives for managers to
// //                   effectively manage, expand, and deepen client relationships,
// //                   ensuring sustained account growth and long-term success.
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-2 text-left RolesandResponsibilities leading-relaxed">
// //           <div className="space-y-8 mt-6">
// //             <div>
// //               <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
// //                 Client Relationships
// //               </h3>
// //               <ul className="list-disc text-[#676767] font-light pl-6 space-y- text-base">
// //                 <li>
// //                   Actively build, manage, and expand client relationships by
// //                   identifying key stakeholders, developing a deep understanding
// //                   of their business challenges and unmet needs, and providing
// //                   thought leadership that uncovers new opportunities, mitigates
// //                   potential risks, and adds measurable value to their strategic
// //                   and operational priorities.
// //                 </li>
// //                 <li>
// //                   Lead the development of thoughtful, tailored, and high-impact
// //                   responses to client requests—including Requests for Proposals
// //                   (RFPs), scopes of work, and ad hoc inquiries—by crafting
// //                   compelling narratives, clearly articulating our capabilities,
// //                   and presenting solutions that align with client objectives.
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>

// //           <div className="space-y-8 mt-8">
// //             <div>
// //               <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
// //                 Corporate Growth
// //               </h3>
// //               <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
// //                 <li>
// //                   Lead the planning and execution of Viscadia’s next phase of
// //                   organizational growth, with a focus on scaling the Integrated
// //                   Insights team and enhancing operational effectiveness.
// //                 </li>
// //                 <li>
// //                   Drive innovation by spearheading the development and
// //                   enhancement of services and offerings—expanding Viscadia’s
// //                   capabilities to meet evolving client needs and strengthen our
// //                   market position.
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="bg-[#F1F0F1]">
// //         <div className="max-w-[1200px] mx-auto py-12 px-6">
// //           <div className="text-center mb-10">
// //             <img
// //               src="/careers/Qualifcation.png"
// //               alt="Roles Icon"
// //               className="mx-auto mb-4"
// //             />
// //             <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-2xl uppercase ">
// //               Qualifications
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-9 text-left RolesandResponsibilities leading-relaxed">
// //             <div className="space-y-8">
// //               <ul className="list-disc text-[#676767] font-light  space-y-2 text-base">
// //                 <li>
// //                   Functional Expertise: Proven track record in the Pharma &
// //                   Biotech industry, with strong familiarity across a range of
// //                   structured and unstructured business challenges.
// //                 </li>
// //                 <li>
// //                   Subject Matter Knowledge: Deep expertise in qualitative and
// //                   quantitative market research, secondary data analytics, and
// //                   forecasting; experience collaborating on or developing
// //                   forecasts for Pharma & Biotech assets is strongly preferred.
// //                 </li>
// //                 <li>
// //                   Consulting Background: Strong consulting foundation with a
// //                   focus on problem-solving, value creation, and delivering
// //                   actionable insights tailored to client needs.
// //                 </li>
// //                 <li>
// //                   Team Leadership: Experience managing and mentoring
// //                   high-performing teams, with a commitment to professional
// //                   development and team culture.
// //                 </li>
// //                 <li>
// //                   Project Delivery: Successfully led multiple client engagements
// //                   from start to finish, demonstrating excellence in quality,
// //                   resource planning, and client relationship management.
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="space-y-8">
// //               <ul className="list-disc text-[#676767] font-light  space-y-2 text-base">
// //                 <li>
// //                   Business Development: History of expanding client
// //                   relationships and generating new business opportunities,
// //                   including prospecting, pitching, and account growth.
// //                 </li>
// //                 <li>
// //                   Global Delivery Model Exposure: Familiarity with hybrid
// //                   onsite-offshore delivery models and experience managing
// //                   cross-border collaboration.
// //                 </li>
// //                 <li>
// //                   Tactical Acumen: Working knowledge of pharmaceutical datasets,
// //                   audits, and emerging trends in patient-level data is a plus.
// //                 </li>
// //                 <li>
// //                   Professional Experience: 14+ years in consulting, advisory, or
// //                   service delivery roles within life sciences or related
// //                   sectors.
// //                 </li>
// //                 <li>
// //                   Education: Advanced degree preferred, such as an MBA or PhD
// //                   from a top-tier institution or equivalent.
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="max-w-[1200px] mx-auto py-12 px-6">
// //         <div className="text-center mb-10">
// //           <img
// //             src="/careers/Technical-Expertise.png"
// //             alt="Roles Icon"
// //             className="mx-auto mb-7"
// //           />
// //           <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
// //             <p>Key Skills</p>
// //           </h2>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-9 text-left text-[#333] leading-relaxed">
// //           {/* Left Column */}
// //           <div className="space-y-8">
// //             <ul className="list-disc text-[#676767] font-light  space-y-1 text-base">
// //               <li>
// //                 Uncompromising integrity, strong work ethic, and intrinsic
// //                 motivation.
// //               </li>
// //               <li>
// //                 Exceptional attention to detail, with a commitment to delivering
// //                 high-quality work.
// //               </li>
// //               <li>
// //                 Strong written and verbal communication skills; able to simplify
// //                 complex topics into clear, structured, and compelling messages.
// //               </li>
// //               <li>
// //                 Ability to align personal goals with organizational objectives
// //                 to create mutually beneficial outcomes.
// //               </li>
// //               <li>
// //                 Comfortable operating in dynamic, fast-paced environments with
// //                 the ability to juggle multiple priorities.
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Right Column */}
// //           <div className="space-y-8">
// //             <ul className="list-disc text-[#676767] font-light  space-y-1 text-base">
// //               <li>
// //                 Proactive mindset with a strong desire to contribute value to
// //                 both clients and team members.
// //               </li>
// //               <li>
// //                 Skilled at building trust and fostering productive relationships
// //                 with internal teams and external stakeholders.
// //               </li>
// //               <li>
// //                 Passionate about team-building and committed to mentoring and
// //                 developing talent.
// //               </li>
// //               <li>
// //                 Forward-thinking, with a drive to innovate and play a role in
// //                 transformative change across projects or organizations.
// //               </li>
// //               <li>
// //                 Willingness to travel globally for client engagements or
// //                 internal collaboration, as needed.
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Contact Form */}
// //       <div className="Contact Information">
// //         <div className="py-8 px-4 sm:px-6 lg:px-8">
// //           <div className="max-w-6xl mx-auto">
// //             <div className="p-4">
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
// //                 <div className="space-y-6">
// //                   <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
// //                     CONTACT <br /> INFORMATION
// //                   </h1>
// //                   <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
// //                     If you think you are the right person for this job please{" "}
// //                     <br />
// //                     send us your name, contact information and a copy of <br />{" "}
// //                     your resumé.
// //                   </p>
// //                 </div>

// //                 <form onSubmit={handleSubmit}>
// //                   {success && (
// //                     <p className="bg-[#DFF0D8] text-[#3C763D] p-3 text-sm rounded">
// //                       {success}
// //                     </p>
// //                   )}
// //                   {error && (
// //                     <p className="bg-[#f2DEDE] text-[#B94A48] font-light p-3 text-sm rounded">
// //                       {error}
// //                     </p>
// //                   )}
// //                   <div className="space-y-4">
// //                     {/* Name & Email */}
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// //                       <div>
// //                         <input
// //                           type="text"
// //                           name="name"
// //                           placeholder="Name*"
// //                           value={formData.name}
// //                           onChange={handleInputChange}
// //                           className="w-full bg-transparent border-2   border-[#717073] px-4 py-[15px] text-[12px]"
// //                         />
// //                         {error && (
// //                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
// //                             Enter your name.
// //                           </p>
// //                         )}
// //                         {error && (
// //                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
// //                             {error.name}
// //                           </p>
// //                         )}
// //                         {errors && (
// //                           <p className="text-[#BD302b] font-medium pt-3 text-[12px]">
// //                             {errors.name[0]}
// //                           </p>
// //                         )}
// //                       </div>
// //                       <div>
// //                         <input
// //                           type="email"
// //                           name="email"
// //                           placeholder="Email*"
// //                           value={formData.email}
// //                           onChange={handleInputChange}
// //                           className="w-full bg-transparent border-2 border-[#717073] px-4 py-[15px] text-[12px]"
// //                         />
// //                         {error && (
// //                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
// //                             Enter your email address.
// //                           </p>
// //                         )}
// //                         {error && (
// //                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
// //                             {error.email}
// //                           </p>
// //                         )}
// //                       </div>
// //                     </div>

// //                     {/* Message */}
// //                     <textarea
// //                       name="message"
// //                       placeholder="Message"
// //                       rows={5}
// //                       value={formData.message}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
// //                     />

// //                     {/* Contact & Resume */}
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// //                       <input
// //                         type="tel"
// //                         name="contactNumber"
// //                         placeholder="Contact Number*"
// //                         value={formData.contactNumber}
// //                         onChange={handleInputChange}
// //                         className="w-full px-4 py-[15px] border-2 border-[#717073] text-[12px]"
// //                       />

// //                       {/* Resume Upload */}
// //                       <div className="w-full z-80 max-w-md mx-auto">
// //                         <input
// //                           type="file"
// //                           id="resume-upload"
// //                           name="resume"
// //                           accept=".pdf,.doc,.docx"
// //                           onChange={handleFileChange}
// //                           className="hidden"
// //                         />

// //                         <label
// //                           htmlFor="resume-upload"
// //                           className={`w-full h-13 border-2 border-dashed transition-all duration-200 ${
// //                             isFile(formData.resume)
// //                               ? "border-green-500 bg-green-50"
// //                               : "border-gray-400 bg-white hover:bg-gray-50"
// //                           } rounded-md flex flex-col items-center justify-center cursor-pointer p-3`}
// //                         >
// //                           <Upload
// //                             size={18}
// //                             className={`${
// //                               isFile(formData.resume)
// //                                 ? "text-green-500"
// //                                 : "text-gray-700"
// //                             } mb-1`}
// //                           />
// //                           <span className="text-xs text-gray-600">
// //                             {isFile(formData.resume)
// //                               ? `Selected: ${formData.resume.name}`
// //                               : "Click to Upload Résumé"}
// //                           </span>
// //                         </label>

// //                         {/* Show link if resume uploaded successfully */}
// //                         {formData.resumeUrl && (
// //                           <div className="mt-2 text-center">
// //                             <a
// //                               href={formData.resumeUrl}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="text-blue-600 text-sm underline"
// //                             >
// //                               View Uploaded Résumé
// //                             </a>
// //                           </div>
// //                         )}

// //                         {/* Optional error message */}
// //                         {error && (
// //                           <p className="mt-1 text-red-600 text-xs text-center">
// //                             {error}
// //                           </p>
// //                         )}
// //                       </div>
// //                     </div>

// //                     {/* Current Employer */}
// //                     <input
// //                       type="text"
// //                       name="currentEmployer"
// //                       placeholder="Current Employer"
// //                       value={formData.currentEmployer}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
// //                     />

// //                     {/* School & Graduation */}
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                       <div>
// //                         <input
// //                           type="text"
// //                           name="school"
// //                           placeholder="Undergraduate / Graduate School*"
// //                           value={formData.school}
// //                           onChange={handleInputChange}
// //                           className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
// //                         />
// //                         {error && (
// //                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
// //                             Enter a value for this field.
// //                           </p>
// //                         )}
// //                       </div>
// //                       <div>
// //                         <input
// //                           type="text"
// //                           name="graduation_year"
// //                           placeholder="Year of Graduation*"
// //                           value={formData.graduation_year}
// //                           onChange={handleInputChange}
// //                           className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
// //                         />
// //                         {error && (
// //                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
// //                             Enter a value for this field.
// //                           </p>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                   {/* Captcha */}
// //                   <div className="col-span-2 mt-5 relative w-max">
// //                     <div
// //                       className={
// //                         captchaError
// //                           ? "w-[304px] h-[78px] border border-[#BD3028] rounded-md"
// //                           : "w-[304px] h-[78px]"
// //                       }
// //                     >
// //                       <ReCAPTCHA
// //                         sitekey="6LdPQM4rAAAAAEUTL_n_6rLyV_OiDkZolZh5FaXn"
// //                         onChange={() => {
// //                           setVerified(true);
// //                           setCaptchaError(false); // remove red border once ticked
// //                         }}
// //                       />
// //                     </div>
// //                   </div>

// //                   {captchaError && (
// //                     <p className="text-[#444444] font-medium pt-3 text-[12px]">
// //                       The captcha is missing from this form
// //                     </p>
// //                   )}

// //                   {/* Submit */}
// //                   <div className="frm_submit flex justify-end">
// //                     <button
// //                       className="frm_button_submit cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit flex items-center justify-center"
// //                       type="submit"
// //                       disabled={loading}
// //                     >
// //                       {loading ? (
// //                         <div
// //                           role="status"
// //                           className="flex px-[20px] items-center justify-center"
// //                         >
// //                           <svg
// //                             aria-hidden="true"
// //                             className="w-6 h-6 spin-slow"
// //                             viewBox="0 0 100 101"
// //                             xmlns="http://www.w3.org/2000/svg"
// //                           >
// //                             <path
// //                               d="M100 50.5908C100 78.2051 77.6142
// //                   100.591 50 100.591C22.3858 100.591
// //                   0 78.2051 0 50.5908C0 22.9766 22.3858
// //                   0.59082 50 0.59082C77.6142 0.59082
// //                   100 22.9766 100 50.5908ZM9.08144
// //                   50.5908C9.08144 73.1895 27.4013
// //                   91.5094 50 91.5094C72.5987 91.5094
// //                   90.9186 73.1895 90.9186
// //                   50.5908C90.9186 27.9921 72.5987
// //                   9.67226 50 9.67226C27.4013
// //                   9.67226 9.08144 27.9921 9.08144
// //                   50.5908Z"
// //                               fill="transparent"
// //                             />
// //                             <path
// //                               d="M93.9676 39.0409C96.393
// //                   38.4038 97.8624 35.9116
// //                   97.0079 33.5539C95.2932
// //                   28.8227 92.871 24.3692
// //                   89.8167 20.348C85.8452
// //                   15.1192 80.8826 10.7238
// //                   75.2124 7.41289C69.5422
// //                   4.10194 63.2754 1.94025
// //                   56.7698 1.05124C51.7666
// //                   0.367541 46.6976 0.446843
// //                   41.7345 1.27873C39.2613
// //                   1.69328 37.813 4.19778
// //                   38.4501 6.62326C39.0873
// //                   9.04874 41.5694 10.4717
// //                   44.0505 10.1071C47.8511
// //                   9.54855 51.7191 9.52689
// //                   55.5402 10.0491C60.8642
// //                   10.7766 65.9928 12.5457
// //                   70.6331 15.2552C75.2735
// //                   17.9648 79.3347 21.5619
// //                   82.5849 25.841C84.9175
// //                   28.9121 86.7997 32.2913
// //                   88.1811 35.8758C89.083
// //                   38.2158 91.5421 39.6781
// //                   93.9676 39.0409Z"
// //                               fill="white"
// //                             />
// //                           </svg>
// //                         </div>
// //                       ) : (
// //                         "Submit"
// //                       )}
// //                     </button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default page;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Upload } from "lucide-react";
// import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
// const isFile = (val) => typeof File !== "undefined" && val instanceof File;
// import { useParams } from "next/navigation";
// const page = () => {
//   const [loading, setLoading] = useState(false);
//   const [captchaError, setCaptchaError] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [verified, setVerified] = useState(false);
//   const [errors, setErrors] = useState("");
//   const [principal, setPrincipal] = useState(null);
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     resume: "",
//     name: "",
//     email: "",
//     message: "",
//     contactNumber: "",
//     currentEmployer: "",
//     school: "",
//     graduation_year: "",
//   });

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "https://api.viscadia.com/api/v1/career"
//   //       );
//   //       setPrincipal(response.data.data[0]);
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.viscadia.com/api/v1/career/${id}`
//         );
//         setPrincipal(response.data.data);
//       } catch (err) {
//         console.log("Error fetching career data:", err);
//       }
//     };

//     if (id) fetchData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = async (e) => {
//     if (!e.target.files.length) return;
//     const selectedFile = e.target.files[0];
//     setFormData((prev) => ({ ...prev, resume: selectedFile }));
//     const data = new FormData();
//     data.append("file", selectedFile);

//     try {
//       const uploadResponse = await axios.post(
//         "https://api.viscadia.com/api/upload/single",
//         data,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       setFormData((prev) => ({
//         ...prev,
//         resumeUrl: uploadResponse.data.data.url,
//       }));
//     } catch (error) {
//       console.error("File upload failed:", error);
//       setError("File upload failed. Please try again.");
//       setFormData((prev) => ({ ...prev, resume: "" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");
//     setCaptchaError(false);

//     if (!verified) {
//       setCaptchaError(true);
//       setLoading(false);
//       return;
//     }

//     const requiredFields = [
//       "name",
//       "email",
//       "message",
//       "contactNumber",
//       "currentEmployer",
//       "school",
//       "graduation_year",
//       "resumeUrl",
//     ];

//     const emptyFields = requiredFields.filter(
//       (field) => !formData[field] || formData[field].toString().trim() === ""
//     );

//     if (emptyFields.length > 0) {
//       setError("Please fill in all required fields before submitting.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//         contactNumber: formData.contactNumber,
//         currentEmployer: formData.currentEmployer,
//         school: formData.school,
//         graduation_year: formData.graduation_year,
//         resume: formData.resumeUrl,
//       };

//       await axios.post(
//         "https://api.viscadia.com/api/forms/career-application",
//         payload,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       setSuccess("Your responses were successfully submitted. Thank you!");
//       setFormData({
//         resume: "",
//         resumeUrl: "",
//         name: "",
//         email: "",
//         message: "",
//         contactNumber: "",
//         currentEmployer: "",
//         school: "",
//         graduation_year: "",
//       });
//       setVerified(false);
//       setCaptchaError(false);
//     } catch (err) {
//       console.error("Submit failed:", err.response?.data || err.message);
//       if (err.response?.data?.errors) {
//         setErrors(err.response.data.errors);
//       } else if (err.response?.data?.error) {
//         setError(err.response.data.error);
//       } else {
//         setError(
//           "Please correct any issues noted below and resubmit the form."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!principal) return null;

//   return (
//     <>
//       <div className="mt-[80px] w-full h-[307px] bg-[#BD3023] flex items-center">
//         <div className="text-left pt-[60px] sm:pt-[80px] px-6 sm:px-24 space-y-4">
//           <h2 className="text-[#C9C9C9] sm:text-white text-2xl sm:text-3xl font-normal sm:font-light tracking-wide">
//             {principal.heading}
//           </h2>
//           <p className="text-white font-light tracking-wide max-w-3xl text-2xl sm:text-4xl md:text-5xl">
//             Working together toward shared success
//           </p>
//         </div>
//       </div>

//       <div className="text-center bg-[#f1f0f1] px-6 sm:px-24 pt-15 pb-15">
//         <h2 className="text-[#BD302B] text-xl sm:text-[38px] font-bold">
//           {principal.sub_heading}
//         </h2>
//         <p className="text-[#63666A] font-light text-base mb-[30px]">
//           {principal.country}
//         </p>
//         <div className="wpb_wrapper text-[#63666A] font-light text-[14px] space-y-3 text-left">
//           <p>{principal.section_two_sub_heading}</p>
//         </div>
//       </div>

//       {principal.responsibilities_status && (
//         <div className="max-w-[1200px] mx-auto py-12 px-6">
//           <div className="text-center mb-10">
//             <img
//               src="/careers/Roles.png"
//               alt="Roles Icon"
//               className="mx-auto mb-4"
//             />
//             <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
//               Roles and Responsibilities
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 text-left text-[#333] leading-relaxed">
//             {principal.responsibilities.map((item, idx) => (
//               <div key={idx} className="space-y-8">
//                 <h3 className="text-[#444444] tracking-wide font-medium text-[18px] mb-3">
//                   {item.subHeading}
//                 </h3>
//                 <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
//                   {item.keyPoints.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {principal.qualifications_status && (
//         <div className="bg-[#F1F0F1]">
//           <div className="max-w-[1200px] mx-auto py-12 px-6">
//             <div className="text-center mb-10">
//               <img
//                 src="/careers/Qualifcation.png"
//                 alt="Roles Icon"
//                 className="mx-auto mb-4"
//               />
//               <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-2xl uppercase">
//                 Qualifications
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-9 text-left leading-relaxed">
//               {principal.qualifications.map((item, idx) => (
//                 <div key={idx} className="space-y-8">
//                   <h3 className="font-medium text-[#444444] text-[16px] mb-2">
//                     {item.subHeading}
//                   </h3>
//                   <ul className="list-disc text-[#676767] font-light space-y-2 text-base">
//                     {item.keyPoints.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {principal.key_skills_status && (
//         <div className="max-w-[1200px] mx-auto py-12 px-6">
//           <div className="text-center mb-10">
//             <img
//               src="/careers/Technical-Expertise.png"
//               alt="Roles Icon"
//               className="mx-auto mb-7"
//             />
//             <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
//               Key Skills
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-9 text-left text-[#333] leading-relaxed">
//             {principal.key_skills.map((item, idx) => (
//               <div key={idx} className="space-y-8">
//                 <h3 className="font-medium text-[#444444] text-[16px] mb-2">
//                   {item.subHeading}
//                 </h3>
//                 <ul className="list-disc text-[#676767] font-light space-y-1 text-base">
//                   {item.keyPoints.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="Contact Information">
//         <div className="py-8 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="p-4">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//                 <div className="space-y-6">
//                   <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
//                     CONTACT <br /> INFORMATION
//                   </h1>
//                   <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
//                     If you think you are the right person for this job please{" "}
//                     <br />
//                     send us your name, contact information and a copy of <br />{" "}
//                     your resumé.
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                   {success && (
//                     <p className="bg-[#DFF0D8] text-[#3C763D] p-3 text-sm rounded">
//                       {success}
//                     </p>
//                   )}
//                   {error && (
//                     <p className="bg-[#f2DEDE] text-[#B94A48] font-light p-3 text-sm rounded">
//                       {error}
//                     </p>
//                   )}
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       <div>
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Name*"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           className="w-full bg-transparent border-2 border-[#717073] px-4 py-[15px] text-[12px]"
//                         />
//                         {error && (
//                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
//                             Enter your name.
//                           </p>
//                         )}
//                         {errors && (
//                           <p className="text-[#BD302b] font-medium pt-3 text-[12px]">
//                             {errors.name?.[0]}
//                           </p>
//                         )}
//                       </div>
//                       <div>
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Email*"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           className="w-full bg-transparent border-2 border-[#717073] px-4 py-[15px] text-[12px]"
//                         />
//                         {error && (
//                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
//                             Enter your email address.
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <textarea
//                       name="message"
//                       placeholder="Message"
//                       rows={5}
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
//                     />

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       <input
//                         type="tel"
//                         name="contactNumber"
//                         placeholder="Contact Number*"
//                         value={formData.contactNumber}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-[15px] border-2 border-[#717073] text-[12px]"
//                       />

//                       <div className="w-full z-80 max-w-md mx-auto">
//                         <input
//                           type="file"
//                           id="resume-upload"
//                           name="resume"
//                           accept=".pdf,.doc,.docx"
//                           onChange={handleFileChange}
//                           className="hidden"
//                         />
//                         <label
//                           htmlFor="resume-upload"
//                           className={`w-full h-13 border-2 border-dashed ${
//                             isFile(formData.resume)
//                               ? "border-[#717073] bg-green-50"
//                               : "border-[#717073] bg-white"
//                           } rounded-[3px] flex items-center justify-center cursor-pointer`}
//                         >
//                           <div className="flex flex-col items-center  space-y-1">
//                             <Upload
//                               size={16}
//                               className={
//                                 isFile(formData.resume)
//                                   ? "text-green-500"
//                                   : "text-black"
//                               }
//                             />
//                             <span className="text-[10px] text-gray-500">
//                               {isFile(formData.resume)
//                                 ? `Selected: ${formData.resume.name}`
//                                 : "Upload Résumé"}
//                             </span>
//                           </div>
//                         </label>
//                       </div>
//                     </div>

//                     <input
//                       type="text"
//                       name="currentEmployer"
//                       placeholder="Current Employer"
//                       value={formData.currentEmployer}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
//                     />

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <input
//                           type="text"
//                           name="school"
//                           placeholder="Undergraduate / Graduate School*"
//                           value={formData.school}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
//                         />
//                         {error && (
//                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
//                             Enter a value for this field.
//                           </p>
//                         )}
//                       </div>
//                       <div>
//                         <input
//                           type="text"
//                           name="graduation_year"
//                           placeholder="Year of Graduation*"
//                           value={formData.graduation_year}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
//                         />
//                         {error && (
//                           <p className="text-[#444444] font-medium pt-3 text-[12px]">
//                             Enter a value for this field.
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-2 mt-5 relative w-max">
//                     <div
//                       className={
//                         captchaError
//                           ? "w-[304px] h-[78px] border border-[#BD3028] rounded-md"
//                           : "w-[304px] h-[78px]"
//                       }
//                     >
//                       <ReCAPTCHA
//                         sitekey="6LdPQM4rAAAAAEUTL_n_6rLyV_OiDkZolZh5FaXn"
//                         onChange={() => {
//                           setVerified(true);
//                           setCaptchaError(false);
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {captchaError && (
//                     <p className="text-[#444444] font-medium pt-3 text-[12px]">
//                       The captcha is missing from this form
//                     </p>
//                   )}

//                   <div className="frm_submit flex justify-end">
//                     <button
//                       className="frm_button_submit cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit flex items-center justify-center"
//                       type="submit"
//                       disabled={loading}
//                     >
//                       {loading ? (
//                         <div
//                           role="status"
//                           className="flex px-[20px] items-center justify-center"
//                         >
//                           <svg
//                             aria-hidden="true"
//                             className="w-6 h-6 spin-slow"
//                             viewBox="0 0 100 101"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M100 50.5908C100 78.2051 77.6142
//                   100.591 50 100.591C22.3858 100.591
//                   0 78.2051 0 50.5908C0 22.9766 22.3858
//                   0.59082 50 0.59082C77.6142 0.59082
//                   100 22.9766 100 50.5908ZM9.08144
//                   50.5908C9.08144 73.1895 27.4013
//                   91.5094 50 91.5094C72.5987 91.5094
//                   90.9186 73.1895 90.9186
//                   50.5908C90.9186 27.9921 72.5987
//                   9.67226 50 9.67226C27.4013
//                   9.67226 9.08144 27.9921 9.08144
//                   50.5908Z"
//                               fill="transparent"
//                             />
//                             <path
//                               d="M93.9676 39.0409C96.393
//                   38.4038 97.8624 35.9116
//                   97.0079 33.5539C95.2932
//                   28.8227 92.871 24.3692
//                   89.8167 20.348C85.8452
//                   15.1192 80.8826 10.7238
//                   75.2124 7.41289C69.5422
//                   4.10194 63.2754 1.94025
//                   56.7698 1.05124C51.7666
//                   0.367541 46.6976 0.446843
//                   41.7345 1.27873C39.2613
//                   1.69328 37.813 4.19778
//                   38.4501 6.62326C39.0873
//                   9.04874 41.5694 10.4717
//                   44.0505 10.1071C47.8511
//                   9.54855 51.7191 9.52689
//                   55.5402 10.0491C60.8642
//                   10.7766 65.9928 12.5457
//                   70.6331 15.2552C75.2735
//                   17.9648 79.3347 21.5619
//                   82.5849 25.841C84.9175
//                   28.9121 86.7997 32.2913
//                   88.1811 35.8758C89.083
//                   38.2158 91.5421 39.6781
//                   93.9676 39.0409Z"
//                               fill="white"
//                             />
//                           </svg>
//                         </div>
//                       ) : (
//                         "Submit"
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

"use client";
import React, { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
const isFile = (val) => typeof File !== "undefined" && val instanceof File;
import { useParams } from "next/navigation";
const page = () => {
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verified, setVerified] = useState(false);
  const [errors, setErrors] = useState("");
  const [principal, setPrincipal] = useState(null);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    resume: "",
    name: "",
    email: "",
    message: "",
    contactNumber: "",
    currentEmployer: "",
    school: "",
    graduation_year: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.viscadia.com/api/v1/career"
  //       );
  //       setPrincipal(response.data.data[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.viscadia.com/api/v1/career/${id}`
        );
        setPrincipal(response.data.data);
      } catch (err) {
        console.log("Error fetching career data:", err);
      }
    };

    if (id) fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    if (!e.target.files.length) return;
    const selectedFile = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: selectedFile }));
    const data = new FormData();
    data.append("file", selectedFile);

    try {
      const uploadResponse = await axios.post(
        "https://api.viscadia.com/api/upload/single",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setFormData((prev) => ({
        ...prev,
        resumeUrl: uploadResponse.data.data.url,
      }));
    } catch (error) {
      console.error("File upload failed:", error);
      setError("File upload failed. Please try again.");
      setFormData((prev) => ({ ...prev, resume: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setCaptchaError(false);

    if (!verified) {
      setCaptchaError(true);
      setLoading(false);
      return;
    }

    const requiredFields = [
      "name",
      "email",
      "message",
      "contactNumber",
      "currentEmployer",
      "school",
      "graduation_year",
      "resumeUrl",
    ];

    const emptyFields = requiredFields.filter(
      (field) => !formData[field] || formData[field].toString().trim() === ""
    );

    if (emptyFields.length > 0) {
      setError("Please fill in all required fields before submitting.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        id,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        contactNumber: formData.contactNumber,
        currentEmployer: formData.currentEmployer,
        school: formData.school,
        graduation_year: formData.graduation_year,
        resume: formData.resumeUrl,
      };

      await axios.post(
        "https://api.viscadia.com/api/forms/career-application",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccess("Your responses were successfully submitted. Thank you!");
      setFormData({
        resume: "",
        resumeUrl: "",
        name: "",
        email: "",
        message: "",
        contactNumber: "",
        currentEmployer: "",
        school: "",
        graduation_year: "",
      });
      setVerified(false);
      setCaptchaError(false);
    } catch (err) {
      console.error("Submit failed:", err.response?.data || err.message);
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError(
          "Please correct any issues noted below and resubmit the form."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="mt-[80px] w-full h-[307px] bg-[#BD3023] flex items-center">
        <div className="text-left px-6  sm:px-24 space-y-4">
          <h2 className="text-[#C9C9C9] sm:text-white text-2xl sm:text-3xl font-normal sm:font-light tracking-wide">
            Careers
          </h2>
          <p className="text-white font-light tracking-wide max-w-3xl text-2xl sm:text-4xl md:text-5xl">
            Working together toward shared success
          </p>
        </div>
      </div>
      <div className="text-center bg-[#f1f0f1] px-6 sm:px-24 pt-15 pb-15">
        <h2 className="text-[#BD302B] text-[38px] font-bold">
          Principal, Integrated Insights
        </h2>
        <p className="text-[#63666A] font-light text-base mb-[30px]">
          United States
        </p>
        <div className="wpb_wrapper text-[#63666A] font-light text-[14px] space-y-3 text-left">
          <p>
            Viscadia is a consulting firm whose mission is to empower life
            sciences companies with clarity and confidence through forecasting.
            With teams in the United States, Switzerland, and India, we are
            well- equipped to provide the support global life science companies
            need to make decisions quickly and with confidence. We are deeply
            committed to a vision of shared growth and success for our clients,
            colleagues, and communities.
          </p>
          <p>
            Integrated insights – encompassing qualitative and quantitative
            market research as well as secondary analytics – form the foundation
            of successful life sciences forecasting. At Viscadia, our insights
            are known for being “designed with the end in mind,” tailored to
            inform and shape forecast models that deliver clarity and
            confidence. We are seeking a Principal to lead, manage, and grow our
            Integrated Insights practice, with responsibility for service
            delivery, team leadership, and business development.
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
                Strategic Leadership
              </h3>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
                <li>
                  Lead and grow the Integrated Insights practice, with a focus
                  on business development & licensing, pipeline, and on-market
                  product forecasting.
                </li>
                <li>
                  Serve as a senior thought partner to clients, providing
                  strategic guidance and insight.
                </li>
                <li>
                  Drive engagement design, pricing, staffing, and execution
                  across multiple projects.
                </li>
                <li>
                  Develop and retain top talent; foster a high-performing,
                  inclusive team culture.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 mt-3">
            <div>
              <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
                Revenue Growth
              </h3>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y-1 text-base">
                <li>
                  Proactively identify and pursue growth opportunities within
                  existing client accounts by engaging in strategic
                  conversations, uncovering emerging needs, and positioning
                  Viscadia’s expertise to support new initiatives and add
                  continued value.
                </li>
                <li>
                  Set clear goals and performance objectives for managers to
                  effectively manage, expand, and deepen client relationships,
                  ensuring sustained account growth and long-term success.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 text-left RolesandResponsibilities leading-relaxed">
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
                Client Relationships
              </h3>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y- text-base">
                <li>
                  Actively build, manage, and expand client relationships by
                  identifying key stakeholders, developing a deep understanding
                  of their business challenges and unmet needs, and providing
                  thought leadership that uncovers new opportunities, mitigates
                  potential risks, and adds measurable value to their strategic
                  and operational priorities.
                </li>
                <li>
                  Lead the development of thoughtful, tailored, and high-impact
                  responses to client requests—including Requests for Proposals
                  (RFPs), scopes of work, and ad hoc inquiries—by crafting
                  compelling narratives, clearly articulating our capabilities,
                  and presenting solutions that align with client objectives.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 mt-8">
            <div>
              <h3 className="text-[#444444] RolesandResponsibilities tracking-wide font-medium text-[18px] mb-3">
                Corporate Growth
              </h3>
              <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
                <li>
                  Lead the planning and execution of Viscadia’s next phase of
                  organizational growth, with a focus on scaling the Integrated
                  Insights team and enhancing operational effectiveness.
                </li>
                <li>
                  Drive innovation by spearheading the development and
                  enhancement of services and offerings—expanding Viscadia’s
                  capabilities to meet evolving client needs and strengthen our
                  market position.
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
              <ul className="list-disc text-[#676767] font-light  space-y-2 text-base">
                <li>
                  Functional Expertise: Proven track record in the Pharma &
                  Biotech industry, with strong familiarity across a range of
                  structured and unstructured business challenges.
                </li>
                <li>
                  Subject Matter Knowledge: Deep expertise in qualitative and
                  quantitative market research, secondary data analytics, and
                  forecasting; experience collaborating on or developing
                  forecasts for Pharma & Biotech assets is strongly preferred.
                </li>
                <li>
                  Consulting Background: Strong consulting foundation with a
                  focus on problem-solving, value creation, and delivering
                  actionable insights tailored to client needs.
                </li>
                <li>
                  Team Leadership: Experience managing and mentoring
                  high-performing teams, with a commitment to professional
                  development and team culture.
                </li>
                <li>
                  Project Delivery: Successfully led multiple client engagements
                  from start to finish, demonstrating excellence in quality,
                  resource planning, and client relationship management.
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <ul className="list-disc text-[#676767] font-light  space-y-2 text-base">
                <li>
                  Business Development: History of expanding client
                  relationships and generating new business opportunities,
                  including prospecting, pitching, and account growth.
                </li>
                <li>
                  Global Delivery Model Exposure: Familiarity with hybrid
                  onsite-offshore delivery models and experience managing
                  cross-border collaboration.
                </li>
                <li>
                  Tactical Acumen: Working knowledge of pharmaceutical datasets,
                  audits, and emerging trends in patient-level data is a plus.
                </li>
                <li>
                  Professional Experience: 14+ years in consulting, advisory, or
                  service delivery roles within life sciences or related
                  sectors.
                </li>
                <li>
                  Education: Advanced degree preferred, such as an MBA or PhD
                  from a top-tier institution or equivalent.
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
            <p>Key Skills</p>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-9 text-left text-[#333] leading-relaxed">
          {/* Left Column */}
          <div className="space-y-8">
            <ul className="list-disc text-[#676767] font-light  space-y-1 text-base">
              <li>
                Uncompromising integrity, strong work ethic, and intrinsic
                motivation.
              </li>
              <li>
                Exceptional attention to detail, with a commitment to delivering
                high-quality work.
              </li>
              <li>
                Strong written and verbal communication skills; able to simplify
                complex topics into clear, structured, and compelling messages.
              </li>
              <li>
                Ability to align personal goals with organizational objectives
                to create mutually beneficial outcomes.
              </li>
              <li>
                Comfortable operating in dynamic, fast-paced environments with
                the ability to juggle multiple priorities.
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ul className="list-disc text-[#676767] font-light  space-y-1 text-base">
              <li>
                Proactive mindset with a strong desire to contribute value to
                both clients and team members.
              </li>
              <li>
                Skilled at building trust and fostering productive relationships
                with internal teams and external stakeholders.
              </li>
              <li>
                Passionate about team-building and committed to mentoring and
                developing talent.
              </li>
              <li>
                Forward-thinking, with a drive to innovate and play a role in
                transformative change across projects or organizations.
              </li>
              <li>
                Willingness to travel globally for client engagements or
                internal collaboration, as needed.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="Contact Information">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                    CONTACT <br /> INFORMATION
                  </h1>
                  <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                    If you think you are the right person for this job please{" "}
                    <br />
                    send us your name, contact information and a copy of <br />{" "}
                    your resumé.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {success && (
                    <p className="bg-[#DFF0D8] text-[#3C763D] p-3 text-sm rounded">
                      {success}
                    </p>
                  )}
                  {error && (
                    <p className="bg-[#f2DEDE] text-[#B94A48] font-light p-3 text-sm rounded">
                      {error}
                    </p>
                  )}
                  <div className="space-y-4">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-2   border-[#717073] px-4 py-[15px] text-[12px]"
                        />
                        {error && (
                          <p className="text-[#444444] font-medium pt-3 text-[12px]">
                            Enter your name.
                          </p>
                        )}
                        {error && (
                          <p className="text-[#444444] font-medium pt-3 text-[12px]">
                            {error.name}
                          </p>
                        )}
                        {errors && (
                          <p className="text-[#BD302b] font-medium pt-3 text-[12px]">
                            {errors.name[0]}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-2 border-[#717073] px-4 py-[15px] text-[12px]"
                        />
                        {error && (
                          <p className="text-[#444444] font-medium pt-3 text-[12px]">
                            Enter your email address.
                          </p>
                        )}
                        {error && (
                          <p className="text-[#444444] font-medium pt-3 text-[12px]">
                            {error.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
                    />

                    {/* Contact & Resume */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Contact Number*"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-[15px] border-2 border-[#717073] text-[12px]"
                      />

                      {/* Resume Upload */}
                      <div className="w-full z-80 max-w-md mx-auto">
                        <input
                          type="file"
                          id="resume-upload"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="resume-upload"
                          className={`w-full h-13 border-2 border-dashed ${
                            isFile(formData.resume)
                              ? "border-[#717073] bg-green-50"
                              : "border-[#717073] bg-white"
                          } rounded-[3px] flex items-center justify-center cursor-pointer`}
                        >
                          <div className="flex flex-col items-center  space-y-1">
                            <Upload
                              size={16}
                              className={
                                isFile(formData.resume)
                                  ? "text-green-500"
                                  : "text-black"
                              }
                            />
                            <span className="text-[10px] text-gray-500">
                              {isFile(formData.resume)
                                ? `Selected: ${formData.resume.name}`
                                : "Upload Résumé"}
                            </span>

                            {/* {error && (
                                <p className="text-[#444444]  font-medium text-[12px]">
                                  Upload your resume
                                </p>
                              )} */}
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Current Employer */}
                    <input
                      type="text"
                      name="currentEmployer"
                      placeholder="Current Employer"
                      value={formData.currentEmployer}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
                    />

                    {/* School & Graduation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="school"
                          placeholder="Undergraduate / Graduate School*"
                          value={formData.school}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
                        />
                        {error && (
                          <p className="text-[#444444] font-medium pt-3 text-[12px]">
                            Enter a value for this field.
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="graduation_year"
                          placeholder="Year of Graduation*"
                          value={formData.graduation_year}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
                        />
                        {error && (
                          <p className="text-[#444444] font-medium pt-3 text-[12px]">
                            Enter a value for this field.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Captcha */}
                  <div className="col-span-2 mt-5 relative w-max">
                    <div
                      className={
                        captchaError
                          ? "w-[304px] h-[78px] border border-[#BD3028] rounded-md"
                          : "w-[304px] h-[78px]"
                      }
                    >
                      <ReCAPTCHA
                    sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                        onChange={() => {
                          setVerified(true);
                          setCaptchaError(false); // remove red border once ticked
                        }}
                      />
                    </div>
                  </div>

                  {captchaError && (
                    <p className="text-[#444444] font-medium pt-3 text-[12px]">
                      The captcha is missing from this form
                    </p>
                  )}

                  {/* Submit */}
                  <div className="frm_submit flex justify-end">
                    <button
                      className="frm_button_submit cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit flex items-center justify-center"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <div
                          role="status"
                          className="flex px-[20px] items-center justify-center"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 spin-slow"
                            viewBox="0 0 100 101"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142
                  100.591 50 100.591C22.3858 100.591
                  0 78.2051 0 50.5908C0 22.9766 22.3858
                  0.59082 50 0.59082C77.6142 0.59082
                  100 22.9766 100 50.5908ZM9.08144
                  50.5908C9.08144 73.1895 27.4013
                  91.5094 50 91.5094C72.5987 91.5094
                  90.9186 73.1895 90.9186
                  50.5908C90.9186 27.9921 72.5987
                  9.67226 50 9.67226C27.4013
                  9.67226 9.08144 27.9921 9.08144
                  50.5908Z"
                              fill="transparent"
                            />
                            <path
                              d="M93.9676 39.0409C96.393
                  38.4038 97.8624 35.9116
                  97.0079 33.5539C95.2932
                  28.8227 92.871 24.3692
                  89.8167 20.348C85.8452
                  15.1192 80.8826 10.7238
                  75.2124 7.41289C69.5422
                  4.10194 63.2754 1.94025
                  56.7698 1.05124C51.7666
                  0.367541 46.6976 0.446843
                  41.7345 1.27873C39.2613
                  1.69328 37.813 4.19778
                  38.4501 6.62326C39.0873
                  9.04874 41.5694 10.4717
                  44.0505 10.1071C47.8511
                  9.54855 51.7191 9.52689
                  55.5402 10.0491C60.8642
                  10.7766 65.9928 12.5457
                  70.6331 15.2552C75.2735
                  17.9648 79.3347 21.5619
                  82.5849 25.841C84.9175
                  28.9121 86.7997 32.2913
                  88.1811 35.8758C89.083
                  38.2158 91.5421 39.6781
                  93.9676 39.0409Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
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
