import Head from "next/head";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from 'next/router'

const textAnimate = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    // transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export default function Home() {
const [error, setError] = useState();
  const inputField = useRef(null)
  const router = useRouter()



  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputField.current?.value, 'ALFONSO');
   if (inputField.current?.value !== 'ALFONSO') {
    return setError("You have entered an invalid password")
   }
   router.push('/details?status=success')
    // console.log(e, "ASDASD");
  };



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
        className="bg-[#004f88] flex flex-col w-full justify-center items-center h-screen"
      >
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 mb-10 w-[250px]">
            <input
              ref={inputField}
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-sky-300 peer"
              placeholder=" "
              onChange={(event) => {
      
                if (event.target.value && error) {
                  setError()
                }
          
              }}
              required
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your password
            </label>
            {error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">You have entered an invalid password</p>}
            
          </div>
          <motion.span variants={textAnimate}>
            {/* <Link href="/details"> */}
              <button type="submit" className="inline-flex items-center rounded-full border border-transparent bg-white text-cyan-800 px-12 py-3 text-xl font-medium shadow-sm hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-[#004f88] focus:ring-offset-2">
                Submit
              </button>
            {/* </Link> */}
          </motion.span>
        </form>
      </motion.div>
    </div>
  );
}
