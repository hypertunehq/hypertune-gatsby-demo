import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import hypertune from "../lib/hypertune";

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse,
) {
  await hypertune.initFromServerIfNeeded();

  const rootNode = hypertune.root({
    context: {
      user: { id: "test_id", name: "Test", email: "test@test.com" },
    },
  });

  const exampleFlag = rootNode.exampleFlag().get(/* fallback */ false);
  console.log("Gatsby Functions flag:", exampleFlag);

  res.send({ exampleFlag });
}
