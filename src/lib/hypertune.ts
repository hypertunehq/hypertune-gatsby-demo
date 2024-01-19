import { initializeHypertune } from "../generated/generated";

const hypertune = initializeHypertune(
  {},
  {
    token: process.env.GATSBY_HYPERTUNE_TOKEN,
    shouldListenForUpdates: true,
  },
);

export default hypertune;
