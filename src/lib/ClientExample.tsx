import * as React from "react";
import { InitResponseBody } from "hypertune";
import hypertune from "./hypertune";
import useHypertune from "./useHypertune";

export default function ClientExample({
  hypertuneInitData,
}: {
  hypertuneInitData?: InitResponseBody | null;
}): React.ReactElement {
  if (hypertuneInitData) {
    hypertune.initFromData(hypertuneInitData);
  }

  const rootNode = useHypertune();

  const exampleFlag = rootNode.exampleFlag().get(/* fallback */ false);

  return <div>Client Component flag: {String(exampleFlag)}</div>;
}
