"use client";
import Link from "next/link";
import { listData } from "@/hooks/useData";
import SkeletonHome from "../Skeleton/SkeletonHome";
import List from "@/interface/list";
import { formatViews } from "@/utils/format";

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
            <a href={`/watch/${item.url}`} className="relative aspect-video">
              <img
                className={`block w-full h-full object-cover relative`}
                src={item.thumbnail}
              />
            </a>
            <div className="flex relative mt-2">
              <Link href={`/channel/${item.uploaderUrl}`} className="w-12 h-12">
                <img
                  src={item.uploaderAvatar}
                  className="w-12 h-12 rounded-full"
                />
              </Link>
              <div className="w-full flex flex-col ml-2">
                <Link
                  href={`/watch/${item.url}`}
                  className="font-bold whitespace-normal overflow-hidden line-clamp-2 text-ellipsis"
                >
                  {item.title}
                </Link>
                <Link
                  href={`/channel/${item.uploaderUrl}`}
                  className="text-secondary-text text-sm"
                >
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
