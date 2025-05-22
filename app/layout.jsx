import localFont from "next/font/local";
import "@/styles/globals.css";

import { ReactLenis } from "@/utils/lenis";
import Navbar from "@/components/Navbar";
import PreLoader from "@/components/helpers/Preloader";
import Transition from "@/components/helpers/Transition";
import Footer from "@/components/Footer";

const raveo = localFont({
  src: "../styles/fonts/RaveoVF.woff2",
  variable: "--font-raveo",
  weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

export const metadata = {
  title: "IEEE Student Branch of UCSC",
  description:
    "The IEEE Student Branch of University of Colombo School of Computing was established in 2011 and has achieved great success during the past few years.",
  openGraph: {
    title: "IEEE Student Branch of UCSC",
    images: "/opengraph.png",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${raveo.variable} font-[family-name:var(--font-raveo)] antialiased bg-primary-white font-light selection:bg-primary-blue selection:text-secondary-white`}
        >
          <div className="">
            <Transition />
            <PreLoader />
            <Navbar />

            {children}

            <Footer />
          </div>
        </body>
      </ReactLenis>
    </html>
  );
}
