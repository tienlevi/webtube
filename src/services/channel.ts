import baseUrl from "@/config/axios";

export const getChannel = async (id: string) => {
  try {
    const response = await baseUrl.get(`/channel/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getChannelTabs = async (data: string) => {
  try {
    const response = await baseUrl.get(`/channels/tabs?data=${data}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadMoreVideos = async (id: string, nextpage: string) => {
  try {
    const response = await baseUrl.get(
      `/nextpage/channel/${id}?nextpage=${nextpage}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
