import React from 'react';

export const metadata = {
  title: 'Who We Serve - Clients and Partners | Viscadia',
  description: 'We serve pharmaceutical and biotechnology companies, emerging specialty firms, and financial and investment firms with our forecasting expertise.',
  openGraph: {
    title: 'Who We Serve - Clients and Partners | Viscadia',
    description: 'We serve pharmaceutical and biotechnology companies, emerging specialty firms, and financial and investment firms with our forecasting expertise.',
    url: 'https://viscadia.com/who-we-serve/',
    siteName: 'Viscadia',
    type: 'article',
    images: [
      'https://viscadia.com/wp-content/uploads/elementor/thumbs/image-47-qiw7zxf2pfrjrb0sw71j1khq4634k1x4prsm99mr5s.webp',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    label1: 'Est. reading time',
    data1: '8 minutes',
  },
};

export default function layout({ children }) {
  return (
    <div className="font-arial">
      {/* You can add header/footer here */}
      {children}
    </div>
  );
}
