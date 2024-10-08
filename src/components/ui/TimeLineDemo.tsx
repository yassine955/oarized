import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useGetAllJourneysQuery } from "../../../generated/graphql";
import { Loading } from "./LoadingComponent";

export function TimelineDemo() {
  const { loading, error, data } = useGetAllJourneysQuery({
    fetchPolicy: "no-cache",
  });

  return (
    <div className="w-full mt-14">
      {loading ? <Loading /> : <Timeline data={data!} />}
    </div>
  );
}
