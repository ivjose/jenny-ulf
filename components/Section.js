import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import Leaves from "./Leaves";
import ArrowDown from './ArrowDown'

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const contentAnimate = {
  offscreen: { y: 100, opacity: 0, scale: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Section = ({ blok }) => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="flex flex-col h-screen justify-center items-center snap-start relative"
    >
      <motion.div
        className=" max-w-[300px] md:max-w-md mx-auto"
        variants={textAnimate}
      >
        <Leaves />
      </motion.div>
      <motion.h2
        {...storyblokEditable(blok)}
        variants={textAnimate}
        className="italic  -mt-2 md:-mt-8 text-center text-4xl font-medium text-[#004f88] mb-4 md:mb-6 md:text-5xl"
      >
        {blok?.title}
      </motion.h2>
      <div className="pb-10 px-2 max-w-xl md:max-w-2xl mx-auto ">
        <motion.div
          {...storyblokEditable(blok)}
          variants={contentAnimate}
          className="prose prose-xl md:prose-2xl  font-light  prose-p:mb-2  prose-p:mt-2   md:prose-p:mb-1  md:prose-p:mt-1 text-slate-400"
        >
          {render(blok?.content)}
        </motion.div>
      </div>
      <ArrowDown className="fill-[#004f88] absolute bottom-6 m-auto left-0 right-0 "  />
    </motion.section>
  );
};

export default Section;
