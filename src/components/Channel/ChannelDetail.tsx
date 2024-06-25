import { channelData } from "@/hooks/useData";
import { useState, memo, useEffect } from "react";
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
import { getChannelTabs } from "@/services/channel";
import { Shorts } from "@/interface/channel";

interface Props {
  id: string;
}

function ChannelDetail({ id }: Props) {
  const { data } = channelData(id);
  const [tabItem, setTabItem] = useState<Shorts>();
  const [tab, setTab] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const tabFilter = data?.tabs.find((item) => item.name === tab);
      const response = await getChannelTabs(tabFilter?.data as any);
      setTabItem(response);
    };
    getData();
  }, [tab]);
  console.log(tabItem);

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
        <div className="flex items-center w-full mt-3 px-2 border-b border-[#9b9b9b]">
          <div
            className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer justify-start h-[40px] ${
              tab === "" &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full hover:before:h-[3px] before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab("")}
          >
            Videos
          </div>
          <div
            className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer justify-start h-[40px] ${
              tab === "shorts" &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab("shorts")}
          >
            Shorts
          </div>
          <div
            className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer justify-start h-[40px] ${
              tab === "livestreams" &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab("livestreams")}
          >
            Live
          </div>
          <div
            className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer justify-start h-[40px] ${
              tab === "playlists" &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab("playlists")}
          >
            Playlists
          </div>
          <div
            className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer font-medium justify-start h-[40px] ${
              tab === "about" &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab("about")}
          >
            About
          </div>
        </div>
        <div className="grid grid-cols-4 mt-4">
          {tab === "" &&
            data?.relatedStreams?.map((item, index: number) => (
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
                <div className="text-[12px] text-[rgb(96,96,96)] mt-1">
                  {formatViews(item.views)} Views •{" "}
                  {formatDate(item.uploaded as any)}
                </div>
              </Link>
            ))}
          {tab === "shorts" && (
            <>
              {tabItem?.content?.map(
                (item, index: number) =>
                  item.isShort === true && (
                    <Link key={index} className="px-2 mb-5" href={item.url}>
                      <div className="aspect-video">
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-full h-[500px] object-cover rounded-[15px]"
                        />
                      </div>
                      <div className="mt-2 text-black text-[17px] font-medium whitespace-normal overflow-hidden line-clamp-2 text-ellipsis">
                        {item.title}
                      </div>
                    </Link>
                  )
              )}
            </>
          )}
          {tab === "livestreams" &&
            tabItem?.content.map((item, index: number) => (
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
          {tab === "playlists" &&
            tabItem?.content.map((item, index: number) => (
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

export default memo(ChannelDetail);
