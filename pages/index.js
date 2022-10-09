import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const textAnimate = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    // transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jennie and Ulf</title>
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
        className="bg-[#004f88] flex w-full justify-center items-center h-screen"
      >
        <motion.span variants={textAnimate}>
          <Link href="/details">
            <a className="inline-flex items-center rounded-full border border-transparent bg-white text-cyan-800 px-12 py-6 text-2xl font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004f88] focus:ring-offset-2">
              You&apos;re invited
            </a>
          </Link>
        </motion.span>
      </motion.div>
    </div>
  );
}
