import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

const textAnimate = {
    offscreen: { y: 100, opacity: 0, scale: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
export default function ErrorPage() {
  return (
    <div>
      <Head>
        <title>Jennie-Lynn D. Santos and Ulf Liersch</title>
        <meta
          content="Are getting married on Nov 11, 2022 @ 2PM"
          name="description"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:image" content="/jennie-and-ulf.jpg" />

        <meta property="og:title" content="Jennie and Ulf" />

        <meta
          property="og:description"
          content="Are getting married on Nov 11, 2022 @ 2PM"
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </Head>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="bg-[#004f88] flex flex-col w-full justify-center items-center h-screen"
      >
     
        <motion.h2
          variants={textAnimate}
          className="inline-flex items-center  italic -mt-2 md:-mt-8 text-center text-xl font-medium text-white mb-8 md:mb-12 md:text-2xl"
        >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 mr-2 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg> Sorry, you are not allowed <br/>to access this page
        </motion.h2>
        <motion.span variants={textAnimate}>
          <Link href="/">
            <a className="inline-flex items-center rounded-full border border-transparent bg-white text-cyan-800 px-12 py-3 text-xl font-medium shadow-sm hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-[#004f88] focus:ring-offset-2">
              Return to home
            </a>
          </Link>
        </motion.span>
      </motion.div>
    </div>
  );
}
