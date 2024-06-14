import { useQuery } from "@tanstack/react-query";
import { getLists } from "@/services/list";

export const useList = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      return await getLists();
    },
  });

  return { data, ...rest };
};
