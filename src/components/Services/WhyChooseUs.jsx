import React from 'react'
import { styles } from '../../styles/styles'
import { motion } from 'framer-motion';
import { ShieldCheck, Sun, Leaf, Users } from 'lucide-react';


const WhyChooseUs = () => {
  return (
    <div className={`w-full ${styles.paddingHorizontal} py-6 lg:py-16 flex flex-col gap-y-10 bodyBg`}>


      <section >
        <div className=" mx-auto text-center">
          <div className="flex items-center justify-center py-5 gap-x-3">
            <div className="border w-24 border-purple" />
            <p className="text-purple font-bold text-4xl uppercase">
              Why  Choose Us
            </p>
            <div className="border w-24 border-purple" />
          </div>
          {/* <div className="w-full flex flex-col mt-6 lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
      MyBay Solars
        </h2>
      
      </div> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 py-6">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-xl w-70 shadow-lg border bg-gray-50">
              <Sun size={45} className="text-yellow-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Clean Energy</h4>
              <p className="text-base text-black">Harnessing the power of the sun to fuel sustainable living.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-xl shadow-lg border bg-gray-50">
              <ShieldCheck size={45} className="text-green-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Quality Assurance</h4>
              <p className="text-base text-black">Top-tier equipment with guaranteed performance and durability.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-xl shadow-lg border bg-gray-50">
              <Users size={45} className="text-blue-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Expert Team</h4>
              <p className="text-base text-black">Experienced engineers and technicians committed to excellence.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-xl shadow-lg border bg-gray-50">
              <Leaf size={45} className="text-green-700 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Eco-Friendly</h4>
              <p className="text-base text-black">Reducing carbon emissions and protecting the planet for generations.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUs