// import CommonNavbar from "@/components/commonNavbar/commonNavbar";
// import "./globals.css";
// import Footer from "@/components/footer/Footer";
// import Commoncookies from "@/components/commoncookies/CommonCookies";
// import CookieBox from "@/components/CookieBox";
// import RecaptchaWidget from "@/components/recaptchawidget/page";
// import ZoomInfoScript from "@/components/ZoomInfoScript";
// export const metadata = {
//   title: "Forecasting Expertise | Life Sciences - Viscadia",
//   description:
//     "Viscadia empowers the life sciences industry pioneers with custom forecasting models and market research. Visit www.viscadia.com to learn more.",
//   icons: {
//     icon: "./favicon.ico",
//     shortcut: "./favicon.ico",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <head>
//           <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
//             integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA=="
//             crossOrigin="anonymous"
//             referrerPolicy="no-referrer"
//           />
//         </head>

//         <div>
//           <CookieBox />
//           <CommonNavbar />
//           {children}
//           <ZoomInfoScript />
//           <Commoncookies />
//           <Footer />

//           <RecaptchaWidget />
//         </div>
//       </body>
//     </html>
//   );
// }

import CommonNavbar from "@/components/commonNavbar/commonNavbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Commoncookies from "@/components/commoncookies/CommonCookies";
import CookieBox from "@/components/CookieBox";
import RecaptchaWidget from "@/components/recaptchawidget/page";
import ZoomInfoScript from "@/components/ZoomInfoScript";
import Script from "next/script";

export const metadata = {
  title: "Forecasting Expertise | Life Sciences - Viscadia",
  description:
    "Viscadia empowers the life sciences industry pioneers with custom forecasting models and market research. Visit www.viscadia.com to learn more.",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
          integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0CXNPMC4V9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0CXNPMC4V9');
          `}
        </Script>

        <div>
          <CookieBox />
          <CommonNavbar />
          {children}
          <ZoomInfoScript />
          <Commoncookies />
          <Footer />
          <RecaptchaWidget />
        </div>
      </body>
    </html>
  );
}

// import CommonNavbar from "@/components/commonNavbar/commonNavbar";
// import "./globals.css";
// import Footer from "@/components/footer/Footer";
// import Commoncookies from "@/components/commoncookies/CommonCookies";
// import CookieBox from "@/components/CookieBox";
// import RecaptchaWidget from "@/components/recaptchawidget/page";
// import ZoomInfoScript from "@/components/ZoomInfoScript";

// export const metadata = {
//   title: "Forecasting Expertise | Life Sciences - Viscadia",
//   description:
//     "Viscadia empowers the life sciences industry pioneers with custom forecasting models and market research. Visit www.viscadia.com to learn more.",
//   icons: {
//     icon: "./favicon.ico",
//     shortcut: "./favicon.ico",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
//           integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//       </head>
//       <body>
//         <div>
//           <CookieBox />
//           <CommonNavbar />
//           {children}
//           <ZoomInfoScript />
//           <Commoncookies />
//           <Footer />
//           <RecaptchaWidget />
//         </div>
//       </body>
//     </html>
//   );
// }
