import baseUrl from "@/config/axios";

export const getLists = async () => {
  try {
    const response = await baseUrl.get(`/trending?region=VN`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
