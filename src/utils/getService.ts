import config from "@/config/keys";

export const getServices = async <T>(
  endPoint: string
): Promise<{ data: T }> => {
  try {
    /*   const { token } = getCookie("token"); */
    const token = "";
    const response = await fetch(config.url + endPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (response.ok) {
      const result = await response.json();
      return {
        data: result,
      };
    }
    return {
      data: {} as T,
    };
  } catch (err) {
    console.error(err);
    return {
      data: {} as T,
    };
  }
};
