import { channelData } from "@/hooks/useData";
import { memo } from "react";
import Section from "../Section/Section";
import Banner from "../Banner/Banner";
import { formatDate, formatSubscribe, formatViews } from "@/utils/format";
import Link from "next/link";

interface Props {
  id: string;
}

function ChannelDetail({ id }: Props) {
  const { data } = channelData(id);
  return (
    <div className="block">
      <Section className="">
        <Banner image={data?.bannerUrl} className="rounded-[12px]" />
        <div className="mt-8 flex items-center">
          <div className="block">
            <img src={data?.avatarUrl} alt="" className="rounded-full" />
          </div>
          <div className="w-[40%] flex flex-col ml-5">
            <span className="text-[36px] font-bold">{data?.name}</span>
            <span className="text-[14px] text-[rgb(96,96,96)] py-[10px]">
              {formatSubscribe(data?.subscriberCount as number)} subscribers
            </span>
            <span className="text-[14px] text-[rgb(96,96,96)] py-[10px] overflow-hidden text-ellipsis whitespace-nowrap">
              {data?.description}
            </span>
          </div>
        </div>
        <div className="flex items-center w-full mt-3 border-b border-[#9b9b9b]">
          <div
            className={`relative mr-6 text-[15px] text-[#606060] cursor-pointer font-bold justify-start h-[40px] before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-black`}
          >
            Videos
          </div>
          <div
            className={`relative mr-6 text-[15px] text-[#606060] cursor-pointer font-medium justify-start h-[40px] before:content-[''] before:absolute before:bottom-0 before:w-full hover:before:h-[3px] before:bg-black`}
          >
            Live
          </div>
          <div
            className={`relative mr-6 text-[15px] text-[#606060] cursor-pointer font-medium justify-start h-[40px]  before:content-[''] before:absolute before:bottom-0 before:w-full hover:before:h-[3px] before:bg-black`}
          >
            About
          </div>
        </div>
        <div className="grid grid-cols-4 mt-4">
          {data?.relatedStreams?.map((item, index: number) => (
            <Link href={item.url} key={index} className="block mr-2 my-5">
              <div>
                <img src={item.thumbnail} alt="" className="rounded-[12px]" />
              </div>
              <div className="mt-1 text-[14px] font-medium whitespace-normal overflow-hidden line-clamp-2 text-ellipsis">
                {item.title}
              </div>
              <div className="text-[12px] text-[rgb(96,96,96)] mt-1">
                {formatViews(item.views)} Views •{" "}
                {formatDate(item.uploaded as any)}
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default memo(ChannelDetail);
