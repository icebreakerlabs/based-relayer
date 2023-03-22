import type { AppProps } from "next/app";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import { BaseGoerli } from "@thirdweb-dev/chains";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react';

import { env } from "../utils/env";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider activeChain={BaseGoerli}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChakraProvider>
  );
}
function Component() {
  const { contract, isLoading } = useContract("0x38e6F1000cB611B06edFF9c271aEF058675a6c2f");
}