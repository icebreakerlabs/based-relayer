import { ChainId } from "@thirdweb-dev/react";
import { BaseGoerli } from "@thirdweb-dev/chains";

type Env = "development" | "production";


type EnvConfig = {
  signatureDropAddress: string;
  activeChain: ChainId;
};

export const envs: Record<Env, EnvConfig> = {
  production: {
    activeChain: 84531,
    signatureDropAddress: "0x38e6F1000cB611B06edFF9c271aEF058675a6c2f",
  },
  development: {
    activeChain: 84531,
    signatureDropAddress: "0x38e6F1000cB611B06edFF9c271aEF058675a6c2f",
  }
};

const ENVIRONMENT: Env = "production";

export const env = envs[ENVIRONMENT];
