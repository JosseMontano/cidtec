import config from "@/config/keys";

async function put<T, R>(
  url: string,
  body: T
): Promise<{ msg: string; data: R }> {
  try {
    const token = "";
    const response = await fetch(config.url + url, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },

      body: JSON.stringify({
        ...body,
      }),
    });

    const res = await response.json();
    const { message, data } = res;
    return {
      msg: message,
      data: data,
    };
  } catch (error) {
    let msgError = "";
    if (error instanceof Error) {
      msgError = error.message;
    }
    return {
      msg: msgError,
      data: {} as R,
    };
  }
}

export default put;
