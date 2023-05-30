import { getServices } from "@/utils/getService";

export const getPosts = async <T>(): Promise<{ data: T[] }> => {
    const endPoint = 'post';
    const { data } = await getServices<T[]>(endPoint);
    return {
      data
    };
  };