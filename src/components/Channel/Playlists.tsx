import { channelTabsData } from "@/hooks/useData";
import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  tab: string;
  tabQuery: string;
}

function Playlists({ tab, tabQuery }: Props) {
  const { data } = channelTabsData(tabQuery);
  return (
    <>
      {tab === "playlists" &&
        data?.content.map((item: any, index: number) => (
          <Link href={item.url} key={index} className="block px-2 my-5">
            <div className="relative">
              <img
                src={item.thumbnail}
                alt=""
                className="rounded-[12px] relative"
              />
              <div className="group absolute top-0 bottom-0 right-0 left-0 rounded-[12px] hover:bg-[rgba(0,0,0,0.6)]">
                <span className="hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white font-medium uppercase group-hover:flex">
                  <Play /> <span className="ml-1">Play all</span>
                </span>
              </div>
              <div className="flex items-center absolute bottom-[10px] right-[10px] bg-[rgba(0,0,0,0.5)] h-[20px] px-[7px] rounded-[4px] text-white">
                {item.videos} Videos
              </div>
            </div>
            <div className="mt-2 text-[14px] font-medium whitespace-normal overflow-hidden line-clamp-2 text-ellipsis">
              {item.name}
            </div>
          </Link>
        ))}
    </>
  );
}

export default Playlists;
