import baseUrl from "@/config/axios";
import { ApiKey } from "@/constants";

export const getChannels = async (id: string) => {
  try {
    const response = await baseUrl.get(
      `/channels?part=snippet&id=${id}&key=${ApiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
