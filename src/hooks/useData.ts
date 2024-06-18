import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getLists } from "@/services/list";
import { getChannels } from "@/services/channel";
import { getDetail } from "@/services/detail";
import Details from "@/interface/detail";

export const channelData = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      return await getChannels(id);
    },
  });

  return { data, ...rest };
};

export const listData = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      return await getLists();
    },
  });

  return { data, ...rest };
};

export const detailData = (id: string) => {
  const { data, ...rest } = useQuery<Details>({
    queryKey: ["data"],
    queryFn: async () => {
      return await getDetail(id);
    },
  });

  return { data, ...rest };
};
