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
//   const [errors, setErrors] = useState("");
//   const [principal, setPrincipal] = useState(null);
//   const { slug } = useParams();
//   // const id = slug.split("-").pop();
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
//           `https://api.viscadia.com/api/v1/career/${slug}`
//         );
//         const data = response?.data?.data;
//         if (data?.section_two_sub_heading) {
//           data.section_two_sub_heading = JSON.parse(
//             data.section_two_sub_heading
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
//         graduationYear: formData.graduation_year,
//         resume: formData.resumeUrl,
//         jobID: id,
//       };
//       console.log("Submitting form data:", payload);
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
//       <div className="relative w-full h-[390px] bg-[#BD3023] flex items-center">
//         <div className="text-left pt-[60px] sm:pt-[80px] px-6 sm:px-24 space-y-4">
//           <h2 className="text-white text-2xl sm:text-3xl font-light tracking-wide">
//             {"Career"}
//           </h2>
//           <p className="text-white font-light tracking-wide max-w-3xl text-2xl sm:text-4xl md:text-5xl">
//             {principal.heading}
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
//         {principal?.section_two_sub_heading?.map((el, index) => (
//           <div
//             key={index}
//             className="wpb_wrapper text-[#63666A] font-light text-[14px] space-y-3 text-left"
//           >
//             <p className="text-[18px] font-semibold mt-3">{el?.subHeading}</p>
//             <div>
//               {el?.keyPoints?.map((el, index) => (
//                 <p key={index}>{el}</p>
//               ))}
//             </div>
//           </div>
//         ))}
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
//         // Step 1: Filter only sections that have status true AND data is non-empty
//         .filter(
//           (section) => section.status && section.data && section.data.length > 0
//         )
//         // Step 2: Map over filtered sections for alternating backgrounds
//         .map((section, idx) => (
//           <div
//             key={idx}
//             className={`py-12 px-6 ${
//               idx % 2 === 0 ? "bg-white" : "bg-[#F1F0F1]"
//             }`}
//           >
//             <div className="max-w-[1200px] mx-auto">
//               <div className="text-center mb-10">
//                 <img
//                   src={section.img}
//                   alt={`${section.title} Icon`}
//                   className="mx-auto mb-4"
//                 />
//                 <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-2xl uppercase tracking-wide">
//                   {section.title}
//                 </h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-9 text-left leading-relaxed">
//                 {section.data.map((item, i) => (
//                   <div key={i} className="space-y-8">
//                     <h3 className="font-medium text-[#444444] text-[18px] mb-2">
//                       {item.subHeading}
//                     </h3>
//                     <ul className="list-disc text-[#676767] font-light space-y-2 text-base">
//                       {item.keyPoints.map(
//                         (point, j) => point !== "" && <li key={j}>{point}</li>
//                       )}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}

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
//                     send us your name, contact information and a copy of <br />
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
//                         type="number"
//                         name="contactNumber"
//                         placeholder="Contact Number*"
//                         value={formData.contactNumber}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-[15px] border-2 border-[#717073] text-[12px]"
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
//                       className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
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
//                           type="number"
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
//                         // sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
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
//                         className="frm_button_submit cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit flex items-center justify-center"
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

"use client";
import React, { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import axios from "axios";

import ReCAPTCHA from "react-google-recaptcha";
const isFile = (val) => typeof File !== "undefined" && val instanceof File;
import { useParams, useRouter } from "next/navigation";
const page = () => {
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verified, setVerified] = useState(false);
  const [errors, setErrors] = useState("");
  const [principal, setPrincipal] = useState(null);
  const { slug } = useParams();
  // const id = slug.split("-").pop();
  const id = principal?.id;

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

  const router = useRouter();

  useEffect(() => {
    const fetchSlug = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.viscadia.com/api/v1/career/${slug}`
        );
        const data = response?.data?.data;
        if (data?.section_two_sub_heading) {
          data.section_two_sub_heading = JSON.parse(
            data.section_two_sub_heading
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
        name: formData.name,
        email: formData.email,
        message: formData.message,
        contactNumber: formData.contactNumber,
        currentEmployer: formData.currentEmployer,
        school: formData.school,
        graduationYear: formData.graduation_year,
        resume: formData.resumeUrl,
        jobID: id,
      };
      console.log("Submitting form data:", payload);
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
            <div className="leading-[35px] md:leading-tight">
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
        // Step 1: Filter only sections that have status true AND data is non-empty
        .filter(
          (section) => section.status && section.data && section.data.length > 0
        )
        // Step 2: Map over filtered sections for alternating backgrounds
        .map((section, idx) => (
          <div
            key={idx}
            className={`py-8 px-5 ${idx % 2 === 0 ? "bg-white" : "bg-[#F1F0F1]"
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
                {section.data.map((item, i) => (
                  <div key={i} className="space-y-8">
                    <h3 className="font-medium text-[#444444] text-[18px] mb-2">
                      {item.subHeading}
                    </h3>
                    <ul className="list-disc text-[#676767] font-light space-y-2 text-base">
                      {item.keyPoints.map(
                        (point, j) => point !== "" && <li key={j}>{point}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

      <div className="Contact Information">
        <div className="sm:py-18 mx-auto sm:max-w-6xl px-5 md:px-0">
          <div className=" mx-auto">
            {/* <div className="px-5"> */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
                <div className="space-y-6 md:col-span-6 lg:col-span-5">
                  <h1 className="text-[28px] md:text-4xl font-light text-gray-900 leading-tight">
                    CONTACT INFORMATION
                  </h1>
                  <p className="text-[#63666A] font-light text-[16px] leading-relaxed">
                    If you think you are the right person for this job please{" "}
                    <br className="hidden sm:inline" />
                    send us your name, contact information and a copy of{" "}
                    <br className="hidden sm:inline" />
                    your resumé.
                  </p>
                </div>

                {/* <div className="md:col-span-6 lg:col-span-7">
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-2 border-[#717073] px-4 py-[15px] text-[12px]"
                          />
                          {error && (
                            <p className="text-[#444444] font-medium pt-3 text-[12px]">
                              Enter your name.
                            </p>
                          )}
                          {errors && (
                            <p className="text-[#BD302b] font-medium pt-3 text-[12px]">
                              {errors.name?.[0]}
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
                        </div>
                      </div>

                      <textarea
                        name="message"
                        placeholder="Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="number"
                          name="contactNumber"
                          placeholder="Contact Number*"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-[15px] border-2 border-[#717073] text-[12px]"
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
                            <div className="flex flex-col items-center space-y-1">
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
                        className="w-full px-4 py-3 border-2 border-[#717073] text-[12px]"
                        minLength={2}
                        maxLength={100}
                      />

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
                            type="number"
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

                    <div className="col-span-2 mt-5 relative w-max">
                      <div
                        className={
                          captchaError
                            ? "w-[304px] h-[78px] border border-[#BD3028] rounded-md"
                            : "w-[304px] h-[78px]"
                        }
                      >
                        <ReCAPTCHA
                          // sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                          sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                          onChange={() => {
                            setVerified(true);
                            setCaptchaError(false);
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
                          className="frm_button_submit sm:mb-12 mb-7 sm:mt-0 mt-7 cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit flex items-center justify-center"
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
                </div> */}
                <div className="md:col-span-6 lg:col-span-7">
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full  border-2 placeholder:text-[#63666A] font-normal border-[#717073] px-4 py-2 text-base"
                          />

                          <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full font-normal mt-1 border-2 placeholder:text-[#63666A] border-[#717073] px-4 py-2 text-base"
                          />
                        </div>

                        <textarea
                          name="message"
                          placeholder="Message*"
                          rows={2}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full  border-2 placeholder:text-[#63666A] font-normal border-[#717073] px-4 py-2 text-base"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="number"
                          name="contactNumber"
                          placeholder="Contact Number*"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-[15px] border-2 font-normal placeholder:text-[#63666A] border-[#717073] text-base"
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
                            className={`w-full h-13 border-2 border-dashed ${isFile(formData.resume)
                              ? "border-[#717073] bg-green-50"
                              : "border-[#717073] bg-white"
                              } rounded-[3px] flex items-center justify-center cursor-pointer`}
                          >
                            <div className="flex flex-col items-center space-y-1">
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
                        className="w-full px-4 py-3 border-2 border-[#717073] font-normal placeholder:text-[#63666A] text-base"
                        minLength={2}
                        maxLength={100}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="school"
                            placeholder="Undergraduate / Graduate School*"
                            value={formData.school}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 font-normal placeholder:text-[#63666A] border-[#717073] text-base"
                          />
                          {error && (
                            <p className="text-[#444444] font-medium  pt-3 text-[12px]">
                              Enter a value for this field.
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="number"
                            name="graduation_year"
                            placeholder="Year of Graduation*"
                            value={formData.graduation_year}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 font-normal placeholder:text-[#63666A] border-[#717073] text-base"
                          />
                          {error && (
                            <p className="text-[#444444] font-medium pt-3 text-[12px]">
                              Enter a value for this field.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 mt-5 relative w-max">
                      <div
                        className={
                          captchaError
                            ? "w-[304px] h-[78px] border border-[#BD3028] rounded-md"
                            : "w-[304px] h-[78px]"
                        }
                      >
                        <ReCAPTCHA

                          // sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                          sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                          onChange={() => {
                            setVerified(true);
                            setCaptchaError(false);
                          }}
                        />
                      </div>
                    </div>

                    {captchaError && (
                      <p className="text-[#444444] font-medium pt-3 text-[12px]">
                        sa  The captcha is missing from this form
                      </p>
                    )}

                    <div className="frm_submit flex justify-end">
                      {!principal ? (
                        <p className="text-center text-gray-600 mt-10 w-full">
                          No job openings available at the moment.
                        </p>
                      ) : (
                        <button
                          className="frm_button_submit sm:mb-12 mb-7 sm:mt-0 mt-7 cursor-pointer bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[10px] rounded-sm frm_final_submit flex items-center justify-center"
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
