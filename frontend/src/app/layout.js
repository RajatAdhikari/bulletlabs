import "@/index.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://boltlabs.agency"),
  title: {
    default: "Boltlabs — We Build Digital Dimensions | SMM & Web Development Agency",
    template: "%s | Boltlabs",
  },
  description:
    "Boltlabs is a premier Social Media Marketing & Web Development agency in Delhi, India. We scale brands through immersive 3D web experiences, React websites, high-converting landing pages and data-driven social strategies.",
  keywords: [
    "Boltlabs",
    "social media marketing",
    "react websites",
    "landing pages",
    "3D web experiences",
    "lead generation",
    "web development agency Delhi",
  ],
  openGraph: {
    title: "Boltlabs — We Build Digital Dimensions",
    description:
      "Premier Social Media Marketing & Web Development agency. Immersive web experiences and data-driven social strategies.",
    type: "website",
    locale: "en_IN",
    siteName: "Boltlabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boltlabs — We Build Digital Dimensions",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#030303" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030303] text-white antialiased">
        <div className="noise-overlay" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
