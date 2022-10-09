/* eslint-disable @next/next/no-html-link-for-pages */
import { storyblokEditable } from "@storyblok/react";
import { motion } from "framer-motion";
import Leaves from "./Leaves";
const contentAnimate = {
  offscreen: { y: 100, opacity: 0, scale: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Cta = ({ blok }) => {
  console.log(blok, "CTA!!");
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="bg-[#004f88] flex flex-col h-screen justify-center items-center snap-start"
    >
      <motion.div
        className=" max-w-[300px] md:max-w-md mx-auto"
        variants={contentAnimate}
      >
        <Leaves color="white" />
      </motion.div>
      <motion.h2
        {...storyblokEditable(blok)}
        variants={contentAnimate}
        className="italic  -mt-2 md:-mt-8 text-center text-xl font-medium text-white mb-8 md:mb-12 md:text-2xl"
      >
        {blok?.text}
      </motion.h2>
      <motion.span variants={contentAnimate}>
        <a
          href={`mailto:${blok?.email}`}
          className="inline-flex items-center rounded-full border border-transparent bg-white text-cyan-800 px-12 py-6 text-2xl font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004f88] focus:ring-offset-2"
        >
          {blok?.email}
        </a>
      </motion.span>
    </motion.div>
  );
};

export default Cta;
