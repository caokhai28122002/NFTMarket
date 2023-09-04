import { FCC } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';


interface Props {
  prevIndex: string;
  nextIndex: string;
}

const IndexText: FCC<Props> = ({ prevIndex, nextIndex }) => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 0, y: 50 }}
        transition={{ type: 'tween', duration: 1 }}
        className="-mr-8 scale-100 text-[#E05BFF] font-bold text-6xl leading-5"
      >
        {prevIndex}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ type: 'tween', duration: 1 }}
        className="scale-100 text-[#E05BFF] font-bold text-6xl leading-5"
      >
        {nextIndex}
      </motion.p>
    </div>
  );
};

export default IndexText;