import { storyblokEditable } from "@storyblok/react";

import { motion } from "framer-motion";
import dayjs from "dayjs";

import Leaves from "./Leaves";
import ArrowDown from "./ArrowDown";

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
  const time = dayjs(blok.date).format("h:mm A");
  const date = dayjs(blok.date).format("MMM D, YYYY");

  console.log(dayjs(blok.date).format("h:mm a"), "asdfdf");
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
        className="flex flex-row items-center   mb-2 md:mb-4 -mt-8 md:-mt-24"
      >
        <h1 className="custom-font text-center text-[#004f88] drop-shadow-lg flex flex-col items-center">
          <span
            {...storyblokEditable(blok)}
            className="block text-4xl  sm:text-6xl md:text-8xl"
          >
            {blok?.bride_first_name} {blok?.bride_last_name}
          </span>

          <span className="block text-2xl sm:text-4xl md:text-6xl my-2 md:my-4">&amp;</span>

          <span
            {...storyblokEditable(blok)}
            className="block text-4xl sm:text-6xl md:text-8xl "
          >
            {blok?.groom_first_name} {blok?.groom_last_name}
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
      <ArrowDown className="fill-[#004f88] absolute bottom-6 m-auto left-0 right-0 " />
    </motion.section>
  );
};

export default HeroBanner;
