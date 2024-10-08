import { HighLightComponent } from "@/components/Hero/HighLight";
import { Layout_ } from "@/components/Layout";
import { Highlight } from "@/components/ui/hero-highlight";
import { useRouter } from "next/router";
import { useGetOnePostQuery } from "../../../generated/graphql";
import { Loading } from "@/components/ui/LoadingComponent";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { Fragment } from "react";
import Moment from "moment";
import { TracingBeam } from "@/components/ui/tracing-beam";

const BlogPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { loading, error, data } = useGetOnePostQuery({
    variables: { id: String(id) },
  });

  return (
    <Layout_>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <HighLightComponent
            img={data?.post?.featuredImage?.node?.sourceUrl!}
            blog
            shortDescription={
              <>
                <p className="text-sm font-normal pt-4">
                  <b>Uploaded:</b>{" "}
                  <Highlight className="text-black dark:text-white font-semibold">
                    {Moment(data?.post?.date).format("MMMM Do YYYY, h:mm:ss a")}
                  </Highlight>
                </p>
              </>
            }
            title={
              <>
                <Highlight className="text-black dark:text-white">
                  {data?.post?.title}
                </Highlight>
              </>
            }
          />

          <TracingBeam className="px-6">
            <div className="border-t flex flex-col justify-center items-center min-h-screen px-4">
              <div className="flex w-full justify-center p-4">
                {data?.post?.tags?.edges?.map((tag) => (
                  <span
                    key={tag?.node?.id}
                    className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
                  >
                    <b>{tag?.node?.name?.toUpperCase()}</b>
                  </span>
                ))}
              </div>
              <div
                className="w-full h-full px-4 prose"
                dangerouslySetInnerHTML={{ __html: data?.post?.content! }}
              />
            </div>{" "}
          </TracingBeam>
        </Fragment>
      )}
    </Layout_>
  );
};

export default BlogPage;
