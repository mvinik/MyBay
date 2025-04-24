import React from 'react'
import { motion } from 'framer-motion'
import { LucideSearchCheck, Wrench, DollarSign } from 'lucide-react'

const steps = [
  {
    title: 'Step 1: Consultation',
    description: 'Schedule a consultation with our experts to discuss your energy needs.',
    icon: <LucideSearchCheck className="text-white w-8 h-8" />,
    bgColor: 'bg-gradient-to-r from-purple to-indigo-500',
  },
  {
    title: 'Step 2: Installation',
    description: 'Our certified professionals will install your system quickly and efficiently.',
    icon: <Wrench className="text-white w-8 h-8" />,
    bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
  },
  {
    title: 'Step 3: Enjoy Savings',
    description: 'Start saving on your energy bills and enjoy cleaner living, with minimal maintenance.',
    icon: <DollarSign className="text-white w-8 h-8" />,
    bgColor: 'bg-gradient-to-r from-yellow-500 to-orange-400',
  },
]

const HowIW = () => {
  return (
    <div className=" py-16 px-4 md:px-20">

      {/* 🔷 Custom Heading */}
      <div className="flex items-center justify-center gap-x-3 py-5">
        <div className="border w-24 border-purple" />
        <p className="text-purple font-bold text-4xl uppercase tracking-wider">
          How it's Works
        </p>
        <div className="border w-24 border-purple" />
      </div>

      {/* 🔹 Steps Grid */}
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border-t-4"
          >
            <div className={`w-14 h-14 mb-3 flex items-center justify-center rounded-full ${step.bgColor} mb-5`}>
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
            <p className="text-black leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HowIW
