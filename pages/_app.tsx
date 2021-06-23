import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme, Global } from "@/themes";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Global />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
