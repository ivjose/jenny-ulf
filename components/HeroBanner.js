import { storyblokEditable } from "@storyblok/react";

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

const HeroBanner = ({ blok }) => {
  const newDate = new Date(blok.date);
  const time = newDate.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });
  const date = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="flex h-screen justify-center items-center flex-col  snap-start"
    >
      <motion.div className="-mt-32" variants={textAnimate}>
        <Leaves />
      </motion.div>

      <motion.div
        variants={textAnimate}
        className="flex flex-row items-center  mb-2 md:mb-4 -mt-8 md:-mt-24"
      >
        <div className="text-[7rem] md:text-[12rem] mr-2 custom-font drop-shadow-lg text-[#004f88]">
          &
        </div>
        <h1 className="custom-font text-[#004f88] drop-shadow-lg">
          <span>
            <span
              {...storyblokEditable(blok)}
              className="block text-7xl md:text-9xl"
            >
              {blok?.bride_first_name}
            </span>
            {/* <span className="block text-xl">{blok?.bride_last_name}</span> */}
          </span>

          <span>
            <span
              {...storyblokEditable(blok)}
              className="block indent-8 md:indent-11 text-7xl md:text-9xl "
            >
              {blok?.groom_first_name}
            </span>
            {/* <span className="block text-xl">{blok?.groom_last_name}</span> */}
          </span>
        </h1>
      </motion.div>
      <motion.div variants={textAnimate} className="flex flex-col text-center ">
        <span className="text-md md:text-xl font-light mb-1 md:mb-2 text-slate-400">
          are getting married
        </span>
        <span className="text-md md:text-xl font-light mb-2 md:mb-4 text-slate-400">
          on
        </span>
        <span
          {...storyblokEditable(blok)}
          className="text-xl font-semibold md:text-2xl italic text-[#004f88]"
        >
          {date} @ {time}
        </span>
      </motion.div>
      <ArrowDown className="fill-[#004f88] absolute bottom-6 m-auto left-0 right-0 "  />
    </motion.section>
  );
};

export default HeroBanner;
