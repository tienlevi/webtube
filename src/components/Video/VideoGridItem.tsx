"use client";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { useList } from "@/hooks/useList";
import Loading from "../Loading/Loading";
import List from "@/interface/list";
import { formatViews } from "@/utils/format";

export function VideoGridItem() {
  // const durations = useFormatDuration(duration);
  const { data, isLoading } = useList();

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </>
      ) : (
        data.map((item: List, index: number) => (
          <div key={index} className="flex flex-col">
            <a href={`/watch/${item.url}`} className="relative aspect-video">
              {/* <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
              {formatViews(item.views)}
              </div> */}
              <img
                className={`block w-full h-full object-cover relative`}
                src={item.thumbnail}
              />
            </a>
            <div className="flex relative">
              <Link href={`/channel/${item.uploaderUrl}`} className="w-12 h-12">
                <img
                  src={item.uploaderAvatar}
                  className="w-12 h-12 rounded-full"
                />
              </Link>
              <div className="w-[80%] flex flex-col ml-2">
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
