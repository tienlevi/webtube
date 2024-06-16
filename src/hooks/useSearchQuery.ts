import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "@/services/query";
import { useSearchParams } from "next/navigation";

function useSearchQuery() {
  const searchParams = useSearchParams();
  const search: any = searchParams ? searchParams.get("q") : null;
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      return await searchQuery(search);
    },
  });

  useEffect(() => {
    const handler = setTimeout(async () => {
      const result = await searchQuery(search);
      console.log(result);
      return result;
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return { data, isLoading, ...rest };
}

export default useSearchQuery;
