import { channelTabsData } from "@/hooks/useData";
import Link from "next/link";

interface Props {
  tab: string;
  tabQuery: string;
}

function Shorts({ tab, tabQuery }: Props) {
  const { data } = channelTabsData(tabQuery);
  return (
    <>
      {tab === "shorts" && (
        <>
          {data?.content?.map(
            (item: any, index: number) =>
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
    </>
  );
}

export default Shorts;
