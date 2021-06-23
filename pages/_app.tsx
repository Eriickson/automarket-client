import { ChakraProvider, StylesProvider } from "@chakra-ui/react";
import { defaultTheme, Global } from "@/themes";
import { AppProps } from "next/dist/next-server/lib/router/router";

import { Provider as NextAuthProvider } from "next-auth/client";

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
