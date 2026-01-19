// endpoint.js
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
  CONTACT_FORM: `${BASE_URL}/api/forms/contact`,
  CAREER_APPLICATION: `${BASE_URL}/api/forms/career-application`,
  UPLOAD_SINGLE: `${BASE_URL}/api/upload/single`,
  COMMON_FORM: `${BASE_URL}/api/forms/common-form/events`,
  WEBINAR_FORM: `${BASE_URL}/api/forms/common-form/webinar`,
  DOWNLOAD_PDF: `${BASE_URL}/api/forms/documnet-request`,
};
