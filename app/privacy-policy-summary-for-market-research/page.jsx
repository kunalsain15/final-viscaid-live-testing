import React from "react";

function page() {
  return (
    <>
      <div className="sm:h-[480px] h-[400px] w-full bg-black relative text-white ">
        <img
          className="h-full w-full opacity-40"
          src="casestudies/vis_hero_interior_LEADERSHIP-2.gif"
        />
        {/* overlay text */}
        <div className="h-full w-full absolute top-0 left-0 z-10">
          <div className="2xl:max-w-[1350px]    max-w-[90%] md:max-w-[80%] flex justify-end h-[70%] sm:h-[65%] flex-col mx-auto">
            <h2 className="text-[24px] md:text-[32px] lg:text-[50px] font-extralight sm:leading-14 ">
              Privacy Policy Summary for Market Research
            </h2>
          </div>
        </div>
      </div>

      <main className="min-h-screen sm:px-0 px-4 bg-white text-[#676767] font-light py-12 md:max-w-[80%] mx-auto 2xl:max-w-[1400px]">
        <div className="mx-auto prose prose-stone">
          {/* --- Existing Heading --- */}
          <p className="text-sm md:text-[19px]">
            Effective Date: 24th February 2025
          </p>

          <p className="text-sm mt-3 md:text-[19px]">
            This Data Privacy Policy outlines how we collect, use, disclose, and
            protect your personal data when you engage in our research
            activities. It applies to all individuals whose personal data we
            process as participants in our studies. By participating in our
            research, you agree to the terms of this Policy. You may withdraw
            your consent at any time. To learn more about how we and our clients
            use your data or about your rights, please refer to our Privacy
            Policy for Market Research Participant below.
          </p>

          {/* ---------------------- NEW CONTENT FROM IMAGE ---------------------- */}

          <h2 className="text-black text-[22px] mt-6 sm:mt-8 font-light">
            1. Definition of Personal Data
          </h2>

          <p className="text-[14px] mt-4 mb-3 text-[#676767]">
            “Personal data” refers to any information relating to an identified
            or identifiable individual, including:
          </p>

          <ul className="list-disc marker:text-[14px] text-[14px] ml-6 space-y-2 text-[#63666A]">
            <li>
              Basic Identifiers: Name, contact information, age, gender, and
              demographic details.
            </li>
            <li>
              Health and Sensitive Data: Health records, genetic information,
              ethnicity, sexual activity, or other sensitive data provided
              explicitly for research purposes.
            </li>
            <li>
              Research-Specific Data: Screening responses, study enrollment
              details, and recordings or transcripts of research interactions.
            </li>
          </ul>

          <h2 className="text-black text-[22px] mt-10 font-light">
            2. Data Collection
          </h2>

          <ul className="list-disc marker:text-[14px] text-[14px] ml-6 space-y-2 text-[#63666A] mt-4">
            <li>
              Viscadia collects and processes personal data when you submit
              responses to screening questions or participate in research
              studies for our clients.
            </li>
            <li>
              If you are a Patient or Caregiver: This may include information
              regarding your (or your care receiver’s) health, how it impacts
              your personal life, and details relevant to eligibility such as
              ethnicity, age, nationality, and availability for further
              research.
            </li>
            <li>
              If you are a Health Care Professional (HCP): We typically collect
              information about your role, background, and practice. This data
              may be provided to us by other healthcare professionals, clients,
              or publicly available sources.
            </li>
            <li>
              Viscadia may also receive your information from paid recruiters,
              who provide your contact details and any relevant information to
              verify your eligibility (e.g., health data, ethnicity, or sexual
              activity for patient participants).
            </li>
          </ul>

          <h2 className="text-black text-[22px] mt-10 font-light">
            3. Use of Your Data
          </h2>

          <ul className="list-disc marker:text-[14px] text-[14px] ml-6 space-y-2 text-[#63666A] mt-4">
            <li>
              Viscadia uses your personal data to assess your eligibility for
              research studies. If accepted, your data will be used for the
              research.
            </li>
            <li>
              Your data is processed in compliance with applicable data
              protection laws. If you reside in the United Kingdom (the UK), we
              comply with the UK General Data Protection Regulation (UK GDPR),
              as well as our clients' country-specific requirements.
            </li>
            <li>
              Viscadia takes reasonable steps to safeguard the confidentiality
              and security of your data. We ensure that the data we process is
              de-identified by the client, but there may be cases where
              identifiable information is required for verification purposes
              only.
            </li>
            <li>
              We may use your data to contact you regarding research
              opportunities for which you have consented.
            </li>
            <li>
              Your personal data may also be used for verifying information,
              confirming eligibility, and for research-specific reporting. We do
              not sell or commercialize your personal data.
            </li>
          </ul>

          <h2 className="text-black text-[22px] mt-10 font-light">
            4. Legal Bases for Processing
          </h2>

          <ul className="list-disc marker:text-[14px] text-[14px] ml-6 space-y-2 text-[#63666A] mt-4">
            <li>
              Recruitment: Verifying the identity of research participants.
            </li>
            <li>
              Conducting Research: Creating deidentified research products for
              our clients.
            </li>
            <li>
              Adverse Event Reporting: If you report an adverse event, our
              client may contact you, but only if you have consented to be
              re-contacted.
            </li>
          </ul>

          <p className="text-[14px] text-[#63666A] mt-3">
            We may also share your data with clients or service providers to
            fulfill legal obligations.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            5. Data Sharing and Disclosure
          </h2>

          <ul className="list-disc marker:text-[14px] text-[14px] ml-6 space-y-2 text-[#63666A] mt-4">
            <li>
              Internal Use: Your data may be shared with authorized personnel
              within our global offices to support operations and research
              activities.
            </li>
            <li>
              Third-Party Collaborators: Data may be shared with trusted service
              providers, research partners, or recruiters under confidentiality
              agreements. Any external sharing includes anonymization.
            </li>
            <li>
              Legal Disclosures: We may disclose personal data when required by
              law or in response to legitimate requests from regulatory
              authorities.
            </li>
          </ul>

          <p className="text-[14px] text-[#63666A] mt-3">
            Viscadia does not sell your personal data.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            6. International Data Transfers
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            As a global organization, your data may be transferred across our
            offices worldwide. Headquartered in the United States, we store and
            process your data in compliance with the OECD Privacy Guidelines.
            Data transfers follow strict protocols including Standard
            Contractual Clauses (EU Regulation 2016/679) and cross-border data
            requirements under Japan’s Act No. 57 of 2003.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            7. Data Retention
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            We retain personal data only for as long as necessary to fulfill the
            purpose for which it was collected or to meet legal obligations.
            Once no longer needed, data is securely deleted or anonymized.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            8. Data Security and Confidentiality
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            We implement robust safeguards to protect your data. Access is
            restricted to authorized personnel, and all data is processed under
            strict confidentiality protocols.
          </p>

          {/* ---------------------- (Your Old Content Continues Below) ---------------------- */}

          <h2 className="text-black text-[22px] mt-10 font-light">
            9. Legal Bases for Processing
          </h2>

          <ul className="list-disc marker:text-[14px] text-[14px] ml-6 space-y-2 text-[#63666A] mt-4">
            <li>
              Recruitment: Verifying the identity of research participants.
            </li>
            <li>
              Conducting Research: Creating deidentified research products for
              our clients.
            </li>
            <li>
              Adverse Event Reporting: If you report an adverse event, our
              client may contact you, but only if you have consented to be
              re-contacted.
            </li>
          </ul>

          <p className="text-[14px] text-[#63666A] mt-3">
            We may also share your data with clients or service providers to
            fulfill legal obligations.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            5. Data Sharing and Disclosure
          </h2>

          <ul className="list-disc marker:text-[14px] text-[14px] ml-6 space-y-2 text-[#63666A] mt-4">
            <li>
              Internal Use: Your data may be shared with authorized personnel
              within our global offices to support operations and research
              activities.
            </li>
            <li>
              Third-Party Collaborators: Data may be shared with trusted service
              providers, research partners, or recruiters under confidentiality
              agreements. Any external sharing includes anonymization.
            </li>
            <li>
              Legal Disclosures: We may disclose personal data when required by
              law or in response to legitimate requests from regulatory
              authorities.
            </li>
          </ul>

          <p className="text-[14px] text-[#63666A] mt-3">
            Viscadia does not sell your personal data.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            6. International Data Transfers
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            As a global organization, your data may be transferred across our
            offices worldwide. Headquartered in the United States, we store and
            process your data in compliance with the OECD Privacy Guidelines.
            Data transfers are conducted in accordance with our intergroup data
            transfer agreement, based on the Standard Contractual Clauses (EU
            2016/679), and meeting the cross-border data transfer requirements
            under Japan’s Act No. 57 of 2003, as amended.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            7. Data Retention
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            We retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected or to meet legal obligations.
            Once no longer needed, data is securely deleted.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            8. Data Security and Confidentiality
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            We implement robust safeguards to protect your data. Access is
            restricted to authorized personnel, and all data is processed under
            strict confidentiality protocols.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            9. Children’s Privacy
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            We do not knowingly collect personal data from children under the
            age of 13. If you believe that data from a minor has been
            inadvertently collected, please contact us immediately.
          </p>

          <h2 className="text-black text-[22px] mt-10 font-light">
            10. Amendments to This Policy
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            We may update this Policy periodically. Any amendments will be
            posted on our website with the updated effective date.
          </p>
          <h2 className="text-black text-[22px] mt-10 font-light">
            11. Contact Information
          </h2>

          <p className="text-[14px] text-[#63666A] mt-4">
            For questions or requests regarding this Policy or the processing of
            your personal data, please contact us at{" "}
            <a
              href="mailto:privacypolicy@viscadia.com"
              className="text-blue-400 hover:underline"
            >
              privacypolicy@viscadia.com
            </a>
          </p>

          {/* Continue your existing code below... */}
        </div>
      </main>
    </>
  );
}
export default page;
