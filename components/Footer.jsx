import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import logo from "@/public/logo-white.svg";
import { contactInfo } from "@/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="relative h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[80vh] w-full">
        <footer className="bg-primary-blue flex flex-col justify-end px-8 py-6 h-[80vh]">
          <Image
            src={logo}
            width={2000}
            height={2000}
            className="w-full"
            alt="UCSC IEEE LOGO"
          />

          <div className=" flex justify-between items-center mt-10 border-t border-primary-white pt-5">
            <div className="text-white font-semibold">
              <span>{`© ${currentYear} IEEE UCSC. All Rights Reserved`}</span>
            </div>

            <div className="text-white flex gap-12 text-xl">
              <Link href={contactInfo.facebook} target="_blank">
                <FaFacebook />
              </Link>
              <Link href={contactInfo.linkedin} target="_blank">
                <FaLinkedin />
              </Link>
              <Link href={contactInfo.instagram} target="_blank">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
