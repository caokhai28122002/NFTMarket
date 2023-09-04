import { FCC } from '@/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';


interface Props {
  text: string;
  className?: string;
  textClassName?: string;
}

const AnimatedText: FCC<Props> = ({ text, className, textClassName }) => {
  const letters = useMemo(() => Array.from(text), [text]);

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
      }),
    }),
    []
  );

  const child = useMemo(
    () => ({
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: 'spring',
          damping: 12,
          stiffness: 300,
        },
      },
      hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
          type: 'spring',
          damping: 12,
          stiffness: 300,
        },
      },
    }),
    []
  );

  return (
    <motion.div
      className={clsx('flex flex-wrap', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.2 }}
    >
      {letters.map((letter, index) => (
        <motion.span className={textClassName} variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;