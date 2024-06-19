"use client";
import Link from "next/link";
import { listData } from "@/hooks/useData";
import SkeletonHome from "../Skeleton/SkeletonHome";
import List from "@/interface/list";
import { formatDuration, formatViews } from "@/utils/format";

export function VideoGridItem() {
  const { data, isLoading } = listData();

  return (
    <>
      {isLoading ? (
        <>
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
          <SkeletonHome />
        </>
      ) : (
        data?.map((item: List, index: number) => (
          <div key={index} className="flex flex-col">
            <Link
              href={item.url}
              className="relative aspect-video rounded-[12px]"
            >
              <img
                className={`block w-full h-full object-cover relative rounded-[12px]`}
                src={item.thumbnail}
              />
              <div className="flex items-center absolute bottom-[10px] right-[10px] bg-[rgba(0,0,0,0.5)] h-[20px] px-[7px] rounded-[4px] text-white z-30">
                {formatDuration(item.duration as any)}
              </div>
            </Link>
            <div className="flex relative mt-2">
              <Link
                href={`/channel/${item.uploaderUrl}`}
                className="w-12 h-12 aspect-video"
              >
                <img
                  src={item.uploaderAvatar}
                  className="w-full h-fw-full rounded-full"
                />
              </Link>
              <div className="w-full flex flex-col ml-2">
                <Link
                  href={`/watch?v=${item.url}`}
                  className="font-bold whitespace-normal overflow-hidden line-clamp-2 text-ellipsis"
                >
                  {item.title}
                </Link>
                <Link href={item.url} className="text-secondary-text text-sm">
                  {item.uploaderName}
                </Link>
                <div className="text-secondary-text text-sm">
                  {formatViews(item.views)} Views • {item.uploadedDate}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
