import { storyblokInit, apiPlugin } from "@storyblok/react";
 import '../styles/globals.css'


 import HeroBanner from "../components/HeroBanner";
import Section from "../components/Section";
import Page from "../components/Page";

const components = {
  'hero-banner': HeroBanner,
  section: Section,
  page: Page,
};

storyblokInit({
  accessToken:process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}



export default MyApp
