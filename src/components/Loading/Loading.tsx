import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-video">
        {/* <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
    {durations}
  </div> */}
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
          {/* <div className="text-secondary-text text-sm">
      {formatedViews} Views •{format(postedAt, "MMMM d, yyyy")}
    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Loading;
