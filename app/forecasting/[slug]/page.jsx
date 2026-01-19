"use client";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

const leaders = [
  {
    id: 1,
    image: "/casestudies/SKK-LinkedIn-1-1.webp",
    name: "Satish K. Kauta",
    role: "Founder & CEO",
    description:
      "Satish is the Founder and CEO of Viscadia, with a career spanning more than 25 years in the life sciences industry. Having held forecasting leadership roles in global life science companies such as Pfizer and AbbVie, Satish also has deep experience in market research, new product planning, and business development. As a career-long forecaster, Satish was inspired to build a company with a focused mission to empower the life sciences industry with clarity and confidence through forecasting.",
    linkedIn: "https://www.linkedin.com/in/satishkauta",
    paraone: "Experience",
    paratwo:
      "Satish has provided ongoing forecasting support for multibillion-dollar portfolios and also has extensive experience delivering strategic and analytical support for product launches in a wide variety of therapeutic area",
    parathree:
      "Satish's commitment to delivering clear, focused forecasts is the driving force behind Viscadia. He believes that the only way to achieve continuous growth is to design detailed, flexible plans built on a solid foundation of data.",
    parafour: "Prior to founding Viscadia, Satish held a variety of roles at:",
    parafive: "AbbVie",
    parasix: "Pfizer",
    paraseven: "Ther-Rx Corporation",
    paraeight: "Organon",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Business Development & Licensing",
    parafouteen: "Forecasting",
    parafifteen: "Market Research",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Oncology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "MBA, Olin Business School",
    paratwentythree: "Women’s Health",
    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "Washington University in St. Louis",
    paratwnetyseven: "BA in Economics",
    paratwentyeight: "Ramapo College of New Jersey",
    parefourtyone: "Cardiology",
  },
  {
    id: 2,
    image: "/casestudies/doug.webp",
    name: "Doug Willson",
    role: "Principal",
    description:
      "Douglas “Doug” Willson, Ph.D., leads the forecasting and business strategy team in our Cambridge office. He has over 30 years of forecasting and quantitative market research experience within the life sciences industry.",
    linkedIn: "https://www.linkedin.com/in/douglas-willson-bb04a616",
    paraone: "Experience",
    paratwo:
      "Doug specializes in early-stage commercial assessments, pre-launch and in-line forecasts, and market sizing studies for pharmaceuticals, biotechnology, medical devices, and diagnostics. Doug also possesses a strong background in business strategy and promotional analytics.",
    parafour: "Prior to founding Viscadia, Satish held a variety of roles at:",
    parafive: "Ipsos Healthcare",
    parasix: "ZS Associates",
    paraseven: "Bell Falla",
    paraeight: "Cello Health Advantage",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiovascular/Diabetes",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Demand Studies",
    parafouteen: "Conjoint and Choice Modeling",
    parafifteen: "Sales and Marketing Analytics",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Autoimmune",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "Ph.D. in Economics (Econometrics, Finance)",
    paratwentythree: "Oncology",
    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "University of Pennsylvania",
    paratwnetyseven: "B.Comm. in Finance",
    paratwentyeight: "Ramapo College of New Jersey",
    paratwentyeight: "University of Toronto",
    paratwentythiryone: "Rare Diseases",
    parathirtyfour: " University of Toronto",
    parathirtysix: " Product Development and New Product Planning",
    parathiryfive: "Cardiovascular/Diabetes",
    parathirtyfourtyone: "Oncology",
    parafourtytwo: "Rare Diseases",
    parafifty: "M.A. in Economics",
    parafiftyone: "University of Pennsylvania",
  },
  {
    id: 3,
    image: "/casestudies/Ramu-Ramalingam-1.png",
    name: "Ramu Ramalingam",
    role: "Principal",
    description:
      "Ramu joined Viscadia as Principal in March 2025. His career spans over 20 years as a life sciences business development leader with experience in pharma R&D, clinical research and commercial operations. He is passionate about establishing and maintaining strong relationships with clients and delivering solutions that help them make critical strategic decisions.",
    linkedIn: "linkedin.com/in/ramu-ramalingam-phd/",
    paraone: "Experience",
    paratwo:
      "Prior to Viscadia, Mr. Ramalingam served as Vice President of Business Development at ACL Digital, where he was responsible for building commercial operations capabilities to secure new clients as well as grow existing relationships. Prior to ACL Digital, he was Vice President at Ontada, where he built strategic commercial plans to acquire new business for their real-world data solutions and Senior Vice President of US Sales at WNS Global Services. Mr. Ramalingam has also held data analytics, insights and forecasting leadership roles at Indegene and Schering Plough (now Merck). He holds a PhD in genetic engineering from Madurai Kamaraj University, an MS in Industrial Microbiology from the University of Madras, and an MBA in Finance from Rutgers University. ",
    parafour: "Prior to founding Viscadia, Satish held a variety of roles at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Commercial Strategy",
    parafouteen: "Market Research",
    parafifteen: "Competitive Intelligence",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Oncology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "PhD, Genetic Engineering",
    paratwentythree: "Women’s Health",
    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "Madurai Kamaraj University",
    paratwnetyseven: "MS, Industrial Microbiology",
    paratwentyeight: "University of Madras",
    parathirtyone: "ACL digital, Ontada (McKesson)",
    parathirtytwo: "WNS Global Services",
    parathirtythree: "Schering Plough (now Merck)",
    parathirtfour: "MBA, Finance",
    parathirtyfive: "Rutgers University",
    parathiryfive: "Immunology",
  },
  {
    id: 4,
    image: "/casestudies/Jim-Martin-with-Viscadia-Background.png",
    name: "Jim Martin",
    role: "Head Of Client Development",
    description:
      "Jim is the Head of Client Development at Viscadia. His career spans over 20 years of experience driving growth for strategic consulting firms operating in the biopharma and MedTech industries.  Jim is passionate about helping his clients make informed investment decisions in disease, asset, and portfolio strategy helping them bring novel therapeutics, medical diagnostics, and devices to patients in need. ",
    linkedIn: "https://www.linkedin.com/in/jim-martin-8089b33/",
    paraone: "Experience",
    paratwo:
      "Prior to Viscadia, Mr. Martin served as Senior Vice President at Ipsos Healthcare Advisory, where he was responsible for new business growth for North America. Prior to Ipsos, Mr. Martin was Senior Director of Business Development for Putnam Associates, a Biopharma Strategic Consulting company, where he was focused on maximizing client portfolio value and informing investment decisions for disease, asset and portfolio strategy. He holds an MBA from Thunderbird School of Global Management at Arizona State University and a Bachelor of Science in Foreign Service from Georgetown University.",
    parafour: "Prior to founding Viscadia, Satish held a variety of roles at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Disease, Asset, and Portfolio Strategy",
    parafouteen: "Commercial Strategy",
    parafifteen: "Market Opportunity Assessments",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Oncology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "MBA, Thunderbird School of Global Management",
    paratwentythree: "Women’s Health",
    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "Arizona State University",
    paratwnetyseven: "BS in Foreign Service (BSFS)",
    paratwentyeight: "Georgetown University",
    parathirtyone: "Ipsos Healthcare Advisory",
    parathirtytwo: "Putnam Associates",
    parathirtythree: "Cheskin",
    parathiryfive: "Immunology and Inflammation",
    parathiryseven: "Ogilvy Worldwide",
    parathirtyeight: "Mergers & Acquisitions",
    parathirtynine: "Market Research",
    parafourty: "Forecast Modeling",
  },
  {
    id: 5,
    image: "/casestudies/Aparajit_1920x1080_Profile.png",
    name: "Aparajit Ghosh",
    role: "Principal Head of Consulting and Head Operations", // Fixed typo
    description:
      "Aparajit is a Principal at Viscadia and leads consulting function and India operations. He brings over 15 years of experience in forecasting, with a strong track record of helping global life sciences companies leverage commercial insights to drive business growth. Aparajit’s leadership spans practice development, client engagement, and the design of innovative analytically driven solutions. He is known for delivering high-impact forecasting and digital transformation strategies that enable clients to make data-driven decisions and optimize commercial performance.",
    linkedIn: "https://www.linkedin.com/in/aparajitghosh/",
    paraone: "Experience",
    paratwo:
      "Prior to joining Viscadia, Aparajit held consulting leadership roles at ZS Associates and HCL Technologies",
    parafour: "Prior to founding Viscadia, Satish held a variety of roles at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Commercial Forecasting",
    parafouteen: "Digital Transformation",
    parafifteen: "Organizational Enablement",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Oncology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "MBA, Marketing",
    paratwentythree: "Women’s Health",
    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "Great Leaks Institute of Management",
    paratwnetyseven: "BTech in Electronics and Communication",
    paratwentyeight: "Jamia Milia Islamia",
    parathirtyone: "ZS",
    parathiryfive: "Immunology",
    parathirtysix: "Product Development",
    parathirtyseven: "Large-Scale Process Outsourcing",
    parathirtyeight: "Resource Allocation",
    parathirtyfourty: "Client Engagement Strategy",
    parathirtyfourtyone: "Vaccines",
    parathirtyfourtytwo: "Infectious Disease",
  },
  {
    id: 6,
    image: "/casestudies/anindya.webp",
    name: "Anindya Roy",
    role: "Principal", // Fixed typo
    description:
      "Anindya leads the forecasting and business strategy team in our Cambridge office. He has more than 15 years of analytical consulting experience for the pharmaceutical and biotechnology industry.",
    linkedIn: "https://www.linkedin.com/in/anindyaaroy",
    paraone: "Experience",
    paratwo:
      "For over eight years at Viscadia, Anindya has led, designed and implemented forecasting solutions and best practices for clients with multibillion-dollar portfolios, as well as for emerging drug-classes in previously underserved oncologies. Anindya has deep expertise in business strategy, promotional analytics and sales force design.",
    parafour:
      "Prior to Viscadia, Anindya held a variety of sales and marketing analytics roles at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Global Asset Forecasting",
    parafouteen: "Specialty Distribution Networks",
    parafifteen: "Sales and Marketing Analytics",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Immunology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "MS in Mathematics & Computing",
    paratwentythree: "Women’s Health",
    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "Indian Institute of Technology, Kharagpur",
    paratwnetyseven: "BS in Mathematics & Computing",
    paratwentyeight: "Indian Institute of Technology, Kharagpur",
    parathirtyone: "ZS Associates",
    parathiryfive: "Oncology",
    parathirtysix: "Segmentation and Targeting",
    parathirtyfourty: "Client Engagement Strategy",
    parathirtyfourtyone: "Rare and Orphan Diseases",
    paraseven: "Deloitte Consulting",
  },

  {
    id: 6,
    image: "/casestudies/Vipul_DP.png",
    name: "Vipul Vaid",
    role: "Associate Principal", // Fixed typo
    description:
      "Vipul is an Associate Principal at Viscadia’s Cambridge, MA office, with over a decade of consulting experience in the pharmaceutical and biotech industry, including seven years dedicated exclusively to forecasting. He has developed deep expertise in forecasting for oncology, rare diseases, and medical devices. Vipul has also played a pivotal role in advancing team and culture initiatives at Viscadia.",
    linkedIn: "https://www.linkedin.com/in/vipul-vaid/",
    paraone: "Experience",
    paratwo:
      "Vipul has led forecast planning for multiple billion-dollar portfolios and played a key role in bringing several products to market. He has helped clients overhaul their forecasting infrastructure as their portfolios transition from pipeline to on-market assets across multiple therapeutic areas",
    parafour: "Prior to Viscadia, Vipul worked at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Oncology Asset Forecasting",
    parafouteen: "Global Portfolio Management",
    parafifteen: "BD&L Analysis",
    parasixteen: "Forecasting",
    parathree:
      "In addition to his client work, Vipul is deeply invested in mentorship, guiding our team of consultants across Cambridge and New Delhi.",
    paraseventteen: "Market Research",
    paraeighteen: "Oncology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "BS in Environmental Engineering",
    paratwentythree: "Women’s Health",
    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "Delhi Technological University",
    parathirtyone: "ZS Associates",
    parathiryfive: "Rare Disease",
    parathirtyfourty: "Client Engagement Strategy",
    parathirtyfourtyone: "Immunology",
  },

  {
    id: 7,
    image: "/casestudies/Rajat_DP.png",
    name: "Rajat Parmar",
    role: "Associate Principal", // Fixed typo
    description:
      "Rajat Parmar is an Associate Principal at Viscadia, spearheading the establishment and growth of Viscadia Europe in Luzern, Switzerland. With over eight years of experience in life sciences consulting, he specializes in forecasting for pharmaceutical and biotech companies across the US, Europe, and Japan. His expertise spans pre-launch and post-launch strategies, focusing on forecasting, market research, and financial planning & analytics. In addition to driving growth, he is committed to fostering a strong team culture at Viscadia.",
    linkedIn: "https://www.linkedin.com/in/rajat-parmar-89b96b113/",
    paraone: "Experience",
    paratwo:
      "Rajat has led forecasting initiatives for billion-dollar portfolios, supporting pre-launch and post-launch strategies across the US, Europe, and Japan. He has extensive experience delivering forecasting solutions across diverse therapeutic areas and geographies, providing end-to-end support—from deriving insights through market research to building confident, data-driven forecasts.",
    parafour: "Prior to Viscadia, Vipul worked at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Global Oncology Forecasting",
    parafouteen: "Financial Planning & Modeling",
    parafifteen: "Market Research",
    parasixteen: "Forecasting",
    parathree:
      "As the leader of Viscadia Europe in Luzern, Switzerland, Rajat is driving the firm’s growth and expansion in the region. He oversees foundational setup, business and team development, and operational strategy to establish Viscadia’s strong presence in Europe.",
    paraseventteen: "Market Research",
    paraeighteen: "Oncology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "BS in Environmental Engineering",
    paratwentythree: "Women’s Health",
    paratwentyfour: "BS in Mechanical Engineering",
    paratwentynineteen: "Thapar University",
    parathirtyone: "ZS Associates",
    parathiryfive: "Rare Disease",
    parathirtyfourty: "Client Engagement Strategy",
    parathirtyfourtyone: "Cardiovascular Disease",
  },

  {
    id: 8,
    image: "/casestudies/Rajat_DP.png",
    name: "Rajat Parmar",
    role: "Associate Principal", // Fixed typo
    description:
      "Rajat Parmar is an Associate Principal at Viscadia, spearheading the establishment and growth of Viscadia Europe in Luzern, Switzerland. With over eight years of experience in life sciences consulting, he specializes in forecasting for pharmaceutical and biotech companies across the US, Europe, and Japan. His expertise spans pre-launch and post-launch strategies, focusing on forecasting, market research, and financial planning & analytics. In addition to driving growth, he is committed to fostering a strong team culture at Viscadia.",
    linkedIn: "https://www.linkedin.com/in/rajat-parmar-89b96b113/",
    paraone: "Experience",
    paratwo:
      "Rajat has led forecasting initiatives for billion-dollar portfolios, supporting pre-launch and post-launch strategies across the US, Europe, and Japan. He has extensive experience delivering forecasting solutions across diverse therapeutic areas and geographies, providing end-to-end support—from deriving insights through market research to building confident, data-driven forecasts.",
    parafour: "Prior to Viscadia, Vipul worked at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Global Oncology Forecasting",
    parafouteen: "Financial Planning & Modeling",
    parafifteen: "Market Research",
    parasixteen: "Forecasting",
    parathree:
      "As the leader of Viscadia Europe in Luzern, Switzerland, Rajat is driving the firm’s growth and expansion in the region. He oversees foundational setup, business and team development, and operational strategy to establish Viscadia’s strong presence in Europe.",
    paraseventteen: "Market Research",
    paraeighteen: "Oncology",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "BS in Environmental Engineering",
    paratwentythree: "Women’s Health",
    paratwentyfour: "BS in Mechanical Engineering",
    paratwentynineteen: "Thapar University",
    parathirtyone: "ZS Associates",
    parathiryfive: "Rare Disease",
    parathirtyfourty: "Client Engagement Strategy",
    parathirtyfourtyone: "Cardiovascular Disease",
  },
  {
    id: 9,
    image: "/casestudies/KT-Headshot.png",
    name: "Krittika Tokas",
    role: "Associate Principal", // Fixed typo
    description:
      "Krittika serves as the Associate Principal in our India office.  She has 9+ years of consulting experience, specializing in forecasting for the pharmaceutical industry. ",
    linkedIn: "https://www.linkedin.com/in/krittika-tokas/",
    paraone: "Experience",
    paratwo:
      "Krittika has been responsible for delivering forecasts and impactful insights across multiple therapeutic areas for a global portfolio.  She has led and mentored teams specializing in forecasting tool design and build, including online platform deployment.  In addition, her work in vaccine forecasting and modelling make her a value asset to the Viscadia team.",
    parafour: "Prior to Viscadia:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Pipeline Portfolio Management",
    parafouteen: "Opportunity Assessment",
    parafifteen: "BD Analysis",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Vaccines",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "BE in Electronics and Communication",
    paratwentythree: "Women’s Health",
    paratwentyfour: "BS in Mechanical Engineering",
    paratwentynineteen: "Netaji Subhas Institude of Technology, Delhi",
    parathirtyone: "ZS Associates",
    parathiryfive: "Epidemiology",
    parathirtyfourty: "Client Engagement Strategy",
  },

  {
    id: 10,
    image: "/events/himanshu.webp",
    name: "Himanshu Gurnani",
    role: "Manager, Strategic Forecasting",
    description:
      "Himanshu works as a Manager, Strategic Forecasting in our Cambridge office. He has more than 8 years of consulting experience in the pharmaceutical industry.",
    linkedIn: "https://www.linkedin.com/in/himanshugurnani/",
    paraone: "Experience",
    paratwo:
      "Himanshu has extensive analytical experience working in the pharmaceutical & healthcare space. He has helped clients in Forecasting, Commercial Assessment, Sales Planning & Analytics, and formulating Data driven Sales Strategies. He has experience of leading teams & working on projects with both Big & Specialty pharma and has the experience of working with client teams across the globe.",
    parafour: "Prior to Viscadia, he worked at",
    imgfour: "/casestudies/imgfour.webp",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgfive: "/casestudies/imgfive.webp",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgsix: "/casestudies/imgsix.webp",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Pipeline & In-line Asset Forecasting",
    parafouteen: "Market Research",
    parafifteen: "Sales & Marketing Analytics",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Vaccines",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "BS in Mineral Engineering",
    paratwentythree: "Women’s Health",
    paratwentyfour: "BS in Mechanical Engineering",
    paratwentynineteen: "Indian School of Mines, Dhanbad",
    parathirtyone: "Trinity Lifesciences",
    parathiryfive: "Epidemiology",
    parathirtyfourty: "Client Engagement Strategy",
    paraseven: "KPMG",
    parathirtyfourtytwo: "Rare Diseases",
    parafifty: "B.Comm. in Finance",
    parafiftyone: "University of Toronto",
  },
];

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

function Forecasting({ params }) {
  const { slug } = params;

  const leader = leaders.find((person) => slugify(person.name) === slug);

  if (!leader) {
    return notFound();
  }

  return (
    <>
      <section className="bg-white  text-gray-900 py-12  min-h-screen">
        <div className="max-w-[1028px] mx-auto">
          <div className="mb-12 md:mb-16 xl:px-0 px-2">
            <Link href="/leadership" className="inline-block">
              <p className="text-base text-[#13D66] font-light hover:text-black cursor-pointer transition-colors">
                &lt; Back
              </p>
            </Link>
          </div>
          <div className="grid grid-cols-12  xl:px-0 px-5  gap-12 items-center">
            <div className="space-y-6 col-span-12 md:col-span-7 order-2 md:order-1">
              <div>
                <h1 className="text-4xl lg:text-6xl font-light text-black mb-3 leading-tight">
                  {leader.name}
                </h1>
                <h2 className="text-xl lg:text-2xl font-light text-black mb-6">
                  {leader.role}
                </h2>
              </div>

              <p className="text-[#63666A] font-light leading-6 text-base lg:text-base mb-8">
                {leader.description}
              </p>
              <div className="flex items-center">
                <a
                  href={leader.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/casestudies/linkedin.png"
                    alt="LinkedIn Profile"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end col-span-12 md:col-span-5 order-1 md:order-2">
              <div className="relative overflow-hidden shadow-lg">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full max-w-[430px] h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ECECEC] pt-17 pb-17 pl-5 pr-5 mt-14">
          <div className="max-w-[1028px] mx-auto">
            <h2 className="text-[34px] font-light text-black">
              {leader.paraone}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-22">
              {/* Left Side */}
              <div>
                <div className="space-y-4 mt-4">
                  <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                    {leader.paratwo}
                  </p>
                  <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                    {leader.parathree}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="mt-4">
                <p className="font-light text-base text-black">
                  {leader.parafour}
                </p>

                <div className="flex gap-20 mt-6 items-center">
                  <div className="space-y-2">
                    <p className="text-base font-light text-black">
                      {leader.parafive}
                    </p>
                    <p className="text-base font-light text-black">
                      {leader.parasix}
                    </p>

                    <div className="space-y-5">
                      <p className="text-base font-light text-black">
                        {leader.parathirtyone}
                      </p>
                      <p className="text-base font-light text-black">
                        {leader.parathirtytwo}
                      </p>
                      <p className="text-base font-light text-black">
                        {leader.parathirtythree}
                      </p>
                      <p className="text-base font-light text-black">
                        {leader.parathiryseven}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-light text-black">
                      {leader.paraseven}
                    </p>
                    <p className="text-base font-light text-black">
                      {leader.paraeight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:gap-0 gap-8 md:grid-cols-3 xl:px-0 px-5 mt-15 mb-9 max-w-[1028px] justify-center  mx-auto">
          {/* Business Expertise */}
          <div className="text-center space-y-5">
            <img src={leader.imgone} className="mx-auto rotate-270" />
            <img src={leader.imgfour} className="mx-auto " />
            <p className="text-xl font-light">{leader.paranine}</p>
            <p className="text-base font-light">{leader.parathirteen}</p>
            <p className="text-base font-light">{leader.parafouteen}</p>
            <p className="text-base font-light">{leader.parafifteen}</p>
            <p className="text-base font-light">{leader.parathirtysix}</p>
            <p className="text-base font-light">{leader.parathirtyseven}</p>
            <p className="text-base font-light">{leader.parathirtyeight}</p>
            <p className="text-base font-light">{leader.parathirtynine}</p>
            <p className="text-base font-light">{leader.parafourty}</p>
          </div>

          {/* Therapeutic Expertise */}
          <div className="text-center space-y-5">
            <img src={leader.imgtwo} className="mx-auto" />
            <img src={leader.imgfive} className="mx-auto rotate-270" />
            <p className="text-xl font-light">{leader.paraten}</p>

            <p className="text-base font-light">{leader.parefourtyone}</p>
            <p className="text-base font-light">{leader.paraeighteen}</p>
            <p className="text-base font-light">{leader.paranineteen}</p>
            <p className="text-base font-light">{leader.parathiryfive}</p>
            <p className="text-base font-light">{leader.parathirtyfourtyone}</p>
            <p className="text-base font-light">{leader.parathirtyfourtytwo}</p>
            <p className="text-base font-light">{leader.parafourtytwo}</p>
          </div>
          {/* Education */}
          <div className="text-center space-y-3">
            <img src={leader.imgthree} className="mx-auto" />
            <img src={leader.imgsix} className="mx-auto" />
            <p className="text-xl font-light ">{leader.paratwnetyfour}</p>
            <p className="text-base text-[#000000] font-light ">
              {leader.paratwentytwo} <br />{" "}
              <i className="text-[12px] text-[#63666A] font-light">
                {leader.paratwentynineteen}
              </i>
            </p>
            <p className="text-base text-[#000000] font-light mt-9">
              {leader.paratwnetyseven} <br />{" "}
              <i className="text-[12px] text-[#63666A] font-light">
                {leader.paratwentyeight}
              </i>
            </p>
            <p className="text-base text-[#000000] font-light ">
              {leader.parathirtfour} <br />{" "}
              <i className="text-[12px] font-light">{leader.parathirtyfive}</i>
            </p>
            <p className="text-base text-[#000000] font-light ">
              {leader.parafifty} <br />{" "}
              <i className="text-[12px] font-light">{leader.parafiftyone}</i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forecasting;
