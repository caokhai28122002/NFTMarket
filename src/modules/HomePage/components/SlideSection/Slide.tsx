import AnimatedTrigger from "@/components/AnimatedTrigger";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { FCC } from "@/types";

type IProps = {
  slideIndex: "01" | "02" | "03" | "04" | "05";
  slogan: string;
  title: string;
  description: string;
  isSelected: boolean;
};

const variants: Variants = {
  leftHide: {
    opacity: 0,
    x: -100,
    transition: { type: "tween", duration: 1 },
  },
  leftShow: { opacity: 1, x: 0, transition: { type: "tween", duration: 1 } },
  rightHide: {
    opacity: 0,
    x: 100,
    transition: { type: "tween", duration: 1 },
  },
  rightShow: { opacity: 1, x: 0, transition: { type: "tween", duration: 1 } },
  topHide: {
    opacity: 0,
    y: -100,
    transition: { type: "tween", duration: 1 },
  },
  topShow: { opacity: 1, y: 0, transition: { type: "tween", duration: 1 } },
  bottomHide: {
    opacity: 0,
    y: 100,
    transition: { type: "tween", duration: 1 },
  },
  bottomShow: { opacity: 1, y: 0, transition: { type: "tween", duration: 1 } },
  fadeHide: {
    opacity: 0,
    transition: { type: "tween", duration: 1.5 },
  },
  fadeShow: {
    opacity: 1,
    transition: { type: "tween", duration: 1.5 },
  },
};

const Slide: FCC<IProps> = ({
  children,
  description,
  slideIndex,
  slogan,
  title,
  isSelected,
}) => {
  return (
    <AnimatedTrigger trigger={isSelected}>
      <div className="flex w-full justify-between gap-32 px-1">
        <div className="flex flex-col w-fit min-w-[250px] gap-20">
          <div className="flex flex-col gap-8">
            <motion.span
              className="text-[#E05BFF] font-bold text-6xl"
              variants={variants}
              initial="fadeHide"
              animate="fadeShow"
            >
              {slideIndex}
            </motion.span>
            <motion.p
              variants={variants}
              initial={Number(slideIndex) % 2 === 0 ? "leftHide" : "rightHide"}
              animate={Number(slideIndex) % 2 === 0 ? "leftShow" : "rightShow"}
              className="text-white text-[25px] font-semibold max-w-[250px]"
            >
              {slogan}
            </motion.p>
          </div>
          {children}
        </div>
        <motion.div
          variants={variants}
          initial="bottomHide"
          animate="bottomShow"
          className="flex flex-col gap-8 w-fit"
        >
          <motion.p
            variants={variants}
            initial="bottomHide"
            animate="bottomShow"
            className="font-extrabold text-[100px] leading-tight text-white"
          >
            {title}
          </motion.p>
          <motion.div
            variants={variants}
            initial="fadeHide"
            animate="fadeShow"
            className="flex flex-col gap-2"
          >
            <p className="text-white font-medium text-xl">{description}</p>
            <div className="w-[200px] h-[10px] rounded bg-white"></div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col items-end gap-[60px] w-fit">
          <motion.div
            variants={slideIndex === "01" ? variants : {}}
            initial="rightHide"
            animate="rightShow"
            className={`h-[10px]  ${
              slideIndex === "01"
                ? "w-[100px] rounded bg-[#E05BFF]"
                : "w-[10px] rounded-full bg-white"
            }`}
          ></motion.div>
          <motion.div
            variants={slideIndex === "02" ? variants : {}}
            initial="rightHide"
            animate="rightShow"
            className={`h-[10px]  ${
              slideIndex === "02"
                ? "w-[100px] rounded bg-[#E05BFF]"
                : "w-[10px] rounded-full bg-white"
            }`}
          ></motion.div>
          <motion.div
            variants={slideIndex === "03" ? variants : {}}
            initial="rightHide"
            animate="rightShow"
            className={`h-[10px]  ${
              slideIndex === "03"
                ? "w-[100px] rounded bg-[#E05BFF]"
                : "w-[10px] rounded-full bg-white"
            }`}
          ></motion.div>
          <motion.div
            variants={slideIndex === "04" ? variants : {}}
            initial="rightHide"
            animate="rightShow"
            className={`h-[10px]  ${
              slideIndex === "04"
                ? "w-[100px] rounded bg-[#E05BFF]"
                : "w-[10px] rounded-full bg-white"
            }`}
          ></motion.div>
          <motion.div
            variants={slideIndex === "05" ? variants : {}}
            initial="rightHide"
            animate="rightShow"
            className={`h-[10px]  ${
              slideIndex === "05"
                ? "w-[100px] rounded bg-[#E05BFF]"
                : "w-[10px] rounded-full bg-white"
            }`}
          ></motion.div>
        </div>
      </div>
    </AnimatedTrigger>
  );
};

export default Slide;
