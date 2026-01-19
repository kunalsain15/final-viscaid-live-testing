// components/DynamicJsonLd.jsx
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export default function DynamicJsonLd({ pageTitle, pageDescription }) {
  const pathname = usePathname();
  const fullUrl = `https://viscadia.com${pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": fullUrl,
        url: fullUrl,
        name: pageTitle || "Forecasting Expertise | Life Sciences - Viscadia",
        isPartOf: { "@id": "https://viscadia.com/#website" },
        primaryImageOfPage: { "@id": "https://viscadia.com/#primaryimage" },
        image: { "@id": "https://viscadia.com/#primaryimage" },
        thumbnailUrl:
          "https://viscadia.com/wp-content/uploads/2023/04/viscadia-logo-with-white-bg.webp",
        datePublished: "2024-02-13T21:28:11+00:00",
        dateModified: "2025-05-23T16:55:23+00:00",
        description:
          pageDescription ||
          "Viscadia empowers the life sciences industry pioneers with custom forecasting models and market research. Visit www.viscadia.com to learn more.",
        breadcrumb: { "@id": "https://viscadia.com/#breadcrumb" },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [fullUrl],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://viscadia.com/#primaryimage",
        url: "https://viscadia.com/wp-content/uploads/2023/04/viscadia-logo-with-white-bg.webp",
        contentUrl:
          "https://viscadia.com/wp-content/uploads/2023/04/viscadia-logo-with-white-bg.webp",
        width: 1100,
        height: 759,
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://viscadia.com/#breadcrumb",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
      },
      {
        "@type": "WebSite",
        "@id": "https://viscadia.com/#website",
        url: "https://viscadia.com/",
        name: "Viscadia",
        description: "Forecasting Confidence",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://viscadia.com/?s={search_term_string}",
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <Script
      id="dynamic-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
