import baseUrl from "@/config/axios";

export const getChannel = async (id: string) => {
  try {
    const response = await baseUrl.get(`/channel/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getChannelName = async (q: string) => {
  try {
    const response = await baseUrl.get(`/c/${q}`);
  } catch (error) {
    console.log(error);
  }
};
