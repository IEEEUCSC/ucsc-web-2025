import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

const TeamMembers = ({ title, members }) => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div>
        <div className="my-16 flex items-center gap-3">
          <div className="w-6 h-[2px] bg-secondary-blue" />
          <p className="uppercase font-semibold text-base text-secondary-blue">
            {title}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-x-4 gap-y-10 max-w-[1200px]">
          {members.map((member, index) => (
            <div key={index} className="space-y-4" style={{}}>
              <Image
                src={`/images/team/${member.image}`}
                width={1200}
                height={1200}
                alt={member.name}
                className="w-[230px] h-[350px] object-cover grayscale hover:grayscale-0 transition-all"
              />
              <div>
                <p className="font-medium text-secondary-blue">{member.name}</p>
                <span className="text-secondary-blue">{member.position}</span>
              </div>
              <div className="flex gap-4 text-lg">
                <Link href={`${member.linkedin}`}>
                  <FaLinkedin />
                </Link>

                <Link href={`${member.instagram}`}>
                  <FaInstagram />
                </Link>

                <Link href={`${member.facebook}`}>
                  <FaFacebook />
                </Link>

                <Link href={`${member.email}`}>
                  <FaEnvelope />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
