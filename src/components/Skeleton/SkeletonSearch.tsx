import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonSearch() {
  return (
    <div className="flex flex-row my-4">
      <div className="w-[40%] relative aspect-video rounded-[12px]">
        <Skeleton className={`h-fit relative aspect-video rounded-[12px]`} />
      </div>
      <div className="w-[60%] flex relative ml-4">
        <Skeleton width={48} height={48} circle />
        <div className="w-3/4 flex flex-col ml-2">
          <Skeleton height={20} />
          <div className="text--text text-sm mt-2">
            <Skeleton height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonSearch;
