import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonHome() {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-video">
        <Skeleton className={`block w-full h-full object-cover relative`} />
      </div>
      <div className="flex mt-3">
        <div className="">
          <Skeleton width={48} height={48} circle />
        </div>
        <div
          className="flex flex-col w-[80%] ml-2"
          style={{ boxOrient: "vertical" }}
        >
          <Skeleton height={20} />
          <div className="text-secondary-text text-sm mt-2">
            <Skeleton height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonHome;
