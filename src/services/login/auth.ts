import { UserPostType, UserType } from "@/interfaces/login/userType";
import post from "@/utils/post";

export const login = async <T>(
  val: UserPostType
): Promise<{ msg: string; data: T }> => {
  const url = "user/login";
  const { msg, data } = await post<UserPostType, T>(url, val);
  return { msg: msg, data: data };
};
