import { storyblokInit, apiPlugin } from "@storyblok/react";
 import '../styles/globals.css'

storyblokInit({
  accessToken:process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin]
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}



export default MyApp
