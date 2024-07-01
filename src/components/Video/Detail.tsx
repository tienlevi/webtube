import { Bell, ChevronDown, ThumbsUp, ThumbsDown, Forward } from "lucide-react";
import Link from "next/link";
import { detailData } from "@/hooks/useData";
import Section from "../Section/Section";
import {
  formatDate,
  formatDuration,
  formatSubscribe,
  formatViews,
} from "@/utils/format";
import { Button } from "../Button/Button";

interface Props {
  id: string;
}

function Detail({ id }: Props) {
  const { data } = detailData(id);

  return (
    <div className="relative mt-4">
      <Section className="">
        <div className="flex">
          <div className="w-[65%] px-3">
            <div className="text-[18px] font-bold">{data?.title}</div>
            <div className="flex items-center justify-between border-b border-b-[#F2F2F2]">
              <div className="flex items-center">
                <Link
                  href={`${data?.uploaderUrl}`}
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
                <Button
                  type="button"
                  className="flex items-center justify-between ml-4 w-[150px] h-[36px] px-4 bg-[rgba(0,0,0,0.05)] rounded-[16px]"
                >
                  <Bell className="w-5 h-5" />
                  <p className="text-[14px]">Subcribed</p>
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex">
                <div className="flex bg-[rgba(0,0,0,0.05)] rounded-[16px] h-[36px]">
                  <Button
                    variant={"ghost"}
                    className="px-4 flex items-center rounded-l-[16px] hover:bg-gray-300"
                  >
                    <ThumbsUp />
                    <p className="px-2">1.2k</p>
                  </Button>
                  <div className="border my-2 border-[rgba(0,0,0,0.5)]" />
                  <Button
                    variant={"ghost"}
                    className="px-4 flex items-center rounded-r-[16px] hover:bg-gray-300"
                  >
                    <ThumbsDown />
                    <p className="px-2">23</p>
                  </Button>
                </div>
                <Button
                  variant={"ghost"}
                  className="flex items-center bg-[rgba(0,0,0,0.05)] h-[36px] rounded-[16px] ml-4 hover:bg-gray-300"
                >
                  <Forward />
                  <p className="mx-2">Share</p>
                </Button>
                <Button
                  variant={"ghost"}
                  className="flex items-end justify-center bg-[rgba(0,0,0,0.05)] w-[36px] h-[36px] rounded-[16px] ml-4 hover:bg-gray-300"
                >
                  <p className="text-black text-[20px]">...</p>
                </Button>
              </div>
            </div>
            <div className="bg-[#F2F2F2] my-4 p-4 rounded-[12px]">
              <div className="font-semibold">
                {formatViews(data?.views as number)} Views • {""}
                {formatDate(data?.uploadDate as any)}
              </div>
              <div className="my-6">{data?.title}</div>
              <div
                dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}
              />
            </div>
          </div>
          <div className="w-[35%]">
            {data?.relatedStreams?.map((item, index: number) => (
              <div key={index} className="flex items-start my-2">
                <Link href={item.url} className="relative w-[40%] block">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="relative w-[200px] h-[120px] object-cover rounded-[8px]"
                  />
                  <div className="flex items-center absolute bottom-[10px] right-[20px] bg-[rgba(0,0,0,0.5)] h-[20px] px-[7px] rounded-[4px] text-white">
                    {formatDuration(item.duration as any)}
                  </div>
                </Link>
                <div className="w-[60%] ml-2">
                  <Link
                    href={item.url}
                    className="text-[16px] font-medium whitespace-normal overflow-hidden line-clamp-2 text-ellipsis"
                  >
                    {item.title}
                  </Link>
                  <Link
                    href={item.uploaderUrl || ""}
                    className="text-[12px] text-[rgb(96,96,96)] font-normal"
                  >
                    {item.uploaderName}
                  </Link>
                  <div className="text-secondary-text text-sm">
                    {formatViews(item.views)} Views • {item.uploadedDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Detail;
