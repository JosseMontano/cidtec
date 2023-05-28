import config from "@/config/keys";


async function post<T, R>(
  url: string,
  body: T,
  endpoint?: string
): Promise<{ msg: string; data: R }> {
  try {
    let urlEndpoint = endpoint ? endpoint : config.url;
    const response = await fetch(urlEndpoint + url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "",
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

export default post;
