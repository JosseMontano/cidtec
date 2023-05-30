import config from "@/config/keys";


//endpoint is to python
async function deleteServices<R>(
  url: string,
  endpoint?: string
): Promise<{ msg: string; idDelete: number }> {
  try {
    const  token  ="";
    let urlEndpoint = endpoint ? endpoint : config.url;
    const response = await fetch(urlEndpoint + url, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const res = await response.json();
    const { message, id } = res;
    return {
      msg: message,
      idDelete: id,
    };
  } catch (error) {
    let msgError = "";
    if (error instanceof Error) {
      msgError = error.message;
    }
    return {
      msg: msgError,
      idDelete: 0,
    };
  }
}

export default deleteServices;
