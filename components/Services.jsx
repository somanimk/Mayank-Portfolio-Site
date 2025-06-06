import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I offer high-quality frontend development services including responsive UI design, interactive web applications, CMS-based frontend integration, dashboards, admin panels, and polished websites using React.js, Next.js, and Tailwind CSS. I collaborate with backend teams for API integration and complete user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => {
          const isExpanded = expandedIndex === index;
          const previewText = description.slice(0, 90) + '...';

          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {isExpanded ? description : previewText}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="flex items-center gap-2 text-sm mt-5 text-black dark:text-white"
              >
                {isExpanded ? 'Read less' : 'Read more'}
                <Image alt="" src={assets.right_arrow} className="w-4" />
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
