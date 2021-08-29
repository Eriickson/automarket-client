import React, { FC } from "react";
import Router from "next/router";

import { ChakraProvider, StylesProvider } from "@chakra-ui/react";
import { defaultTheme, Global } from "@/themes";
import { UIContextProvider } from "@/context";
import { MainProvider } from "@/providers";
import { AppProps } from "next/dist/next-server/lib/router/router";

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

import "react-medium-image-zoom/dist/styles.css";

import "rc-slider/assets/index.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StylesProvider value={{}}>
      <ChakraProvider resetCSS theme={defaultTheme}>
        <Global />
        <UIContextProvider>
          <MainProvider {...pageProps}>
            <Component {...pageProps} />
          </MainProvider>
        </UIContextProvider>
      </ChakraProvider>
    </StylesProvider>
  );
};

export default MyApp;
