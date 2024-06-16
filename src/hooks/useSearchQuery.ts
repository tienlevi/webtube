import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "@/services/query";
import { useSearchParams } from "next/navigation";

function useSearchQuery() {
  const searchParams = useSearchParams();
  const search: any = searchParams ? searchParams.get("q") : null;
  const { data, ...rest } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      return await searchQuery(search);
    },
  });

  return { data, ...rest };
}

export default useSearchQuery;
