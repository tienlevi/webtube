import { useQuery } from "@tanstack/react-query";
import { getLists } from "@/services/list";
import { getChannel, getChannelTabs } from "@/services/channel";
import { getDetail } from "@/services/detail";
import Details from "@/interface/detail";
import { Channel } from "@/interface/channel";

export const channelData = (id: string) => {
  const { data, ...rest } = useQuery<Channel>({
    queryKey: ["data"],
    queryFn: async () => {
      return await getChannel(id);
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

export const channelTabsData = (queryData: string) => {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      return await getChannelTabs(queryData);
    },
  });
};
