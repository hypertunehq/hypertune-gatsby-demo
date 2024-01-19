import { GetServerData } from "gatsby";
import * as React from "react";
import hypertune from "../lib/hypertune";
import { InitResponseBody } from "hypertune";
import ClientExample from "../lib/ClientExample";

type ServerData = {
  exampleFlag: boolean;
  hypertuneInitData: InitResponseBody | null;
};

export const getServerData: GetServerData<ServerData> = async () => {
  await hypertune.initFromServerIfNeeded();

  const rootNode = hypertune.root({
    context: {
      user: { id: "test_id", name: "Test", email: "test@test.com" },
    },
  });

  const exampleFlag = rootNode.exampleFlag().get(/* fallback */ false);

  return {
    props: { exampleFlag, hypertuneInitData: hypertune.getInitData() },
  };
};

function Page({ serverData }: { serverData: ServerData }) {
  return (
    <div>
      <div>
        Server-side props flag:
        {String(serverData.exampleFlag)}
      </div>
      <ClientExample hypertuneInitData={serverData.hypertuneInitData} />
    </div>
  );
}

export default Page;
