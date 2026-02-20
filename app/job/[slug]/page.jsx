// mini_contact_correct it

// "use client";
// import React, { useState, useEffect } from "react";
// import { Upload } from "lucide-react";
// import axios from "axios";

// import ReCAPTCHA from "react-google-recaptcha";
// const isFile = (val) => typeof File !== "undefined" && val instanceof File;
// import { useParams, useRouter } from "next/navigation";
// const page = () => {
//   const [loading, setLoading] = useState(false);
//   const [captchaError, setCaptchaError] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [verified, setVerified] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [principal, setPrincipal] = useState(null);
//   const { slug } = useParams();
//   const id = principal?.id;

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

//   const router = useRouter();

//   useEffect(() => {
//     const fetchSlug = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `https://api.viscadia.com/api/v1/career/${slug}`,
//         );
//         const data = response?.data?.data;
//         if (data?.section_two_sub_heading) {
//           data.section_two_sub_heading = JSON.parse(
//             data.section_two_sub_heading,
//           );
//         }
//         setPrincipal(data);
//       } catch (err) {
//         console.error("Error fetching career slug:", err.message || err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (slug) fetchSlug();
//   }, [slug]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === "graduation_year") {
//       setErrors((prev) => ({ ...prev, graduationYear: null }));
//     }
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
//         { headers: { "Content-Type": "multipart/form-data" } },
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

//   // ── Validate graduation year client-side ──────────────────────────────────
//   const isValidYear = (year) => {
//     const num = Number(year);
//     const currentYear = new Date().getFullYear();
//     return (
//       Number.isInteger(num) && num >= 1900 && num <= currentYear + 10 // allow a few years ahead for upcoming grads
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");
//     setCaptchaError(false);
//     setErrors({});

//     if (!verified) {
//       setCaptchaError(true);
//       setLoading(false);
//       return;
//     }

//     // Client-side graduation year check
//     if (formData.graduation_year && !isValidYear(formData.graduation_year)) {
//       setErrors({ graduationYear: ["Graduation year must be a valid year"] });
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
//       (field) => !formData[field] || formData[field].toString().trim() === "",
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
//         graduationYear: formData.graduation_year,
//         resume: formData.resumeUrl,
//         jobID: id,
//       };
//       console.log("Submitting form data:", payload);
//       await axios.post(
//         "https://api.viscadia.com/api/forms/career-application",
//         payload,
//         { headers: { "Content-Type": "application/json" } },
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
//         // Server returns field-level errors object e.g. { graduationYear: ["..."] }
//         setErrors(err.response.data.errors);
//       } else if (err.response?.data?.error) {
//         setError(err.response.data.error);
//       } else {
//         setError(
//           "Please correct any issues noted below and resubmit the form.",
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading || !principal) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-transparent">
//         <img
//           src="/careers/1488_careeare.gif"
//           alt="Loading..."
//           className="w-16 h-16 bg-transparent"
//         />
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 flex justify-start items-center relative top-[45px] md:top-[65px] text-white">
//         <img
//           src="../homeAssets/corevalue_homebanner.png"
//           className="h-full w-full hidden md:block"
//           alt="Banner"
//         />
//         <img
//           src="../homeAssets/mobile_homebanner.png"
//           className="h-full w-full block md:hidden"
//           alt="Mobile Banner"
//         />
//         <div className="absolute inset-0 flex justify-center md:items-center items-start mt-12 md:mt-0">
//           <div className="w-full max-w-6xl mx-auto md:px-0 px-5 flex justify-start items-center">
//             <div className="leading-[35px] md:leading-tight about_tab_align">
//               <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14">
//                 {"Career"}
//               </h2>
//               <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
//                 {principal.heading}
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#f1f0f1]">
//         <div className="text-center mx-auto md:max-w-6xl sm:px-0 px-5 pt-8 pb-8">
//           <h2 className="text-[#BD302B] text-xl sm:text-[38px] font-semibold">
//             {principal.sub_heading}
//           </h2>

//           <p className="text-[#63666A] font-light text-base mb-[30px]">
//             {principal.country}
//           </p>
//           {principal?.section_two_sub_heading?.map((el, index) => (
//             <div
//               key={index}
//               className="wpb_wrapper lg:px-0 px-0 sm:px-4 text-[#63666A] font-light text-[14px] space-y-3 text-left"
//             >
//               <p className="text-[18px] font-semibold mt-3">{el?.subHeading}</p>
//               <div className="space-y-3 l">
//                 {el?.keyPoints?.map((el, index) => (
//                   <p
//                     key={index}
//                     className="font-light text-[16px] text-[#4E4E4E]"
//                   >
//                     {el}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {[
//         {
//           status: principal.responsibilities_status,
//           data: principal.responsibilities,
//           img: "/careers/Roles.png",
//           title: "Roles and Responsibilities",
//         },
//         {
//           status: principal.qualifications_status,
//           data: principal.qualifications,
//           img: "/careers/Qualifcation.png",
//           title: "Qualifications",
//         },
//         {
//           status: principal.key_skills_status,
//           data: principal.key_skills,
//           img: "/careers/Technical-Expertise.png",
//           title: "Key Skills",
//         },
//         {
//           status: principal.benefits_status,
//           data: principal.benefits,
//           img: "/careers/Benefits.png",
//           title: "Benefits",
//         },
//       ]
//         .filter(
//           (section) =>
//             section.status && section.data && section.data.length > 0,
//         )
//         .map((section, idx) => (
//           <div
//             key={idx}
//             className={`py-8 px-5 ${
//               idx % 2 === 0 ? "bg-white" : "bg-[#F1F0F1]"
//             }`}
//           >
//             <div className="mx-auto md:max-w-6xl sm:px-0 px-0">
//               <div className="text-center mb-10">
//                 <img
//                   src={section.img}
//                   alt={`${section.title} Icon`}
//                   className="mx-auto mb-4"
//                 />
//                 <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-[20px] md:text-[24px] uppercase tracking-wide">
//                   {section.title}
//                 </h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-9 text-left leading-relaxed">
//                 {section?.data?.map((item, i) => (
//                   <div key={i} className="space-y-8">
//                     <h3 className="font-medium text-[#444444] text-[18px] mb-2">
//                       {item.subHeading}
//                     </h3>
//                     <ul className="list-disc text-[#676767] font-light space-y-2 text-base">
//                       {item?.keyPoints?.map(
//                         (point, j) => point !== "" && <li key={j}>{point}</li>,
//                       )}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}

//       <div className="Contact Information">
//         <div className="sm:py-18 mx-auto sm:max-w-6xl px-5 md:px-0 about_tab_align">
//           <div className=" mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
//               <div className="space-y-6 md:col-span-6 lg:col-span-5">
//                 <h1 className="text-[28px] md:text-4xl font-light text-gray-900 leading-tight">
//                   CONTACT INFORMATION
//                 </h1>
//                 <p className="text-[#63666A] font-light text-[16px] leading-relaxed">
//                   If you think you are the right person for this job please{" "}
//                   <br className="hidden sm:inline" />
//                   send us your name, contact information and a copy of{" "}
//                   <br className="hidden sm:inline" />
//                   your resumé.
//                 </p>
//               </div>
//               <div className="md:col-span-6 lg:col-span-7">
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
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="flex flex-col space-y-3">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Name*"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           className="w-full  border-2 placeholder:text-[#63666A] font-normal border-[#717073] px-4 py-2 text-base"
//                         />

//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Email*"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           className="w-full font-normal mt-1 border-2 placeholder:text-[#63666A] border-[#717073] px-4 py-2 text-base"
//                         />
//                       </div>

//                       <textarea
//                         name="message"
//                         placeholder="Message*"
//                         rows={2}
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         className="w-full  border-2 placeholder:text-[#63666A] font-normal border-[#717073] px-4 py-2 text-base"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       <input
//                         type="number"
//                         name="contactNumber"
//                         placeholder="Contact Number*"
//                         value={formData.contactNumber}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-[15px] border-2 font-normal placeholder:text-[#63666A] border-[#717073] text-base"
//                         minLength={7}
//                         maxLength={15}
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
//                           <div className="flex flex-col items-center space-y-1">
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
//                       className="w-full px-4 py-3 border-2 border-[#717073] font-normal placeholder:text-[#63666A] text-base"
//                       minLength={2}
//                       maxLength={100}
//                     />

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <input
//                           type="text"
//                           name="school"
//                           placeholder="Undergraduate / Graduate School*"
//                           value={formData.school}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border-2 font-normal placeholder:text-[#63666A] border-[#717073] text-base"
//                         />
//                       </div>
//                       <div>
//                         <input
//                           type="number"
//                           name="graduation_year"
//                           placeholder="Year of Graduation*"
//                           value={formData.graduation_year}
//                           onChange={handleInputChange}
//                           className={`w-full px-4 py-3 border-2 font-normal placeholder:text-[#63666A] text-base ${
//                             errors?.graduationYear
//                               ? "border-[#BD302B]"
//                               : "border-[#717073]"
//                           }`}
//                         />
//                         {errors?.graduationYear && (
//                           <p className="text-[#BD302B] font-medium pt-1 text-[12px]">
//                             {errors.graduationYear[0]}
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
//                         // sitekey="6LdPQM4rAAAAAEUTL_n_6rLyV_OiDkZolZh5FaXn"
//                         sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
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
//                     {!principal ? (
//                       <p className="text-center text-gray-600 mt-10 w-full">
//                         No job openings available at the moment.
//                       </p>
//                     ) : (
//                       <button
//                         className="frm_button_submit sm:mb-12 mb-7 sm:mt-0 mt-7 cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit flex items-center justify-center"
//                         type="submit"
//                         disabled={loading}
//                       >
//                         {loading ? (
//                           <div
//                             role="status"
//                             className="flex px-[20px] items-center justify-center"
//                           >
//                             <svg
//                               aria-hidden="true"
//                               className="w-6 h-6 spin-slow"
//                               viewBox="0 0 100 101"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M100 50.5908C100 78.2051 77.6142
//               100.591 50 100.591C22.3858 100.591
//               0 78.2051 0 50.5908C0 22.9766 22.3858
//               0.59082 50 0.59082C77.6142 0.59082
//               100 22.9766 100 50.5908ZM9.08144
//               50.5908C9.08144 73.1895 27.4013
//               91.5094 50 91.5094C72.5987 91.5094
//               90.9186 73.1895 90.9186
//               50.5908C90.9186 27.9921 72.5987
//               9.67226 50 9.67226C27.4013
//               9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                                 fill="#E5E7EB"
//                               />
//                               <path
//                                 d="M93.9676 39.0409C96.393
//               38.4038 97.8624 35.9116 97.0079
//               33.5539C95.2932 28.8227 92.871
//               24.3692 89.8167 20.348C85.8452
//               15.1192 80.8826 10.7238 75.2124
//               7.41289C69.5422 4.10194 63.2754
//               1.94025 56.7698 1.05124C51.7666
//               0.367541 46.6976 0.446843 41.7345
//               1.27873C39.2613 1.69328 37.813
//               4.19778 38.4501 6.62326C39.0873
//               9.04874 41.5694 10.4717 44.0505
//               10.1071C47.8511 9.54855 51.7191
//               9.52689 55.5402 10.0491C60.8642
//               10.7766 65.9928 12.5457 70.6331
//               15.2552C75.2735 17.9648 79.3347
//               21.5619 82.5849 25.841C84.9175
//               28.9121 86.7997 32.2913 88.1811
//               35.8758C89.083 38.2158 91.5421
//               39.6781 93.9676 39.0409Z"
//                                 fill="currentColor"
//                               />
//                             </svg>
//                           </div>
//                         ) : (
//                           "Submit"
//                         )}
//                       </button>
//                     )}
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

// correct it

"use client";
import React, { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useParams, useRouter } from "next/navigation";

const isFile = (val) => typeof File !== "undefined" && val instanceof File;

const page = () => {
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verified, setVerified] = useState(false);
  const [principal, setPrincipal] = useState(null);
  const { slug } = useParams();
  const id = principal?.id;

  const [formData, setFormData] = useState({
    resume: "",
    resumeUrl: "",
    name: "",
    email: "",
    message: "",
    contactNumber: "",
    currentEmployer: "",
    noticePeriod: "",
    noticePeriodBuyout: "",
    reasonForLeaving: "",
    school: "",
    graduation_year: "",
    currentCTC: "",
    expectedCTC: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ];

  const selected = options.find((o) => o.value === formData.noticePeriodBuyout);

  const router = useRouter();

  useEffect(() => {
    const fetchSlug = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.viscadia.com/api/v1/career/${slug}`,
        );
        const data = response?.data?.data;
        if (data?.section_two_sub_heading) {
          data.section_two_sub_heading = JSON.parse(
            data.section_two_sub_heading,
          );
        }
        setPrincipal(data);
      } catch (err) {
        console.error("Error fetching career slug:", err.message || err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchSlug();
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleFileChange = async (e) => {
    if (!e.target.files.length) return;

    const selectedFile = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: selectedFile }));
    if (error) setError("");

    const data = new FormData();
    data.append("file", selectedFile);

    try {
      const uploadResponse = await axios.post(
        "https://api.viscadia.com/api/upload/single",
        data,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      setFormData((prev) => ({
        ...prev,
        resumeUrl: uploadResponse.data.data.url,
      }));
    } catch (error) {
      console.error("File upload failed:", error);
      setError("File upload failed. Please try again.");
      setFormData((prev) => ({ ...prev, resume: "", resumeUrl: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setCaptchaError(false);

    // reCAPTCHA check
    if (!verified) {
      setCaptchaError(true);
      setError("Please complete the captcha verification before submitting.");
      return;
    }

    // Check blank fields
    const fieldLabels = {
      name: "Name",
      email: "Email",
      message: "Message",
      contactNumber: "Contact Number",
      resumeUrl: "Resume",
      currentEmployer: "Current Employer",
      noticePeriod: "Notice Period",
      noticePeriodBuyout: "Notice Period Buyout",
      reasonForLeaving: "Reason for Leaving",
      school: "Undergraduate / Graduate School",
      graduation_year: "Year of Graduation",
      currentCTC: "Current CTC",
      expectedCTC: "Expected CTC",
    };

    const blankFields = Object.entries(fieldLabels)
      .filter(
        ([key]) => !formData[key] || formData[key].toString().trim() === "",
      )
      .map(([, label]) => label);

    if (blankFields.length > 0) {
      setError(
        `Please fill in the following required fields: ${blankFields.join(", ")}.`,
      );
      return;
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // Contact number length
    if (
      formData.contactNumber.trim().length < 7 ||
      formData.contactNumber.trim().length > 10
    ) {
      setError("Contact number must be between 7 and 10 digits.");
      return;
    }

    const gradYear = parseInt(formData.graduation_year, 10);
    const currentYear = new Date().getFullYear();
    if (isNaN(gradYear) || gradYear < 1950 || gradYear > currentYear + 5) {
      setError(
        `Graduation year must be a valid year between 1950 and ${currentYear + 5}.`,
      );
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        contactNumber: formData.contactNumber,
        currentEmployer: formData.currentEmployer,
        noticePeriod: formData.noticePeriod,
        noticePeriodBuyout:
          formData.noticePeriodBuyout === "true" ? true : false,
        reasonForLeaving: formData.reasonForLeaving,
        school: formData.school,
        graduationYear: formData.graduation_year,
        currentCTC: formData.currentCTC,
        expectedCTC: formData.expectedCTC,
        resume: formData.resumeUrl,
        jobID: id,
      };

      await axios.post(
        "https://api.viscadia.com/api/forms/career-application",
        payload,
        { headers: { "Content-Type": "application/json" } },
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
        noticePeriod: "",
        noticePeriodBuyout: "",
        reasonForLeaving: "",
        school: "",
        graduation_year: "",
        currentCTC: "",
        expectedCTC: "",
      });
      setVerified(false);
      setCaptchaError(false);
    } catch (err) {
      console.error("Submit failed:", err.response?.data || err.message);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError(
          "Please correct any issues noted below and resubmit the form.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading || !principal) {
    return (
      <div className="flex justify-center items-center h-screen bg-transparent">
        <img
          src="/careers/1488_careeare.gif"
          alt="Loading..."
          className="w-16 h-16 bg-transparent"
        />
      </div>
    );
  }

  return (
    <>
      <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 flex justify-start items-center relative top-[45px] md:top-[65px] text-white">
        <img
          src="../homeAssets/corevalue_homebanner.png"
          className="h-full w-full hidden md:block"
          alt="Banner"
        />
        <img
          src="../homeAssets/mobile_homebanner.png"
          className="h-full w-full block md:hidden"
          alt="Mobile Banner"
        />
        <div className="absolute inset-0 flex justify-center md:items-center items-start mt-12 md:mt-0">
          <div className="w-full max-w-6xl mx-auto md:px-0 px-5 flex justify-start items-center">
            <div className="leading-[35px] md:leading-tight about_tab_align">
              <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14">
                {"Career"}
              </h2>
              <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
                {principal.heading}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1f0f1]">
        <div className="text-center mx-auto md:max-w-6xl sm:px-0 px-5 pt-8 pb-8">
          <h2 className="text-[#BD302B] text-xl sm:text-[38px] font-semibold">
            {principal.sub_heading}
          </h2>

          <p className="text-[#63666A] font-light text-base mb-[30px]">
            {principal.country}
          </p>
          {principal?.section_two_sub_heading?.map((el, index) => (
            <div
              key={index}
              className="wpb_wrapper lg:px-0 px-0 sm:px-4 text-[#63666A] font-light text-[14px] space-y-3 text-left"
            >
              <p className="text-[18px] font-semibold mt-3">{el?.subHeading}</p>
              <div className="space-y-3 l">
                {el?.keyPoints?.map((el, index) => (
                  <p
                    key={index}
                    className="font-light text-[16px] text-[#4E4E4E]"
                  >
                    {el}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {[
        {
          status: principal.responsibilities_status,
          data: principal.responsibilities,
          img: "/careers/Roles.png",
          title: "Roles and Responsibilities",
        },
        {
          status: principal.qualifications_status,
          data: principal.qualifications,
          img: "/careers/Qualifcation.png",
          title: "Qualifications",
        },
        {
          status: principal.key_skills_status,
          data: principal.key_skills,
          img: "/careers/Technical-Expertise.png",
          title: "Key Skills",
        },
        {
          status: principal.benefits_status,
          data: principal.benefits,
          img: "/careers/Benefits.png",
          title: "Benefits",
        },
      ]
        ?.filter(
          (section) =>
            section.status && section.data && section.data.length > 0,
        )
        ?.map((section, idx) => (
          <div
            key={idx}
            className={`py-8 px-5 ${
              idx % 2 === 0 ? "bg-white" : "bg-[#F1F0F1]"
            }`}
          >
            <div className="mx-auto md:max-w-6xl sm:px-0 px-0">
              <div className="text-center mb-10">
                <img
                  src={section.img}
                  alt={`${section.title} Icon`}
                  className="mx-auto mb-4"
                />
                <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-[20px] md:text-[24px] uppercase tracking-wide">
                  {section.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-9 text-left leading-relaxed">
                {section?.data?.map((item, i) => (
                  <div key={i} className="space-y-8">
                    <h3 className="font-medium text-[#444444] text-[18px] mb-2">
                      {item.subHeading}
                    </h3>
                    <ul className="list-disc text-[#676767] font-light space-y-2 text-base">
                      {item?.keyPoints?.map(
                        (point, j) => point !== "" && <li key={j}>{point}</li>,
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

      <div className="Contact Information">
        <div className="sm:py-18 mx-auto sm:max-w-6xl px-5 md:px-0 about_tab_align">
          <div className=" mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
              <div className="space-y-6 md:col-span-6 lg:col-span-4">
                <h1 className="mt-8 md:mt-0 text-[28px] md:text-4xl font-light text-gray-900 leading-tight">
                  CONTACT INFORMATION
                </h1>
                <p className="text-[#63666A] font-light text-[10px] md:text-[15.5px] leading-relaxed">
                  If you think you are the right person for this job please send
                  us your name, contact information and a copy of your resumé.
                </p>
              </div>
              <div className="md:col-span-6 lg:col-span-8">
                <form onSubmit={handleSubmit} noValidate>
                  {success && (
                    <p className="bg-[#DFF0D8] text-[#3C763D] p-3 text-sm rounded mb-4">
                      {success}
                    </p>
                  )}
                  {error && (
                    <p className="bg-[#f2DEDE] text-[#B94A48] font-light p-3 text-sm rounded mb-4">
                      {error}
                    </p>
                  )}

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full  border-2 placeholder:text-[#63666A] font-medium border-[#63666A] px-4 py-2 text-[15px] md:text-[14px]"
                        />

                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full  border-2 placeholder:text-[#63666A] font-medium border-[#63666A] px-4 py-2 text-[15px] md:text-[14px]"
                        />
                      </div>

                      <textarea
                        name="message"
                        placeholder="Message*"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full  border-2 placeholder:text-[#63666A] font-medium border-[#63666A] px-4 py-2 text-[15px] md:text-[14px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number*"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="w-full  border-2 placeholder:text-[#63666A] font-medium border-[#63666A] px-4 py-2 text-[15px] md:text-[14px]"
                        minLength={7}
                        maxLength={15}
                      />

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
                          <div className="flex items-center space-y-1 gap-1">
                            <Upload
                              size={16}
                              className={
                                isFile(formData.resume)
                                  ? "text-green-500"
                                  : "text-black"
                              }
                            />
                            {/* <span className="text-[15px] text-gray-400 font-medium">
                              {isFile(formData.resume)
                                ? `Selected: ${formData.resume.name}`
                                : "Upload Resume*"}
                            </span> */}
                            <span className="text-[15px] text-gray-400 font-medium">
                              {isFile(formData.resume) ? (
                                `Selected: ${formData.resume.name}`
                              ) : (
                                <>
                                  Upload Resume
                                  <span className="text-[#4168FF]">*</span>
                                </>
                              )}
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <input
                      type="text"
                      name="currentEmployer"
                      placeholder="Current Employer"
                      value={formData.currentEmployer}
                      onChange={handleInputChange}
                      className="w-full  border-2 placeholder:text-[#63666A] font-medium border-[#63666A] px-4 py-2 text-[15px] md:text-[14px]"
                      minLength={2}
                      maxLength={100}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <input
                          type="text"
                          name="noticePeriod"
                          placeholder=""
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 placeholder:text-[#63666A] font-medium border-2 border-[#63666A] text-[14px]"
                        />
                        {!formData.noticePeriod && (
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <span className="text-[#63666A] text-[15px] md:text-[14px] font-medium">
                              Notice Period
                            </span>
                            <span className="ml-1 text-[10px] text-gray-400 font-light">
                              (Only for India-based roles)
                            </span>
                          </div>
                        )}
                      </div>

                      {/* <div className="relative w-full">
                        <select
                          name="noticePeriodBuyout"
                          value={formData.noticePeriodBuyout}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 font-medium border-2 border-[#63666A] text-[14px] appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2363666A' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 12px center",
                            paddingRight: "40px",
                          }}>
                          <option
                            value=""
                            disabled
                            hidden
                            className="text-gray-600 text-[14px] font-medium"
                          >
                            Notice Period Buyout Available
                          </option>
                          <span className="ml-1 text-[10px] text-gray-400 font-light">
                            (Only for India-based roles)
                          </span>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div> */}

                      <div className="relative w-full">
                        <button
                          type="button"
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-full px-4 py-3 font-medium border-2 border-[#63666A] text-[15px] md:text-[14px] flex justify-between items-center bg-white"
                        >
                          <span className="text-left">
                            {selected ? (
                              <span className="text-black">
                                {selected.label}
                              </span>
                            ) : (
                              <>
                                <span className="text-[#63666A] placeholder:text-[#63666A] text-[15px] md:text-[14px] font-medium">
                                  Notice Period Buyout Available
                                </span>
                                <span className="ml-1 text-[10px] text-gray-400 font-light">
                                  (Only for India-based roles)
                                </span>
                              </>
                            )}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#63666A"
                            strokeWidth="2"
                            style={{
                              transform: isOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.2s",
                            }}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>

                        {isOpen && (
                          <div className="absolute z-10 w-full border-2 border-[#63666A] border-t-0 bg-white">
                            {options?.map((option) => (
                              <div
                                key={option.value}
                                onClick={() => {
                                  handleInputChange({
                                    target: {
                                      name: "noticePeriodBuyout",
                                      value: option.value,
                                    },
                                  });
                                  setIsOpen(false);
                                }}
                                className="px-4 py-3 text-[14px] font-medium cursor-pointer hover:bg-gray-100"
                              >
                                {option.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative w-full">
                      <textarea
                        name="reasonForLeaving"
                        placeholder=""
                        value={formData.reasonForLeaving}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 placeholder:text-[#63666A] font-medium border-2 border-[#63666A] text-[15px] md:text-[14px] min-h-[100px] resize-none"
                        minLength={2}
                        maxLength={200}
                      />

                      <div className="block md:hidden">
                        {!formData.reasonForLeaving && (
                          <div className="absolute left-4 w-full top-8 md:top-5 -translate-y-1/2 pointer-events-none">
                            <span className="text-[#63666A] absolute top-[-10px] text-[15px] md:text-[14px] font-medium">
                              Reason for Leaving/Exploring Opportunities
                            </span>
                            <br className="md:hidden" />
                            <span className="md:ml-1 absolute top-[10px] text-[10px] text-gray-400 font-light">
                              (Only for India-based roles)
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="hidden md:block">
                        {!formData.reasonForLeaving && (
                          <div className="absolute left-4 top-8 md:top-5 -translate-y-1/2 pointer-events-none">
                            <span className="text-[#63666A] text-[15px] md:text-[14px] font-medium">
                              Reason for Leaving/Exploring Opportunities
                            </span>
                            <span className="md:ml-1 text-[10px] text-gray-400 font-light">
                              (Only for India-based roles)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="school"
                          placeholder="Undergraduate / Graduate School"
                          value={formData.school}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 placeholder:text-[#63666A] font-medium border-2 border-[#63666A] text-[15px] md:text-[14px]"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="graduation_year"
                          placeholder="Year of Graduation"
                          value={formData.graduation_year}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 placeholder:text-[#63666A] font-medium border-2 border-[#63666A] text-[15px] md:text-[14px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <input
                          type="text"
                          name="currentCTC"
                          placeholder=""
                          value={formData.currentCTC}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 placeholder:text-[#63666A] font-medium border-2 border-[#63666A] text-[15px] md:text-[14px]"
                        />
                        {!formData.currentCTC && (
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <span className="text-[#63666A] text-[15px] md:text-[14px] font-medium">
                              Current CTC
                            </span>
                            <span className="ml-1 text-[10px] text-gray-400 font-light">
                              (Only for India-based roles)
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="relative w-full">
                        <input
                          type="text"
                          name="expectedCTC"
                          placeholder=""
                          value={formData.expectedCTC}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 placeholder:text-[#63666A] font-medium border-2 border-[#63666A] text-[15px] md:text-[14px]"
                        />
                        {!formData.expectedCTC && (
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <span className="text-[#63666A] text-[15px] md:text-[14px] font-medium">
                              Expected CTC
                            </span>
                            <span className="ml-1 text-[10px] text-gray-400 font-light">
                              (Only for India-based roles)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] md:text-[12px] font-normal leading-[1.5] pt-5">
                    Note : Fields such as Notice Period, Current CTC, Expected
                    CTC, and Notice Buyout Availability are required only when
                    applying for India-based open positions. These fields are
                    not applicable/required for positions open in the US.
                  </p>

                  <div className="col-span-2 mt-5 relative w-max">
                    <div
                      className={
                        captchaError
                          ? "w-[304px] h-[78px] border border-[#BD3028] rounded-md"
                          : "w-[304px] h-[78px]"
                      }
                    >
                      <ReCAPTCHA
                        sitekey="6LdPQM4rAAAAAEUTL_n_6rLyV_OiDkZolZh5FaXn"
                        // sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                        onChange={() => {
                          setVerified(true);
                          setCaptchaError(false);
                          if (
                            error ===
                            "Please complete the captcha verification before submitting."
                          ) {
                            setError("");
                          }
                        }}
                      />
                    </div>
                  </div>

                  {captchaError && (
                    <p className="text-[#444444] font-medium pt-3 text-[12px]">
                      The captcha is missing from this form
                    </p>
                  )}

                  <div className="frm_submit flex justify-end">
                    {!principal ? (
                      <p className="text-center text-gray-600 mt-10 w-full">
                        No job openings available at the moment.
                      </p>
                    ) : (
                      <button
                        className="w-full md:w-auto frm_button_submit sm:mb-12 mb-7 sm:mt-0 mt-7 cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] md:rounded-sm frm_final_submit flex items-center justify-center"
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
              9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393
              38.4038 97.8624 35.9116 97.0079
              33.5539C95.2932 28.8227 92.871
              24.3692 89.8167 20.348C85.8452
              15.1192 80.8826 10.7238 75.2124
              7.41289C69.5422 4.10194 63.2754
              1.94025 56.7698 1.05124C51.7666
              0.367541 46.6976 0.446843 41.7345
              1.27873C39.2613 1.69328 37.813
              4.19778 38.4501 6.62326C39.0873
              9.04874 41.5694 10.4717 44.0505
              10.1071C47.8511 9.54855 51.7191
              9.52689 55.5402 10.0491C60.8642
              10.7766 65.9928 12.5457 70.6331
              15.2552C75.2735 17.9648 79.3347
              21.5619 82.5849 25.841C84.9175
              28.9121 86.7997 32.2913 88.1811
              35.8758C89.083 38.2158 91.5421
              39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    )}
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
