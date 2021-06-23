import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme, Global } from "@/themes";
import { AppProps } from "next/dist/next-server/lib/router/router";

import { Provider as NextAuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={defaultTheme}>
        <Global />
        <Component {...pageProps} />
      </ChakraProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
