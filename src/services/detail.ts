import baseUrl from "@/config/axios";

export const getDetail = async (id: string) => {
  try {
    const response = await baseUrl.get(`/streams/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
