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
        <Leaves light />
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
          className="inline-flex items-center rounded-full border border-transparent bg-white text-cyan-800 px-12 py-3 text-xl font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004f88] focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          {blok?.email}
        </a>
      </motion.span>
    </motion.div>
  );
};

export default Cta;
