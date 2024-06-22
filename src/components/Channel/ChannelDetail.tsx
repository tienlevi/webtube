import { channelData } from "@/hooks/useData";
import { useState, memo, useEffect } from "react";
import Section from "../Section/Section";
import Banner from "../Banner/Banner";
import { formatDate, formatSubscribe, formatViews } from "@/utils/format";
import Link from "next/link";
import { getChannelShorts } from "@/services/channel";
import { Shorts } from "@/interface/channel";

interface Props {
  id: string;
}

function ChannelDetail({ id }: Props) {
  const { data } = channelData(id);
  const [shortsItem, setShortsItem] = useState<Shorts>();
  const [tab, setTab] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const response = await getChannelShorts(data?.tabs[0].data as string);
      setShortsItem(response);
    };
    getData();
  }, [data, tab]);

  console.log(shortsItem);

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
              tab === 1 &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full hover:before:h-[3px] before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab(1)}
          >
            Videos
          </div>
          <div
            className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer justify-start h-[40px] ${
              tab === 2 &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab(2)}
          >
            Shorts
          </div>
          <div
            className={`relative mr-10 text-[15px] text-[#606060] cursor-pointer font-medium justify-start h-[40px] ${
              tab === 3 &&
              "text-black before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-black"
            }`}
            onClick={() => setTab(3)}
          >
            About
          </div>
        </div>
        <div className="grid grid-cols-4 mt-4">
          {tab === 1 &&
            data?.relatedStreams?.map((item, index: number) => (
              <Link href={item.url} key={index} className="block px-2 my-5">
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
          {tab === 2 && (
            <>
              {shortsItem?.content?.map(
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
          {tab === 3 && (
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
