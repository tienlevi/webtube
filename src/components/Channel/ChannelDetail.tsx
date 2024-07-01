import { channelData } from "@/hooks/useData";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Play } from "lucide-react";
import Section from "../Section/Section";
import Banner from "../Banner/Banner";
import {
  formatDate,
  formatDuration,
  formatSubscribe,
  formatViews,
} from "@/utils/format";
import Link from "next/link";
import { getChannelTabs, loadMoreVideos } from "@/services/channel";
import { NextPage } from "@/interface/channel";
import { CircleLoader } from "react-spinners";
import Shorts from "./Shorts";
import Livestream from "./Livestream";
import Playlists from "./Playlists";
import { tabs } from "@/constants";

interface Props {
  id: string;
}

function ChannelDetail({ id }: Props) {
  const { data } = channelData(id);
  const [tab, setTab] = useState<string>("");
  const [nextPage, setNextPage] = useState<NextPage>();
  const element = useRef<HTMLDivElement>(null);

  const getNextVideos = async () => {
    const response = await loadMoreVideos(id, data?.nextpage!);
    console.log(response);
    setNextPage(response);
  };

  const tabFilter = data?.tabs?.find((item) => item.name === tab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === false) {
            getNextVideos();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px" }
    );

    observer.observe(element.current as any);

    return () => observer.unobserve(element.current as any);
  }, [data?.nextpage]);

  const listVideos = [
    ...(data?.relatedStreams ?? []),
    ...(nextPage?.relatedStreams ?? []),
  ];

  return (
    <div className="block">
      <Section className="">
        <Banner image={data?.bannerUrl} className="rounded-[12px] px-2" />
        <div className="mt-8 px-2 flex items-center">
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
        <div
          ref={element}
          className="flex items-center w-full mt-3 px-2 border-b border-[#9b9b9b]"
        >
          {tabs.map((item, index) => (
            <div
              key={index}
              className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer justify-start h-[40px] ${
                tab === item.item &&
                "text-black before:content-[''] before:absolute before:bottom-0 before:w-full hover:before:h-[3px] before:h-[3px] before:bg-black"
              }`}
              onClick={() => setTab(item.item)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 mt-4">
          {tab === "" && listVideos.length > 0 ? (
            listVideos?.map((item, index: number) => (
              <Link href={item.url} key={index} className="block px-2 my-5">
                <div className="relative w-full">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="rounded-[12px] w-full relative"
                  />
                  <div className="flex items-center absolute bottom-[10px] right-[10px] bg-[rgba(0,0,0,0.5)] h-[20px] px-[7px] rounded-[4px] text-white">
                    {formatDuration(item.duration as any)}
                  </div>
                </div>
                <div className="mt-1 text-[14px] font-medium whitespace-normal overflow-hidden line-clamp-2 text-ellipsis">
                  {item.title}
                </div>
                <div className="text-[12px] text-[rgb(96,96,96)] mt-1">
                  {formatViews(item.views)} Views •{" "}
                  {formatDate(item.uploaded as any)}
                </div>
              </Link>
            ))
          ) : (
            <CircleLoader />
          )}
          <Shorts tab="shorts" tabQuery={tabFilter?.name!} />
          <Livestream tab="livestreams" tabQuery={tabFilter?.name!} />
          <Playlists tab="playlists" tabQuery={tabFilter?.name!} />
          {tab === "about" && (
            <div>
              <p>{data?.description}</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

export default ChannelDetail;
