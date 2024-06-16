import useSearchQuery from "@/hooks/useSearchQuery";
import { formatViews } from "@/utils/format";
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
        data?.items?.map((item: List, index: number) => (
          <div key={index} className="flex flex-row my-4">
            <a
              href={`/watch/${item.url}`}
              className="w-[40%] h-fit relative aspect-video rounded-[12px]"
            >
              <img
                className={`w-full h-fit object-cover rounded-[12px] relative`}
                src={item.thumbnail}
              />
            </a>
            <div className="w-[60%] flex relative ml-4">
              <Link href={`/channel/${item.uploaderUrl}`} className="w-12 h-12">
                <img
                  src={item.uploaderAvatar}
                  className="w-full rounded-full"
                />
              </Link>
              <div className="flex flex-col ml-2">
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

export default SearchFilter;
