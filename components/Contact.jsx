import Link from "next/link";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import { contactInfo, contactExCom } from "@/utils";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center my-20"
      id="contact-us"
    >
      <div className="max-w-[950px]">
        <h5 className="text-secondary-blue font-medium flex gap-2 items-center">
          <div className="w-6 h-[2px] bg-secondary-blue" />
          Get in Touch
        </h5>

        <div className="border-b-2 border-primary-blue pb-12 pt-6">
          <p className="text-3xl font-medium text-secondary-blue">
            Connect with the IEEE Student Branch of UCSC - your gateway to
            professional growth, technical innovation, and meaningful networking
            opportunities in the field of engineering and computing. We're here
            to support your journey and welcome your inquiries.
          </p>
          <div className="flex justify-between my-8 text-secondary-blue font-medium">
            <span className="flex gap-2">
              <MdLocationOn className="translate-y-1" />
              IEEE Student Branch of UCSC, <br />
              University of Colombo School of Computing,
              <br />
              35, Reid Avenue,
              <br />
              Colombo 7.
            </span>

            <Link className="flex gap-2" href={`mailto:${contactInfo.email}`}>
              <IoMdMail className="translate-y-1" />
              {contactInfo.email}
            </Link>

            <Link
              className="flex gap-2"
              href={`tel:${contactInfo.contactNo.replace(/[\s()-]/g, "")}`}
            >
              <IoMdCall className="translate-y-1" />
              {contactInfo.contactNo}
            </Link>
          </div>
        </div>

        <div className="flex justify-between my-6">
          {contactExCom.map(({ name, position, email }, index) => (
            <div
              key={index}
              className="flex flex-col text-sm text-secondary-blue"
            >
              <span className="font-medium">{name}</span>
              <span>{position}</span>
              <Link href={`mailto:${email}`} className="">
                {email}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
