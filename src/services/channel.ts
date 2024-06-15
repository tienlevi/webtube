import baseUrl from "@/config/axios";

export const getChannels = async (id: string) => {
  try {
    const response = await baseUrl.get("");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
