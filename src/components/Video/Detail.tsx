import { memo } from "react";
import { detailData } from "@/hooks/useData";
import React from "react";
import Section from "../Section/Section";
import Link from "next/link";
import { formatSubscribe } from "@/utils/format";

interface Props {
  id: string;
}

function Detail({ id }: Props) {
  const { data } = detailData(id);

  return (
    <div className="mt-4">
      <Section className="">
        <div className="w-[65%] px-3">
          <div className="text-[18px] font-bold">{data?.title}</div>
          <Link
            href={`/channel/${data?.uploaderUrl}`}
            className="flex relative mt-2"
          >
            <div className="w-12 h-12 aspect-video">
              <img
                src={data?.uploaderAvatar}
                className="w-full h-fw-full rounded-full"
              />
            </div>
            <div className="w-full flex flex-col ml-2">
              <div className="font-medium whitespace-normal overflow-hidden line-clamp-2 text-ellipsis">
                {data?.uploader}
              </div>
              <div className="text-[#606060] text-sm">
                {formatSubscribe(data?.uploaderSubscriberCount as number)}{" "}
                subcribers
              </div>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}

export default memo(Detail);
