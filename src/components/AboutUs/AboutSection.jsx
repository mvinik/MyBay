import React from "react";

import { styles } from '../../styles/styles'
import { motion } from 'framer-motion';
import { ShieldCheck, Sun, Leaf, Users } from 'lucide-react';
const AboutSection = () => {
  return (
    <section className="about-section-1 w-full relative flex justify-center">
      <div className="w-full lg:w-3/5 h-auto py-4 lg:py-0 lg:h-44 bodyBg absolute bottom-0 grid grid-cols-2 lg:grid-cols-4">
        <div data-aos="fade-up-right"
         className="flex flex-col items-center justify-center gap-y-2">
              <Sun size={50} className="text-yellow-500 mx-auto mb-4" />
                        <h4 className="font-bold  text-black mb-2">Clean Energy</h4>
        </div>
        <div data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-y-2">
        <ShieldCheck size={50} className="text-green-600 mx-auto mb-4" />
        <h4 className="font-bold  text-black mb-2">Quality Assurance</h4>
        </div>
        <div data-aos="fade-down"
        className="flex flex-col items-center justify-center gap-y-2">
        <Users size={50} className="text-blue-500 mx-auto mb-4" />
        <h4 className="font-bold  text-black mb-2">Expert Team</h4>
        </div>
        <div data-aos="fade-up-left"
        className="flex flex-col items-center justify-center gap-y-2">
        <Leaf size={50} className="text-green-700 mx-auto mb-4" />
        <h4 className="font-bold text-black mb-2">Eco-Friendly</h4>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
