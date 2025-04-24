import React from "react";
import { styles } from "../../styles/styles";
const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Visionary leader driving sustainable energy solutions with over 10 years in the solar industry.",
  },
  {
    name: "Neha Verma",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in solar tech innovation, overseeing product design and smart energy systems.",
  },
  {
    name: "Rohan Mehta",
    role: "Operations Head",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Ensures seamless project execution from design to installation and maintenance.",
  },
  {
    name: "Priya Desai",
    role: "Customer Success Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Dedicated to helping customers through their solar journey with care and clarity.",
  },
];

const OurTeam = () => {
  return (
    <div className={`${styles.paddingHorizontal}py-16  bg-gray-50  `}>
      {/* <div className=" mx-auto text-center">
        <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-purple" />
        <p className="text-purple font-normal text-xl uppercase">
   Meet
        </p>
      </div>
      <div className="w-full flex flex-col mt-6 lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
  Our Team
        </h2>
      </div>
      </div> */}
      <div className="flex items-center justify-center gap-x-3 py-5">
        <div className="border w-24 border-purple" />
        <p className="text-purple font-bold text-4xl uppercase">
          MEet OUR TEAm
        </p>
        <div className="border w-24 border-purple" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-purple font-medium">{member.role}</p>
            <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
