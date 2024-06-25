import useSearchQuery from "@/hooks/useSearchQuery";
import { formatDuration, formatSubscribe, formatViews } from "@/utils/format";
import Link from "next/link";
import List from "@/interface/list";
import SkeletonSearch from "../Skeleton/SkeletonSearch";

function SearchFilter() {
  const { data, isLoading } = useSearchQuery();

  return (
    <>
      {isLoading ? (
        <>
          <SkeletonSearch />
          <SkeletonSearch />
          <SkeletonSearch />
          <SkeletonSearch />
          <SkeletonSearch />
          <SkeletonSearch />
        </>
      ) : (
        data?.items?.map((item: List, index: number) =>
          item.type === "stream" ? (
            <div key={index} className="flex flex-row my-4">
              <Link
                href={`${item.url}`}
                className="w-[40%] h-fit relative aspect-video rounded-[12px]"
              >
                <img
                  className={`w-full h-fit object-cover rounded-[12px] relative`}
                  src={item.thumbnail}
                />
                <div className="flex items-center absolute bottom-[10px] right-[10px] bg-[rgba(0,0,0,0.5)] h-[20px] px-[7px] rounded-[4px] text-white">
                  {formatDuration(item.duration as any)}
                </div>
              </Link>
              <div className="w-[60%] flex relative ml-4">
                <Link href={`${item.uploaderUrl}`} className="w-12 h-12">
                  <img
                    src={item.uploaderAvatar}
                    className="w-full rounded-full"
                  />
                </Link>
                <div className="flex flex-col ml-2">
                  <Link
                    href={`${item.url}`}
                    className="font-bold whitespace-normal overflow-hidden line-clamp-2 text-ellipsis"
                  >
                    {item.title}
                  </Link>
                  <Link
                    href={`${item.uploaderUrl}`}
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
          ) : (
            <Link href={`${item.uploaderUrl}`} className="flex" key={index}>
              <div className="w-[20%] h-fit aspect-video">
                <img
                  className={`w-full h-fit object-cover rounded-full relative`}
                  src={item.thumbnail}
                />
              </div>
              <div className="block ml-5 w-[50%]">
                <h1 className="text-[32px] ">{item?.name}</h1>
                <p className="text-[15px] text-[#606060]">
                  {formatSubscribe(item.subscribers)} Subscribers
                </p>
                <p className="text-[14px] text-[#606060] mt-2 whitespace-normal overflow-hidden line-clamp-2 text-ellipsis">
                  {item.description}
                </p>
              </div>
            </Link>
          )
        )
      )}
    </>
  );
}

export default SearchFilter;
