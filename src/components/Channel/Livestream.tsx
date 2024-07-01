import { channelTabsData } from "@/hooks/useData";
import { formatDuration } from "@/utils/format";
import Link from "next/link";
import React from "react";

interface Props {
  tab: string;
  tabQuery: string;
}

function Livestream({ tab, tabQuery }: Props) {
  const { data } = channelTabsData(tabQuery);
  return (
    <>
      {tab === "livestreams" &&
        data?.content.map((item: any, index: number) => (
          <Link href={item.url} key={index} className="block px-2 my-5">
            <div className="relative">
              <img
                src={item.thumbnail}
                alt=""
                className="rounded-[12px] relative"
              />
              <div className="flex items-center absolute bottom-[10px] right-[10px] bg-[rgba(0,0,0,0.5)] h-[20px] px-[7px] rounded-[4px] text-white">
                {formatDuration(item.duration as any)}
              </div>
            </div>
            <div className="mt-1 text-[14px] font-medium whitespace-normal overflow-hidden line-clamp-2 text-ellipsis">
              {item.title}
            </div>
          </Link>
        ))}
    </>
  );
}

export default Livestream;
