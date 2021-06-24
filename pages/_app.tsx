import React from "react";
import Router from "next/router";

import { ChakraProvider, StylesProvider } from "@chakra-ui/react";
import { defaultTheme, Global } from "@/themes";
import { AppProps } from "next/dist/next-server/lib/router/router";

import { Provider as NextAuthProvider } from "next-auth/client";

// Bar-Progress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider value={{}}>
      <NextAuthProvider session={pageProps.session}>
        <ChakraProvider resetCSS theme={defaultTheme}>
          <Global />
          <Component {...pageProps} />
        </ChakraProvider>
      </NextAuthProvider>
    </StylesProvider>
  );
}

export default MyApp;
