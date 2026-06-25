import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phuro Motor Solo | Spesialis Servis Airbag Mobil Solo - Surakarta",
  description: "Spesialis perbaikan SRS Airbag Mobil di Solo (Surakarta). Melayani reset crash data airbag, ganti cover setir, perbaikan sensor, dan pasang airbag baru bergaransi untuk semua merek mobil.",
  keywords: [
    "airbag solo",
    "airbag surakarta",
    "bengkel airbag solo",
    "servis airbag surakarta",
    "phuro motor solo",
    "reparasi airbag mobil solo",
    "srs airbag solo",
    "reset airbag solo",
    "servis setir solo",
    "perbaikan airbag surakarta",
    "sensor airbag solo",
    "clockspring setir solo"
  ],
  authors: [{ name: "Phuro Motor Solo" }],
  creator: "Phuro Motor Solo",
  publisher: "Phuro Motor Solo",
  metadataBase: new URL("https://airbagsolo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Phuro Motor Solo | Spesialis Servis Airbag Mobil Solo - Surakarta",
    description: "Spesialis perbaikan SRS Airbag Mobil di Solo (Surakarta). Melayani reset crash data airbag, ganti cover setir, perbaikan sensor, dan pasang airbag baru bergaransi.",
    url: "https://airbagsolo.com",
    siteName: "Phuro Motor Solo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 1200,
        alt: "Phuro Motor Solo - Spesialis Servis Airbag Mobil Solo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuro Motor Solo | Spesialis Servis Airbag Mobil Solo - Surakarta",
    description: "Spesialis perbaikan SRS Airbag Mobil di Solo (Surakarta). Melayani reset crash data airbag, ganti cover setir, perbaikan sensor, dan pasang airbag baru bergaransi.",
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema for Google Rich Snippets SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Phuro Motor Solo (Airbag Solo)",
    "image": "https://airbagsolo.com/hero-bg.png",
    "@id": "https://airbagsolo.com/#localbusiness",
    "url": "https://airbagsolo.com",
    "telephone": "+6285867123339",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Adi Sumarmo No. 120, Banyuanyar, Kec. Banjarsari",
      "addressLocality": "Surakarta",
      "addressRegion": "Jawa Tengah",
      "postalCode": "57137",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.5457,
      "longitude": 110.8034
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6285867123339",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["id", "en"]
    },
    "sameAs": [
      "https://www.instagram.com/phuromotorsolo"
    ]
  };

  return (
    <html lang="id" className={lexend.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
