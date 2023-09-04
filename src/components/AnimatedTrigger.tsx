import { FCC } from '@/types';
import { AnimatePresence } from 'framer-motion';
import React from 'react';


interface Props {
  trigger?: boolean;
}

const AnimatedTrigger: FCC<Props> = ({ trigger, children }) => {
  return <AnimatePresence>{trigger && children}</AnimatePresence>;
};

export default AnimatedTrigger;