import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react';
import "../styles/globals.css";
import { activeChain } from "../utils/env";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider activeChain={activeChain}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_AUTOTASK_URL!
          }
        }
      }}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChakraProvider>
  );
}