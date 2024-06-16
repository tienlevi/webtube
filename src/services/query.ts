import baseUrl from "@/config/axios";

export const searchQuery = async (q: string) => {
  try {
    const response = await baseUrl.get(`/search?q=${q}&filter=all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
