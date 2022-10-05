import { storyblokEditable } from "@storyblok/react";

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
    <section className="flex min-h-screen justify-center items-center flex-col">
      <div className="flex flex-row items-center  mb-2 md:mb-4">
        <div className="text-[7rem] md:text-[12rem] mr-2 custom-font text-[#004f88]">&</div>
        <h1 className="custom-font text-[#004f88] drop-shadow-sm">
          <span>
            <span className="block text-7xl md:text-9xl">
              {blok?.bride_first_name}
            </span>
            {/* <span className="block text-xl">{blok?.bride_last_name}</span> */}
          </span>

          <span>
            <span className="block indent-8 md:indent-11 text-7xl md:text-9xl ">
              {blok?.groom_first_name}
            </span>
            {/* <span className="block text-xl">{blok?.groom_last_name}</span> */}
          </span>
        </h1>
      </div>
      <span className="text-md md:text-xl font-light mb-1 md:mb-2 text-slate-500">are getting married</span>
      <span className="text-md md:text-xl font-light mb-2 md:mb-4 text-slate-500">on</span>
      <span className="text-xl font-bold md:text-2xl italic text-[#004f88]">
        {date} @ {time}
      </span>
    </section>
  );
};

export default HeroBanner;
