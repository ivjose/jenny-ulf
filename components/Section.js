import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Section = ({ blok }) => {
  console.log(blok);
  return (
    <section className="flex min-h-screen justify-center items-center">
      <div className="py-24 px-2 max-w-xl md:max-w-2xl mx-auto">
        <h2 {...storyblokEditable(blok)} className=" text-center text-3xl font-medium text-gray-900 mb-12 md:text-4xl">{blok?.title}</h2>
        <div {...storyblokEditable(blok)} className="prose prose-xl md:prose-2xl    prose-p:mb-2  prose-p:mt-2   md:prose-p:mb-1  md:prose-p:mt-1 ">
          {render(blok?.content)}
        </div>
      </div>
    </section>
  );
};

export default Section;
