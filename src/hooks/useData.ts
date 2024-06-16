import { useQuery } from "@tanstack/react-query";
import { getLists } from "@/services/list";
import { getChannels } from "@/services/channel";

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

export const detailData = async () => {};
