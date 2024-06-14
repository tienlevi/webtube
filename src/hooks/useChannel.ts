import { useQuery } from "@tanstack/react-query";
import { getChannels } from "@/services/channel";

export const useChannel = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      return await getChannels(id);
    },
  });

  return { data, ...rest };
};
