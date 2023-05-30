import { getServices } from "@/utils/getService";
import post from "@/utils/post";

export const getPosts = async <T>(): Promise<{ data: T[] }> => {
    const endPoint = 'post';
    const { data } = await getServices<T[]>(endPoint);
    return {
      data
    };
  };

  
export const savePost = async <T, R>(
    val: T
  ): Promise<{ msg: string; data: R }> => {
    const url = "post";
    const { msg, data } = await post<T, R>(url, val);
    return { msg: msg, data: data };
  };
  

/*   export const updateUser = async <T>(
    val: UpdateUserType,
    id: number
  ): Promise<{ msg: string; data: T | null }> => {
    const url = "user/" + id;
    const { msg, data } = await put<UpdateUserType, T>(url, val);
    return { msg: msg, data: data };
  }; */
  